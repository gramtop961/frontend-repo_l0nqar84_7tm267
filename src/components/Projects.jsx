import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Modern Portfolio',
    description:
      'A sleek, responsive portfolio with 3D hero and smooth page transitions. Built for performance and accessibility.',
    tags: ['React', 'Tailwind', 'Spline'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Flow',
    description:
      'A minimal task manager with keyboard-first UX and offline persistence. Focused on speed and clarity.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Design Systems Kit',
    description:
      'A collection of accessible UI primitives and tokens to ship consistent, beautiful apps faster.',
    tags: ['Design', 'Tokens', 'Docs'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
          <a
            href="mailto:sidharth@example.com"
            className="text-sm text-white/80 hover:text-white"
          >
            Let’s build something together →
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-white/5" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.github}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/20 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-black hover:shadow"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
