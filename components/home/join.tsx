import { Mail, PartyPopper } from 'lucide-react'
import { site } from '@/lib/site'

export function Join() {
  const email = site.contactEmail

  return (
    <section id="join" aria-labelledby="join-title" className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <div className="flex flex-col items-center gap-6 rounded-[2rem] border-2 border-dashed border-(--brand) bg-(--brand-soft) px-6 py-12 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-(--brand) text-white">
          <PartyPopper className="size-7" aria-hidden="true" />
        </span>
        <h2 id="join-title" className="text-balance text-3xl font-black text-slate-900 md:text-4xl">
          How to join
        </h2>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
          We can connect on email or on this page, and from there you can join the party.
        </p>
        {email ? (
          <a
            href={`mailto:${email}`}
            className="flex max-w-full items-center gap-2 rounded-full bg-(--brand) px-5 py-3 font-bold text-white shadow-md transition-transform hover:scale-105 sm:px-7"
          >
            <Mail className="size-5 shrink-0" aria-hidden="true" />
            <span className="break-all">{email}</span>
          </a>
        ) : (
          <p className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-500">
            <Mail className="size-5" aria-hidden="true" />
            [Your email address goes here]
          </p>
        )}
      </div>
    </section>
  )
}
