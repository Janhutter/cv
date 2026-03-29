import express from "express";
import { createServer as createViteServer } from "vite";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE_FILE = path.join(__dirname, "publications_cache.json");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Initialize cache from file if it exists
  let cachedPublications: any[] = [
    {
      title: "Lost but Not Only in the Middle: Positional Bias in Retrieval Augmented Generation",
      link: "https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl",
      authors: "J Hutter, M Marx, J Kamps",
      venue: "47th European Conference on Information Retrieval (ECIR 2025)",
      citations: "7",
      year: "2025"
    },
    {
      title: "A Systematic Reproducibility Study of BSARec for Sequential Recommendation",
      link: "https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl",
      authors: "J Hutter, M Marx, J Kamps",
      venue: "University of Amsterdam",
      citations: "0",
      year: "2024"
    }
  ];
  let lastFetch = 0;

  if (fs.existsSync(CACHE_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
      if (data.publications && data.publications.length > 0) {
        // Filter out any "WooGLe" related items from loaded cache just in case
        cachedPublications = data.publications.filter((p: any) => 
          !p.title.toLowerCase().includes("woogle")
        );
        lastFetch = data.lastFetch || 0;
        console.log(`Loaded ${cachedPublications.length} publications from disk cache.`);
      }
    } catch (e) {
      console.error("Failed to load publications cache:", e);
    }
  }

  const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 hours

  app.get("/api/publications", async (req, res) => {
    const now = Date.now();
    const forceRefresh = req.query.refresh === 'true';

    // If we have data and it's relatively fresh, return it (unless force refresh)
    if (!forceRefresh && now - lastFetch < CACHE_DURATION && cachedPublications.length > 0) {
      return res.json(cachedPublications);
    }

    try {
      console.log("Attempting to scrape Google Scholar...");
      const scholarUrl = "https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl";
      const response = await axios.get(scholarUrl, {
        timeout: 10000,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9,nl;q=0.8",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache"
        }
      });

      const $ = cheerio.load(response.data);
      const publications: any[] = [];

      $(".gsc_a_tr").each((i, el) => {
        const title = $(el).find(".gsc_a_at").text().trim();
        const link = "https://scholar.google.com" + $(el).find(".gsc_a_at").attr("href");
        const authors = $(el).find(".gs_gray").first().text().trim();
        const venue = $(el).find(".gs_gray").last().text().trim();
        const citations = $(el).find(".gsc_a_ac").text().trim() || "0";
        const year = $(el).find(".gsc_a_y").text().trim();

        // Strict filtering to avoid headers and noise
        const isHeader = ["Titel", "Title", "Jaar", "Year", "Auteurs", "Authors", "Geciteerd door", "Cited by"].includes(title);
        
        if (title && authors && !isHeader && !title.toLowerCase().includes("woogle")) {
          publications.push({
            title,
            link,
            authors,
            venue,
            citations,
            year
          });
        }
      });

      if (publications.length > 0) {
        cachedPublications = publications;
        lastFetch = now;
        // Persist to disk
        fs.writeFileSync(CACHE_FILE, JSON.stringify({
          publications: cachedPublications,
          lastFetch: lastFetch
        }, null, 2));
        console.log("Successfully updated publications cache.");
      }
      res.json(cachedPublications);
    } catch (error: any) {
      if (error.response?.status === 429) {
        console.warn("Google Scholar rate limited (429). Serving from cache.");
      } else {
        console.error("Error scraping Google Scholar:", error.message);
      }
      // Return cache even if it's old or empty (to avoid 500)
      res.json(cachedPublications);
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
