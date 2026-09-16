'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TypingTest } from '@/components/TypingTest'
import { StatsDashboard } from '@/components/StatsDashboard'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { AccountPanels } from '@/components/AccountPanels'
import { AuthGate } from '@/components/AuthGate'

export default function Page() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AuthGate>
    <div className="site-shell">
      <Navbar activeSection={activeSection} onNavigate={scrollTo} />
      <main>
        <section id="home">
          <Hero onStart={() => scrollTo('test')} />
        </section>
        <AccountPanels />
        <TypingTest />
        <section id="stats">
          <StatsDashboard />
        </section>
        <About />
      </main>
      <Footer />
    </div>
    </AuthGate>
  )
}
