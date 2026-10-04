'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import { Check, Palette as PaletteIcon } from 'lucide-react'
import { palettes } from '@/lib/site'

export function SiteShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(palettes[0])

  const style = {
    '--brand': active.hex,
    '--brand-soft': `${active.hex}14`,
    '--brand-mid': `${active.hex}33`,
  } as CSSProperties

  return (
    <div style={style} className="min-h-dvh bg-white text-slate-800 transition-colors">
      {children}

      <div
        role="radiogroup"
        aria-label="Try a sample main color"
        className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-md items-center gap-3 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-lg backdrop-blur"
      >
        <PaletteIcon className="size-4 shrink-0 text-slate-500" aria-hidden="true" />
        <span className="hidden text-sm font-semibold text-slate-600 sm:inline">Sample colors</span>
        <div className="flex flex-1 items-center justify-end gap-2">
          {palettes.map((p) => {
            const selected = p.hex === active.hex
            return (
              <button
                key={p.hex}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-label={p.name}
                title={p.name}
                onClick={() => setActive(p)}
                style={{ backgroundColor: p.hex }}
                className="flex size-8 items-center justify-center rounded-full ring-offset-2 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 aria-checked:ring-2 aria-checked:ring-slate-800"
              >
                {selected && <Check className="size-4 text-white" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
        <span className="sr-only" aria-live="polite">
          {active.name} selected
        </span>
      </div>
    </div>
  )
}
