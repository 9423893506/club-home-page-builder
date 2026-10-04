import { ArrowDown, Waves } from 'lucide-react'
import { site } from '@/lib/site'

const bubbles = [
  { left: '8%', size: 10, duration: 11, delay: 0 },
  { left: '18%', size: 6, duration: 9, delay: 3 },
  { left: '30%', size: 14, duration: 14, delay: 1 },
  { left: '45%', size: 8, duration: 10, delay: 5 },
  { left: '58%', size: 12, duration: 13, delay: 2 },
  { left: '70%', size: 6, duration: 8, delay: 4 },
  { left: '82%', size: 16, duration: 15, delay: 0.5 },
  { left: '92%', size: 8, duration: 12, delay: 6 },
]

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-(--brand) text-white transition-colors duration-500">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="bubble absolute bottom-0 rounded-full border border-white/60 bg-white/20"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
        <span className="flex items-center gap-2 font-extrabold">
          <Waves className="size-5" aria-hidden="true" />
          Underwater Robots Project
        </span>
        <a
          href="#join"
          className="rounded-full bg-white px-4 py-2 text-sm font-bold text-(--brand) transition-transform hover:scale-105"
        >
          Join
        </a>
      </nav>

      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 pb-28 pt-12 md:pb-36 md:pt-20">
        <p className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
          Looking for students to team up
        </p>
        <h1 className="text-balance text-4xl font-black leading-tight md:text-6xl">{site.name}</h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/90 md:text-xl">
          {site.whatWeDo}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#join"
            className="rounded-full bg-white px-6 py-3 font-bold text-(--brand) shadow-md transition-transform hover:scale-105"
          >
            How to join
          </a>
          <a
            href="#meet"
            className="flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 font-bold transition-colors hover:bg-white/10"
          >
            When we meet
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-12 w-full fill-white md:h-20"
      >
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </header>
  )
}
