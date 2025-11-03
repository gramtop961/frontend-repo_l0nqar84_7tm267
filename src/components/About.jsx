export default function About() {
  return (
    <section id="about" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-transparent to-black" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
            <p className="mt-4 text-white/80">
              I’m Sidharth, a CS undergrad who loves blending design and engineering. I work across the stack
              to ship clean, accessible interfaces backed by solid technical foundations.
            </p>
            <p className="mt-4 text-white/70">
              Interests: Web engineering, UI motion, systems thinking, and building fast dev tools.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Frontend</p>
              <p className="mt-2 text-sm text-white/70">React, Tailwind, Framer Motion</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Backend</p>
              <p className="mt-2 text-sm text-white/70">FastAPI, Node, REST</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Tooling</p>
              <p className="mt-2 text-sm text-white/70">Vite, Git, Testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
