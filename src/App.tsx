import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

import { Preloader } from './components/Preloader'
import { AboutMeSection } from './sections/AboutMeSection'
import { CtaSection } from './sections/CtaSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'

export function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Preloader />
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
      <CtaSection />
    </>
  )
}
