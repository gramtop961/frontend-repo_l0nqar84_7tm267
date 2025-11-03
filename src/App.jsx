import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <section className="bg-zinc-950 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-center">
              <h3 className="text-xl font-semibold">Let’s connect</h3>
              <p className="mt-2 text-white/80">
                Whether it’s an internship, collaboration, or a cool idea — I’d love to hear from you.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:sidharth@example.com"
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:shadow"
                >
                  Email Me
                </a>
                <a
                  href="#projects"
                  className="rounded-md px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/20 hover:bg-white/10"
                >
                  View Projects
                </a>
              </div>
            </div>
            <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Sidharth. Crafted with care.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
