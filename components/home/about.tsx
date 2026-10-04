import { Bot, GraduationCap, Users } from 'lucide-react'

const points = [
  {
    icon: GraduationCap,
    title: 'Who I am',
    text: 'An engineering student pursuing an undergraduate degree.',
  },
  {
    icon: Bot,
    title: 'The project',
    text: 'Robots for exploring underwater areas in the ocean.',
  },
  {
    icon: Users,
    title: 'Who I am looking for',
    text: 'Students who want to work on this project together.',
  },
]

export function About() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <h2 id="about-title" className="text-sm font-extrabold uppercase tracking-widest text-(--brand)">
        What we do
      </h2>
      <p className="mt-3 max-w-2xl text-balance text-3xl font-black leading-tight text-slate-900 md:text-4xl">
        Building robots to explore the ocean
      </p>
      <ul className="mt-10 flex flex-col gap-4 md:flex-row">
        {points.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex flex-1 flex-col gap-3 rounded-3xl bg-(--brand-soft) p-6 transition-transform hover:-translate-y-1"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-(--brand) text-white">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
            <p className="leading-relaxed text-slate-600">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
