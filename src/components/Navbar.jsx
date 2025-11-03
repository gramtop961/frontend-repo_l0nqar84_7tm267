import { useState, useEffect } from 'react';
import { Menu, X, User, Layers, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur bg-black/40 shadow-sm' : 'bg-transparent'
  }`;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={navClasses}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToId('home')}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold tracking-tight">Sidharth</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <button onClick={() => scrollToId('about')} className="hover:text-white transition">About</button>
            <button onClick={() => scrollToId('projects')} className="hover:text-white transition">Projects</button>
            <a href="mailto:sidharth@example.com" className="hover:text-white transition">Contact</a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 space-y-2">
            <button onClick={() => scrollToId('about')} className="flex items-center gap-2 w-full rounded-md px-3 py-2 text-left text-white/90 hover:bg-white/10">
              <User className="h-4 w-4" /> About
            </button>
            <button onClick={() => scrollToId('projects')} className="flex items-center gap-2 w-full rounded-md px-3 py-2 text-left text-white/90 hover:bg-white/10">
              <Layers className="h-4 w-4" /> Projects
            </button>
            <a href="mailto:sidharth@example.com" className="block w-full rounded-md px-3 py-2 text-white/90 hover:bg-white/10">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
