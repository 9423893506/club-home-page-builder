'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown({ target }: { target: string }) {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    const time = new Date(target).getTime()
    setRemaining(getRemaining(time))
    const id = setInterval(() => setRemaining(getRemaining(time)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: remaining?.days },
    { label: 'Hours', value: remaining?.hours },
    { label: 'Minutes', value: remaining?.minutes },
    { label: 'Seconds', value: remaining?.seconds },
  ]

  return (
    <div className="mt-5 flex gap-2 sm:gap-3">
      {units.map((u) => (
        <div key={u.label} className="flex flex-1 flex-col items-center rounded-2xl bg-white/15 py-4">
          <span className="text-2xl font-black tabular-nums sm:text-4xl">
            {u.value === undefined ? '--' : String(u.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-xs font-semibold text-white/80">{u.label}</span>
        </div>
      ))}
    </div>
  )
}
