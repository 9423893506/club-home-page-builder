import { CalendarDays, Video } from 'lucide-react'
import { site } from '@/lib/site'
import { Countdown } from './countdown'

export function Meeting() {
  return (
    <section id="meet" aria-labelledby="meet-title" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 md:flex-row md:items-center">
        <div className="flex-1">
          <h2 id="meet-title" className="text-sm font-extrabold uppercase tracking-widest text-(--brand)">
            When and where we meet
          </h2>
          <p className="mt-3 text-balance text-3xl font-black leading-tight text-slate-900 md:text-4xl">
            {"Let's meet online"}
          </p>
          <dl className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <dt className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-(--brand-mid) text-(--brand)">
                <CalendarDays className="size-5" aria-hidden="true" />
                <span className="sr-only">Date</span>
              </dt>
              <dd className="pt-2 text-lg font-bold text-slate-800">{site.meetingDate}</dd>
            </div>
            <div className="flex items-start gap-4">
              <dt className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-(--brand-mid) text-(--brand)">
                <Video className="size-5" aria-hidden="true" />
                <span className="sr-only">Place</span>
              </dt>
              <dd className="pt-2 text-lg font-bold text-slate-800">{site.meetingPlace}</dd>
            </div>
          </dl>
        </div>

        <div className="float flex-1 rounded-3xl bg-(--brand) p-8 text-white shadow-xl transition-colors duration-500">
          <p className="font-bold text-white/80">Countdown to our meeting</p>
          <Countdown target={site.meetingDateISO} />
        </div>
      </div>
    </section>
  )
}
