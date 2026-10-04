import type { CSSProperties, ReactNode } from 'react'
import { brandColor } from '@/lib/site'

export function SiteShell({ children }: { children: ReactNode }) {
  const style = {
    '--brand': brandColor,
    '--brand-soft': `${brandColor}14`,
    '--brand-mid': `${brandColor}33`,
  } as CSSProperties

  return (
    <div style={style} className="min-h-dvh bg-white text-slate-800">
      {children}
    </div>
  )
}
