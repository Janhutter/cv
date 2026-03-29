import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "public");
const OUTPUT_FILE = path.join(PUBLIC_DIR, "publications.json");

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR);
}

async function scrapeScholar() {
  console.log("🚀 Starting Google Scholar scrape for build...");
  
  // Seed data as fallback
  const seedPublications = [
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

  try {
    const scholarUrl = "https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl";
    const response = await axios.get(scholarUrl, {
      timeout: 15000,
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
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(publications, null, 2));
      console.log(`✅ Successfully scraped ${publications.length} publications.`);
    } else {
      console.warn("⚠️ No publications found, using seed data.");
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(seedPublications, null, 2));
    }
  } catch (error: any) {
    console.error("❌ Scraping failed during build:", error.message);
    console.log("ℹ️ Using seed data as fallback.");
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(seedPublications, null, 2));
  }
}

scrapeScholar();
