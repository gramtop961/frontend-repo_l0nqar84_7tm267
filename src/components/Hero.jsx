import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 pb-24 pt-40 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/20 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to internships & freelance
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Sidharth — Building elegant digital experiences
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          I’m a second-year Computer Science student at Model Engineering College (ranked #2 in my state).
          Previously educated at Rajagiri, I’m passionate about crafting tech that feels modern, playful, and fast.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:shadow-md transition"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:sidharth@example.com"
            className="rounded-md px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/30 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
