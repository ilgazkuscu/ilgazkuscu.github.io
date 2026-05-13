import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useState } from 'react';
import { projects, type Project } from './data/projects';
import { ProjectDeck } from './components/ProjectDeck';

const links = [
  { label: 'GitHub', href: 'https://github.com/ilgazkuscu', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ilgaz-kuscu-9a4a68331', icon: Linkedin },
  { label: 'Email', href: 'mailto:ilgazkuscu@gmail.com', icon: Mail },
  { label: 'Resume PDF', href: '/resume.pdf', icon: FileText }
];

const skillGroups = [
  {
    title: 'Modeling',
    items: ['Time series', 'ARIMA/ARIMAX', 'HMMs', 'XGBoost', 'Random Forest', 'Logistic Regression', 'MLP', 'PCA']
  },
  {
    title: 'Data work',
    items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'SQL', 'ROOT', 'parallel processing']
  },
  {
    title: 'Products',
    items: ['React', 'TypeScript', 'FastAPI', 'Electron', 'Plotly', 'Dash', 'Tailwind CSS', 'GitHub Pages']
  },
  {
    title: 'Domains',
    items: ['Prediction markets', 'macroeconomics', 'housing', 'traffic risk', 'particle physics', 'sports models']
  }
];

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-ink text-cream selection:bg-copper selection:text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects onOpen={setActiveProject} reduceMotion={reduceMotion} />
        <Skills />
      </main>
      <Footer />
      <AnimatePresence>
        {activeProject && <ProjectDeck project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-ink/70 px-5 py-4 backdrop-blur-xl md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="font-serif text-2xl italic tracking-tight text-cream">Ilgaz Kuscu</a>
        <div className="hidden items-center gap-6 text-sm text-cream/62 md:flex">
          <a className="transition hover:text-copper-light" href="#about">About</a>
          <a className="transition hover:text-copper-light" href="#projects">Projects</a>
          <a className="transition hover:text-copper-light" href="#skills">Skills</a>
          <a className="transition hover:text-copper-light" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40 lg:pt-48">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-copper/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-copper-light">Data scientist building tools that ship</p>
        <h1 className="max-w-6xl font-serif text-[clamp(4.1rem,13vw,13rem)] leading-[0.82] tracking-[-0.075em] text-cream">
          Signal over noise.
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <p className="text-sm uppercase tracking-[0.28em] text-cream/42">Ilgaz Kuscu · Washington, DC</p>
          <div>
            <p className="max-w-3xl text-xl leading-relaxed text-cream/72 md:text-2xl">
              I build data products for forecasting, markets, risk, and decision intelligence. My background moves from physics at LMU Munich and CERN research to an M.S. in Data Science at GW with a 4.0 GPA.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-cream/56 md:text-lg">
              I like problems where the dataset is messy, the incentives matter, and the model only helps after the question is framed correctly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className="group inline-flex items-center gap-2 rounded-full border border-cream/12 bg-cream/[0.04] px-4 py-2.5 text-sm font-medium text-cream/78 transition hover:border-copper hover:text-copper-light"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-cream/8 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-copper-light">About</p>
          <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.055em] md:text-7xl">Physics-trained. Product-minded.</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-cream/68">
          <p>
            I am pursuing an M.S. in Data Science at George Washington University with a 4.0 GPA. Before that, I studied Physics at LMU Munich and worked on CERN ATLAS Open Data research, where careful validation mattered more than pretty charts.
          </p>
          <p>
            My approach is strategic first and technical second. I use data as a tool to understand systems, expose weak signals, and ship products that make decisions easier.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen, reduceMotion }: { onOpen: (project: Project) => void; reduceMotion: boolean | null }) {
  return (
    <section id="projects" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-copper-light">Projects</p>
            <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-none tracking-[-0.055em] md:text-7xl">Click a card. Open the deck.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-cream/55">
            Each project opens inline into a slide-like case study. No extra page, no generic portfolio template.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              className="group min-h-[21rem] rounded-[1.75rem] border border-cream/10 bg-cream/[0.035] p-5 text-left transition hover:border-copper/55 hover:bg-cream/[0.06] focus:outline-none focus:ring-2 focus:ring-copper"
              onClick={() => onOpen(project)}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.22), ease: [0.22, 1, 0.36, 1] }}
              aria-label={`Open project deck for ${project.title}`}
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-cream/38">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" size={18} aria-hidden="true" />
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-copper-light">{project.category}</p>
                  <h3 className="font-serif text-3xl leading-none tracking-[-0.045em] text-cream md:text-4xl">{project.title}</h3>
                  <p className="mt-5 text-base leading-7 text-cream/56">{project.tagline}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full border border-cream/10 px-3 py-1 text-xs text-cream/48">{item}</span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-cream/8 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-copper-light">Skills</p>
        <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-none tracking-[-0.055em] md:text-7xl">Tools by use case, not by ego.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-cream/10 bg-cream/[0.035] p-6">
              <h3 className="font-serif text-2xl tracking-[-0.035em] text-cream">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-cream/[0.06] px-3 py-1.5 text-sm text-cream/58">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-cream/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-copper-light">Contact</p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-none tracking-[-0.055em] md:text-7xl">Let’s build something with a real signal.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/58">Built with React, TypeScript, Tailwind CSS, Framer Motion, and GitHub Pages.</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {links.slice(0, 3).map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
              className="inline-flex items-center gap-2 rounded-full border border-cream/12 px-4 py-2.5 text-sm font-medium text-cream/72 transition hover:border-copper hover:text-copper-light"
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default App;
