import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home as HomeIcon,
  FileText,
  Briefcase,
  GraduationCap,
  Github,
  Download,
  ArrowUpRight,
  ArrowRight,
  Code,
  School,
  Sun,
  Database,
  Scale,
  BrainCircuit,
  Mail,
  Search,
  MessageSquare,
  Library,
  Linkedin,
  Folder,
  Eye,
  Compass,
  Zap,
  Network
} from 'lucide-react';

// --- Types ---

type Tab = 'home' | 'publications' | 'projects' | 'experience' | 'education';

interface Publication {
  title: string;
  link: string;
  authors: string;
  venue: string;
  citations: string;
  year: string;
}

// --- Components ---

const Sidebar = ({ activeTab, scrollToSection }: { activeTab: Tab, scrollToSection: (tab: Tab) => void }) => {
  const navItems: { id: Tab, label: string, icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-stone-50/80 backdrop-blur-xl flex flex-col justify-between py-12 px-8 border-r border-stone-200/50 hidden md:flex">
      <div className="space-y-12">
        <div>
          <h1 className="text-xl font-headline italic text-stone-900 mb-1">Jan Hutter</h1>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-stone-400">AI Research & Engineering</p>
        </div>
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-headline font-medium text-lg flex items-center gap-3 transition-all duration-300 text-left ${activeTab === item.id
                ? 'text-primary border-r-2 border-primary pr-4'
                : 'text-stone-500 hover:text-stone-900'
                }`}
            >
              <item.icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col space-y-3">
          <a href="https://www.linkedin.com/in/jan--hutter/" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2">
            <School size={14} /> Scholar
          </a>
          <a href="https://github.com/Janhutter" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2">
            <Github size={14} /> GitHub
          </a>
          <a href="mailto:jan.hutter@student.uva.nl" className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2">
            <Mail size={14} /> Email
          </a>
        </div>
      </div>
    </aside>
  );
};

const BottomNav = ({ activeTab, scrollToSection }: { activeTab: Tab, scrollToSection: (tab: Tab) => void }) => {
  const navItems: { id: Tab, label: string, icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'publications', label: 'Pubs', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'experience', label: 'Exp', icon: Briefcase },
    { id: 'education', label: 'Edu', icon: GraduationCap },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-stone-100 px-8 py-4 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === item.id ? 'text-primary' : 'text-stone-400'
            }`}
        >
          <item.icon size={20} />
          <span className="text-[10px] font-label uppercase font-bold">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

const Footer = () => (
  <footer className="w-full py-12 mt-32 border-t border-stone-200/30">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">
      <p className="font-body text-[10px] uppercase tracking-widest text-stone-400">© 2025 Jan Hutter</p>
      <div className="flex gap-8">
        <a href="https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-opacity">Google Scholar</a>
        <a href="https://github.com/Janhutter" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-opacity">GitHub</a>
      </div>
    </div>
  </footer>
);

// --- Page Content ---

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-32"
  >
    <section className="space-y-12">
      {/* <h2 className="font-headline text-5xl md:text-7xl text-on-surface leading-[1.1] tracking-tight max-w-3xl"> */}
      {/* Improving <span className="italic text-primary">Information Retrieval</span> through dense neural systems. */}
      {/* </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-12 lg:col-span-8 space-y-8">
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
            Student MSc AI and student assistant at the University of Amsterdam.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/jan--hutter/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary hover:gap-4 transition-all group">
              LinkedIn <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-all group">
              Google Scholar <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Janhutter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-all group">
              GitHub <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const PublicationsPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  const desiredOrder = [
    "A Systematic Reproducibility Study of BSARec for Sequential Recommendation",
    "Improving the Efficiency and Effectiveness of LLM Knowledge Distillation for Conversational Search",
    "Lost but Not Only in the Middle: Positional Bias in Retrieval Augmented Generation"
  ];

  const sortPublications = (pubs: Publication[]) => {
    return [...pubs].sort((a, b) => {
      const indexA = desiredOrder.findIndex(title => a.title.toLowerCase().includes(title.toLowerCase()));
      const indexB = desiredOrder.findIndex(title => b.title.toLowerCase().includes(title.toLowerCase()));

      const valA = indexA === -1 ? Infinity : indexA;
      const valB = indexB === -1 ? Infinity : indexB;
      return valA - valB;
    });
  };

  useEffect(() => {
    const fetchPubs = async () => {
      try {
        // 1. Try static JSON file (GitHub Pages)
        const response = await fetch(`publications.json?t=${Date.now()}`);
        const contentType = response.headers.get("content-type");

        if (response.ok && contentType?.includes("application/json")) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setPublications(sortPublications(data));
            setLoading(false);
            return;
          }
        }

        // 2. Fallback to API (Development)
        const apiResponse = await fetch('api/publications');
        const apiContentType = apiResponse.headers.get("content-type");

        if (apiResponse.ok && apiContentType?.includes("application/json")) {
          const data = await apiResponse.json();
          if (Array.isArray(data)) {
            setPublications(sortPublications(data));
            setLoading(false);
            return;
          }
        }

        // 3. Final fallback: Seed data if everything else fails
        // This prevents the "Unexpected token <" error when the server returns index.html
        setPublications([
          {
            title: "A Systematic Reproducibility Study of BSARec for Sequential Recommendation",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hKvg77sAAAAJ&citation_for_view=hKvg77sAAAAJ:d1gkVwhDpl0C",
            authors: "J Hutter, HC Bakker, S Fris, M Bernardy, Y Liu",
            venue: "48th European Conference on Information Retrieval (ECIR 2026)",
            citations: "0",
            year: "2026"
          },
          {
            title: "Improving the Efficiency and Effectiveness of LLM Knowledge Distillation for Conversational Search",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hKvg77sAAAAJ&citation_for_view=hKvg77sAAAAJ:9yKSN-GCB0IC",
            authors: "S Fris, J Hutter, JH Bertrand, S Lupart, M Aliannejadi",
            venue: "11th International ACM SIGIR Seminar on Conversational Search (SCAI 2026)",
            citations: "0",
            year: "2026"
          },
          {
            title: "Lost but Not Only in the Middle: Positional Bias in Retrieval Augmented Generation",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hKvg77sAAAAJ&citation_for_view=hKvg77sAAAAJ:u-x6o8ySG0sC",
            authors: "J Hutter, D Rau, M Marx, J Kamps",
            venue: "47th European Conference on Information Retrieval (ECIR 2025)",
            citations: "8",
            year: "2025"
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch publications:", error);
        // Fallback to seed data on any network error
        setPublications([
          {
            title: "A Systematic Reproducibility Study of BSARec for Sequential Recommendation",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hKvg77sAAAAJ&citation_for_view=hKvg77sAAAAJ:d1gkVwhDpl0C",
            authors: "J Hutter, HC Bakker, S Fris, M Bernardy, Y Liu",
            venue: "48th European Conference on Information Retrieval (ECIR 2026)",
            citations: "0",
            year: "2026"
          },
          {
            title: "Improving the Efficiency and Effectiveness of LLM Knowledge Distillation for Conversational Search",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hKvg77sAAAAJ&citation_for_view=hKvg77sAAAAJ:9yKSN-GCB0IC",
            authors: "S Fris, J Hutter, JH Bertrand, S Lupart, M Aliannejadi",
            venue: "11th International ACM SIGIR Seminar on Conversational Search (SCAI 2026)",
            citations: "0",
            year: "2026"
          },
          {
            title: "Lost but Not Only in the Middle: Positional Bias in Retrieval Augmented Generation",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hKvg77sAAAAJ&citation_for_view=hKvg77sAAAAJ:u-x6o8ySG0sC",
            authors: "J Hutter, D Rau, M Marx, J Kamps",
            venue: "47th European Conference on Information Retrieval (ECIR 2025)",
            citations: "8",
            year: "2025"
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchPubs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-32"
    >
      <header className="max-w-3xl space-y-8">
        <h2 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tight italic font-light">
          Research <br />Publications
        </h2>
        <div className="h-px w-24 bg-primary"></div>
      </header>

      <div className="space-y-24">
        {loading ? (
          <div className="space-y-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-4 w-24 bg-stone-100 rounded"></div>
                <div className="h-8 w-full bg-stone-100 rounded"></div>
                <div className="h-4 w-2/3 bg-stone-100 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {publications.map((pub, i) => (
              <article key={i} className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
                <div className="space-y-3">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{pub.year}</span>
                  <h3 className="font-headline text-3xl group-hover:text-primary transition-colors duration-300 leading-tight">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {pub.authors}
                  </p>
                  <p className="font-body text-sm text-stone-400 italic">{pub.venue}</p>
                  {pub.citations !== "0" && (
                    <p className="font-label text-[10px] uppercase tracking-widest text-stone-400">Cited by {pub.citations}</p>
                  )}
                </div>
                <div className="flex md:flex-col gap-6 items-start md:items-end pt-2">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                    View <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "S-TTRL: Sample-Wise Test-Time Reinforcement Learning for Large Language Models",
      pdf: "other_papers/S_TTRL__Sample_Wise_Test_Time_Reinforcement_Learning_for_Large_Language_Models_ehn5m4my.pdf",
      description: "We introduce a per-query adaptation framework that improves LLMs using only the single unlabeled prompt at hand. S-TTRL addresses signal sparsity, overfitting, and latency trade-offs by generating multiple candidates and optimizing the policy at test time.",
      supervisors: [
        { name: "Yingjun Du", link: "https://github.com/Yingjun-Du" },
        { name: "Cees Snoek", link: "https://www.ceessnoek.info/" }
      ],
      tags: ["TTRL", "LLM Alignment", "Test-Time Adaptation"],
      icon: BrainCircuit
    },
    {
      title: "Rep2D-BEAT: Evaluating and Enhancing Spatial Understanding in Vision-Language Models",
      pdf: "other_papers/foundation_models_course.pdf",
      description: "We introduce the Rep2D-BEAT benchmark to evaluate and enhance the spatial reasoning abilities of vision-language models. Using replica 3D scans, we generate multi-view 2D images to evaluate models on viewpoint-shifted localization tasks.",
      supervisor: { name: "Samuele Papa", link: "https://samuelepapa.github.io/" },
      tags: ["VLM", "Spatial Reasoning", "3D Scene Understanding"],
      icon: Compass
    },
    {
      title: "TET: Introducing Energy To Test-Time Training",
      pdf: "other_papers/DL2_course.pdf",
      description: "We connect Test-Time Training (TTT) and Test-Time Adaptation (TTA) to improve out-of-distribution generalization. We propose TET, which introduces a stable pretraining phase to energy-based test-time adaptation.",
      supervisor: { name: "Mona Schirmer", link: "https://amlab.science.uva.nl/people/MonaSchirmer/" },
      tags: ["TTA", "TTT", "Energy-Based Models"],
      icon: Zap
    },
    {
      title: "[RE] Are Your Models Still Fair? Fairness Attacks on Graph Neural Networks via Node Injections",
      pdf: "other_papers/fact_course.pdf",
      description: "A replicability study evaluating node injection-based fairness attacks on Graph Neural Networks. We analyze the proposed attack's performance and investigate its capability to undermine fairness under training graph poisoning.",
      supervisor: { name: "Jesse Wonnink" },
      tags: ["GNN", "Fairness Attack", "Reproducibility"],
      icon: Scale
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-32"
    >
      <header className="max-w-3xl space-y-8">
        <h2 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tight">
          Course <br /><span className="italic font-light">Projects</span>
        </h2>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed font-light">
          During my Master's at the University of Amsterdam, I have contributed to several research papers as part of course projects.
        </p>
        <div className="h-px w-24 bg-primary"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <article 
            key={i} 
            className="bg-surface-container-low p-10 rounded-xl hover:bg-surface-container-lowest transition-all duration-500 group flex flex-col justify-between border border-stone-200/30"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <proj.icon className="text-primary shrink-0" size={32} strokeWidth={1.5} />
                <a 
                  href={proj.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-label text-[10px] uppercase tracking-widest flex items-center gap-1.5 hover:text-primary transition-colors text-stone-400 group-hover:text-stone-600"
                >
                  Read Paper <ArrowUpRight size={14} />
                </a>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-headline text-2xl leading-snug group-hover:text-primary transition-colors duration-300">
                  <a href={proj.pdf} target="_blank" rel="noopener noreferrer">
                    {proj.title}
                  </a>
                </h3>
                
                <p className="font-body text-on-surface-variant text-sm leading-relaxed font-light">
                  {proj.description}
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-8 mt-auto">
              <div className="font-body text-xs text-stone-400">
                Supervised by:{' '}
                {proj.supervisors ? (
                  proj.supervisors.map((sup, idx) => (
                    <span key={sup.name}>
                      {idx > 0 && ' & '}
                      <a href={sup.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
                        {sup.name}
                      </a>
                    </span>
                  ))
                ) : proj.supervisor.link ? (
                  <a href={proj.supervisor.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
                    {proj.supervisor.name}
                  </a>
                ) : (
                  <span className="text-stone-500">{proj.supervisor.name}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="bg-stone-200/50 text-stone-600 px-2 py-1 text-[9px] uppercase font-bold tracking-widest rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-32"
  >
    <header className="space-y-8">
      <span className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-400 block">Curriculum Vitae</span>
      <h2 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tight">
        Work <br /><span className="italic font-light">Experience</span>
      </h2>
      <div className="h-px w-24 bg-primary"></div>
    </header>

    <section className="space-y-32">
      {[
        {
          period: 'Sept 2025 — June 2026',
          location: 'Amsterdam, NL',
          role: 'Teaching Assistant',
          company: 'University of Amsterdam',
          desc: 'Assisting in various AI courses, developing teaching strategies and fostering a healthy classroom environment.',
          bullets: [
            'Natural Language Processing',
            'Language theory and Language Processing',
            'ML Operations',
            '2nd Year Bachelor Project'
          ]
        },
        {
          period: 'Aug 2024 — June 2025',
          location: 'Amsterdam, NL',
          role: 'Student Research Assistant',
          company: 'University of Amsterdam',
          desc: 'Working under Maarten Marx and Jaap Kamps on Information Retrieval and Search Systems.',
          bullets: [
            'Improved dense and sparse retrieval systems for large-scale document collections.',
            'Developed advanced retrieval augmented systems for efficient information access.',
            'Enhanced the accessibility and usefulness of public information through modern IR techniques.'
          ]
        },
        {
          period: 'Oct 2022 — Aug 2024',
          location: 'Amsterdam, NL',
          role: 'Teaching Assistant',
          company: 'University of Amsterdam',
          desc: 'Developed teaching skills across many subfields of Artificial Intelligence.',
          bullets: [
            'Computersystems, Computational Logic, Webtechnologies, Introduction to Programming.',
            'Designed 3 different homework assignments for the Computersystems course.',
            'Tailored lessons to diverse student backgrounds.'
          ]
        }
      ].map((exp, i) => (
        <article key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 space-y-2">
            <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold block">{exp.period}</span>
            <p className="font-body text-xs text-stone-400 uppercase tracking-widest">{exp.location}</p>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div>
              <h3 className="font-headline text-3xl text-on-surface mb-2">{exp.role}</h3>
              <p className="font-body text-xl text-stone-500 font-light italic">{exp.company}</p>
            </div>
            <div className="space-y-6">
              <p className="font-body text-lg text-on-surface-variant leading-relaxed font-light">{exp.desc}</p>
              <ul className="space-y-4">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-4 font-body text-sm text-on-surface-variant leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  </motion.div>
);

const EducationPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-32"
  >
    <header className="max-w-3xl space-y-8">
      <h2 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tight">
        Academic <br /><span className="italic font-light">Foundations</span>
      </h2>
      <div className="h-px w-24 bg-primary"></div>
    </header>

    <div className="space-y-32">
      {[
        {
          degree: 'Msc. Artificial Intelligence',
          period: 'Sept 2024 — Ongoing',
          school: 'University of Amsterdam',
          desc: (
            <div className="space-y-4">
              <p>
                Participating in the ELLIS MSc Honours Programme. Electives include: Foundation Models, Deep Learning 2, Recommender Systems, Machine Learning 2, Project AI, and Information Retrieval 2.
              </p>
              <div className="space-y-2">
                <p>
                  Research visit to <strong>EML Munich</strong> while working on my MSc Thesis:
                </p>
                <p className="font-headline text-lg italic text-primary pl-4 border-l-2 border-primary/20 my-2">
                  "Efficient Fine-Tuning of Diffusion Models with Differentiable Rewards"
                </p>
                <p>
                  supervised by Luca Eyring, Yingjun Du, Zeynep Akata, and Cees Snoek.
                </p>
              </div>
            </div>
          ),
          tags: ['Foundation Models', 'Deep Learning', 'Information Retrieval']
        },
        {
          degree: 'BSc. Kunstmatige Intelligentie',
          period: 'Sept 2021 — Aug 2024',
          school: 'University of Amsterdam',
          desc: (
            <div className="space-y-2">
              <p>
                Thesis:
              </p>
              <p className="font-headline text-lg italic text-primary pl-4 border-l-2 border-primary/20 my-2">
                "Lost but not only in the Middle: Positional Bias in Retrieval Augmented Generation"
              </p>
              <p>
                Grade: 8.5. Accepted for ECIR 2025.
              </p>
            </div>
          ),
          tags: ['RAG', 'Positional Bias', 'AI']
        }
      ].map((edu, i) => (
        <article key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-start-3 md:col-span-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h3 className="font-headline text-3xl md:text-4xl leading-tight">{edu.degree}</h3>
              <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold shrink-0">{edu.period}</span>
            </div>
            <p className="font-headline text-xl italic text-stone-400">{edu.school}</p>
            <div className="font-body text-lg text-on-surface-variant leading-relaxed font-light">
              {edu.desc}
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {edu.tags.map(tag => (
                <span key={tag} className="bg-stone-100 px-3 py-1 rounded-sm text-stone-500 text-[9px] uppercase font-bold tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const scrollToSection = (id: Tab) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id as Tab);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-15% 0px -45% 0px" }
    );

    const sections = ['home', 'publications', 'projects', 'experience', 'education'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveTab('education');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      <Sidebar activeTab={activeTab} scrollToSection={scrollToSection} />
      <BottomNav activeTab={activeTab} scrollToSection={scrollToSection} />

      <main className="md:ml-64 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-32 space-y-48">
          <section id="home" className="scroll-mt-24"><HomePage /></section>
          <section id="publications" className="scroll-mt-24"><PublicationsPage /></section>
          <section id="projects" className="scroll-mt-24"><ProjectsPage /></section>
          <section id="experience" className="scroll-mt-24"><ExperiencePage /></section>
          <section id="education" className="scroll-mt-24"><EducationPage /></section>

          {/* <Footer /> */}
        </div>
      </main>
    </div>
  );
}

