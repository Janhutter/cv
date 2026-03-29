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
  MessageSquare
} from 'lucide-react';

// --- Types ---

type Tab = 'home' | 'publications' | 'experience' | 'education';

interface Publication {
  title: string;
  link: string;
  authors: string;
  venue: string;
  citations: string;
  year: string;
}

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: Tab, setActiveTab: (tab: Tab) => void }) => {
  const navItems: { id: Tab, label: string, icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'publications', label: 'Publications', icon: FileText },
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
              onClick={() => setActiveTab(item.id)}
              className={`font-headline font-medium text-lg flex items-center gap-3 transition-all duration-300 text-left ${
                activeTab === item.id 
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

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: Tab, setActiveTab: (tab: Tab) => void }) => {
  const navItems: { id: Tab, label: string, icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'publications', label: 'Pubs', icon: FileText },
    { id: 'experience', label: 'Exp', icon: Briefcase },
    { id: 'education', label: 'Edu', icon: GraduationCap },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-stone-100 px-8 py-4 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === item.id ? 'text-primary' : 'text-stone-400'
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
      <h2 className="font-headline text-5xl md:text-7xl text-on-surface leading-[1.1] tracking-tight max-w-3xl">
        Improving <span className="italic text-primary">Information Retrieval</span> through dense neural systems.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-start-5 md:col-span-8 space-y-8">
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
            I am a student and student assistant at the University of Amsterdam, specializing in Artificial Intelligence. My research focuses on positional bias in RAG systems and Information Retrieval.
          </p>
          <div className="flex gap-6">
            <a href="https://scholar.google.com/citations?user=hKvg77sAAAAJ&hl=nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary hover:gap-4 transition-all group">
              Google Scholar <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Janhutter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-all group">
              GitHub <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-12">
      <div className="flex items-baseline justify-between border-b border-outline-variant/20 pb-4">
        <h3 className="font-headline text-3xl italic">Key Projects</h3>
        <span className="font-label text-[10px] uppercase tracking-widest text-stone-400">Selected Work</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface-container-low p-10 rounded-xl hover:bg-surface-container-lowest transition-all duration-500 group">
          <BrainCircuit className="text-primary mb-8" size={32} strokeWidth={1.5} />
          <h4 className="font-headline text-2xl mb-4">Positional Bias in RAG</h4>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">
            A systematic analysis of how the position of retrieved documents impacts response quality in Retrieval Augmented Generation. Accepted for ECIR 2025.
          </p>
          <div className="flex flex-wrap gap-2">
            {['NLP', 'RAG', 'Information Retrieval'].map(tag => (
              <span key={tag} className="bg-stone-200/50 text-stone-600 px-2 py-1 text-[9px] uppercase font-bold tracking-widest rounded-sm">{tag}</span>
            ))}
          </div>
        </div>
        <div className="bg-surface-container-low p-10 rounded-xl hover:bg-surface-container-lowest transition-all duration-500 group">
          <Search className="text-primary mb-8" size={32} strokeWidth={1.5} />
          <h4 className="font-headline text-2xl mb-4">Sequential Recommendation</h4>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">
            A systematic reproducibility study of BSARec, exploring the effectiveness of various architectures for sequential recommendation tasks.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Recommender Systems', 'Reproducibility'].map(tag => (
              <span key={tag} className="bg-stone-200/50 text-stone-600 px-2 py-1 text-[9px] uppercase font-bold tracking-widest rounded-sm">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-12">
      <div className="flex items-baseline justify-between border-b border-outline-variant/20 pb-4">
        <h3 className="font-headline text-3xl italic">Recent Updates</h3>
        <span className="font-label text-[10px] uppercase tracking-widest text-stone-400">News</span>
      </div>
      <div className="divide-y divide-stone-200/50">
        {[
          { date: 'June 2025', title: 'Paper Accepted at ECIR 2025', desc: 'Our work "Lost but Not Only in the Middle: Positional Bias in Retrieval Augmented Generation" was accepted for the 47th European Conference on Information Retrieval.' },
          { date: 'Sept 2024', title: 'Started MSc AI at UvA', desc: 'Began my Master of Science in Artificial Intelligence and joined the ELLIS MSc Honours Programme.' },
          { date: 'Aug 2024', title: 'Bachelor Thesis Completed', desc: 'Successfully defended my thesis on positional bias in RAG, receiving a grade of 8.5.' }
        ].map((news, i) => (
          <div key={i} className="group py-10 flex flex-col md:flex-row gap-4 md:gap-24 hover:bg-stone-50/50 transition-colors px-4 -mx-4">
            <time className="font-label text-[10px] uppercase tracking-[0.2em] text-stone-400 pt-1 shrink-0">{news.date}</time>
            <div className="space-y-2">
              <h5 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">{news.title}</h5>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-xl">{news.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const PublicationsPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPubs = async () => {
      try {
        const response = await fetch('/api/publications');
        const data = await response.json();
        if (Array.isArray(data)) {
          setPublications(data);
        } else {
          console.error("Received non-array data for publications:", data);
          setPublications([]);
        }
      } catch (error) {
        console.error("Failed to fetch publications:", error);
        setPublications([]);
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
          Research <br/>Publications
        </h2>
        <div className="h-px w-24 bg-primary"></div>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed font-light">
          Automatically synced from Google Scholar. Exploring the boundaries of RAG, sequential recommendation, and information retrieval.
        </p>
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
        Work <br/><span className="italic font-light">Experience</span>
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
        Academic <br/><span className="italic font-light">Foundations</span>
      </h2>
      <div className="h-px w-24 bg-primary"></div>
    </header>

    <div className="space-y-32">
      {[
        {
          degree: 'Msc. Artificial Intelligence',
          period: 'Sept 2024 — Ongoing',
          school: 'University of Amsterdam',
          desc: 'Participating in the ELLIS MSc Honours Programme. Electives include: Foundation Models, Deep Learning 2, Recommender Systems, Machine Learning 2, Information Theory, and Information Retrieval 2.',
          tags: ['Foundation Models', 'Deep Learning', 'Information Retrieval']
        },
        {
          degree: 'BSc. Kunstmatige Intelligentie',
          period: 'Sept 2021 — Aug 2024',
          school: 'University of Amsterdam',
          desc: 'Thesis: "Lost but not only in the Middle: Positional Bias in Retrieval Augmented Generation". Grade: 8.5. Accepted for ECIR 2025.',
          tags: ['RAG', 'Positional Bias', 'AI']
        }
      ].map((edu, i) => (
        <article key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-start-3 md:col-span-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h3 className="font-headline text-3xl md:text-4xl group-hover:italic transition-all duration-500 leading-tight">{edu.degree}</h3>
              <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold shrink-0">{edu.period}</span>
            </div>
            <p className="font-headline text-xl italic text-stone-400">{edu.school}</p>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-light">{edu.desc}</p>
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

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="md:ml-64 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-32">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && <HomePage key="home" />}
            {activeTab === 'publications' && <PublicationsPage key="pubs" />}
            {activeTab === 'experience' && <ExperiencePage key="exp" />}
            {activeTab === 'education' && <EducationPage key="edu" />}
          </AnimatePresence>
          
          <Footer />
        </div>
      </main>
    </div>
  );
}

