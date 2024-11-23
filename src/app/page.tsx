import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 relative">
        <About />
        <Contact />
        <Skills />
        <Education />
        <Experience />
        <Portfolio />
      </div>
    </main>
  )
}