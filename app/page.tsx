import { SiteShell } from '@/components/home/site-shell'
import { Hero } from '@/components/home/hero'
import { About } from '@/components/home/about'
import { Meeting } from '@/components/home/meeting'
import { Join } from '@/components/home/join'
import { site } from '@/lib/site'

export default function Page() {
  return (
    <SiteShell>
      <Hero />
      <main>
        <About />
        <Meeting />
        <Join />
      </main>
      <footer className="pb-24 pt-4 text-center text-sm text-slate-500">{site.name}</footer>
    </SiteShell>
  )
}
