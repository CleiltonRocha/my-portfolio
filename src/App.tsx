import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

import { Preloader } from './components/Preloader'
import { AboutMeSection } from './sections/AboutMeSection'
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
      <div>
        <HeroSection />
        <ProjectsSection />
        <AboutMeSection />
      </div>
    </>
  )
}
