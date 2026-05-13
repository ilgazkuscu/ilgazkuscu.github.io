import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode, UIEvent } from 'react';
import type { Project } from '../data/projects';

type ProjectDeckProps = {
  project: Project | null;
  onClose: () => void;
};

const slideIds = ['hero', 'context', 'built', 'results', 'links'];

export function ProjectDeck({ project, onClose }: ProjectDeckProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    previousFocus.current = document.activeElement as HTMLElement;
    setActiveSlide(0);
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => closeButtonRef.current?.focus(), 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previousFocus.current?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const node = event.currentTarget;
    const index = Math.round(node.scrollTop / Math.max(node.clientHeight, 1));
    setActiveSlide(Math.min(slideIds.length - 1, Math.max(0, index)));
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-ink/95 text-cream backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-deck-title"
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-ink via-ink/80 to-transparent" />
      <div className="fixed left-4 right-4 top-4 z-30 flex items-center justify-between gap-4 md:left-8 md:right-8 md:top-8">
        <div className="hidden text-xs uppercase tracking-[0.35em] text-cream/50 sm:block">{project.category}</div>
        <button
          ref={closeButtonRef}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 bg-cream/10 text-cream transition hover:bg-cream hover:text-ink focus:outline-none focus:ring-2 focus:ring-copper"
          onClick={onClose}
          aria-label="Close project deck"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cream/10 bg-ink/60 px-3 py-2 backdrop-blur md:bottom-8" aria-hidden="true">
        {slideIds.map((id, index) => (
          <span
            key={id}
            className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-copper' : 'w-1.5 bg-cream/30'}`}
          />
        ))}
      </div>

      <motion.div
        className="h-full overflow-y-auto overscroll-contain scroll-smooth snap-y snap-mandatory"
        onScroll={handleScroll}
        initial={reduceMotion ? { scale: 1 } : { scale: 0.96, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <DeckSlide className="pt-24 md:pt-32">
          <div className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-copper">{project.category}</p>
              <h2 id="project-deck-title" className="max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-cream md:text-8xl lg:text-9xl">
                {project.title}
              </h2>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-cream/72 md:text-2xl">{project.tagline}</p>
            </div>
            <ProjectVisual project={project} />
          </div>
        </DeckSlide>

        <DeckSlide>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-copper">Problem / context</p>
            <p className="font-serif text-4xl leading-tight tracking-[-0.04em] text-cream md:text-6xl">{project.context}</p>
          </div>
        </DeckSlide>

        <DeckSlide>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-copper">What I built</p>
              <h3 className="font-serif text-5xl leading-none tracking-[-0.05em] md:text-7xl">Built like a working system.</h3>
            </div>
            <div className="space-y-5">
              {project.built.map((item) => (
                <div key={item} className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-5 text-lg leading-relaxed text-cream/78 md:p-6 md:text-xl">
                  {item}
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-3">
                {project.stack.slice(0, 8).map((item) => (
                  <span key={item} className="rounded-full border border-copper/30 bg-copper/10 px-3 py-1.5 text-sm font-medium text-copper-light">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide>
          <div>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-copper">Results / metrics</p>
            <div className="grid gap-4 md:grid-cols-2">
              {project.metrics.map((metric) => (
                <div key={metric.value} className="rounded-[2rem] border border-cream/10 bg-cream/[0.04] p-8 md:p-10">
                  <div className="font-serif text-6xl leading-none tracking-[-0.07em] text-cream md:text-8xl">{metric.value}</div>
                  <p className="mt-4 text-lg text-cream/60">{metric.label}</p>
                </div>
              ))}
            </div>
            {(project.status || project.where) && (
              <p className="mt-8 max-w-2xl text-lg text-cream/60">{project.status || project.where}</p>
            )}
          </div>
        </DeckSlide>

        <DeckSlide className="pb-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-copper">Stack & links</p>
              <h3 className="font-serif text-5xl leading-none tracking-[-0.05em] md:text-7xl">Open the work, or ask me about the tradeoffs.</h3>
            </div>
            <div>
              <div className="mb-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-cream/15 px-3 py-1.5 text-sm text-cream/70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 font-semibold text-ink transition hover:bg-copper-light" href={project.github} target="_blank" rel="noreferrer">
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-3 font-semibold text-cream transition hover:border-copper hover:text-copper-light" href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} /> Live demo
                  </a>
                )}
                {!project.github && !project.demo && <span className="text-cream/55">Links coming later. The build details are summarized above.</span>}
              </div>
            </div>
          </div>
        </DeckSlide>
      </motion.div>
    </motion.div>
  );
}

function DeckSlide({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`flex min-h-screen snap-start items-center px-6 py-20 md:px-12 lg:px-20 ${className}`}>{children}</section>;
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-cream/10 bg-gradient-to-br from-cream/[0.08] via-copper/10 to-transparent p-6 shadow-2xl shadow-black/30 md:min-h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(184,115,51,0.28),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(245,245,245,0.11),transparent_28%)]" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-cream/45">
          <span>{project.id}</span>
          <span className="text-right">{project.status || project.where || 'Portfolio deck'}</span>
        </div>
        <div className="grid gap-4">
          {project.metrics.map((metric) => (
            <div key={metric.value} className="rounded-3xl border border-cream/10 bg-ink/40 p-5 backdrop-blur">
              <div className="font-serif text-5xl tracking-[-0.06em] text-copper-light md:text-7xl">{metric.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-cream/50">{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="rounded-full bg-cream/10 px-3 py-1.5 text-sm text-cream/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
