import { useEffect } from 'react'

import bgStars from '../assets/bg-stars.svg'
import profileRounded from '../assets/profile.jpeg'
import { AnimatedTitles } from '../components/AnimatedTitles'
import { InfiniteScroll } from '../components/InfiniteScroll'

export function HeroSection() {
  useEffect(() => {
    const paragraph = document.querySelector(
      '.paragraph-animated',
    ) as HTMLElement

    const image = document.querySelector('.profile-rounded') as HTMLElement

    setTimeout(() => {
      paragraph.classList.add('animate-reveal')
      image.classList.add('animate-reveal')
    }, 2000)
  }, [])

  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-hidden mobile:items-center mobile:px-4 mobile:pb-16 desktop:items-center desktop:px-10">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <img src={bgStars} alt="" className="absolute top-0 h-full w-full" />
      <div className="flex h-full items-center justify-center mobile:gap-8 desktop:gap-6">
        <div className="flex flex-col mobile:items-center mobile:gap-2 desktop:items-center desktop:gap-2 ">
          <img
            src={profileRounded}
            alt="Imagem Cleilton Rocha Arredondada"
            className="profile-rounded rounded-full"
            width={80}
            height={80}
          />
          <AnimatedTitles className="mobile:text-center desktop:text-center">
            <span className="">UI Designer</span> &<br />
            <span className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Front-end Developer
            </span>
          </AnimatedTitles>
          <p className="paragraph-animated mt-6 text-lg text-slate-400 mobile:max-w-[90%] mobile:text-center desktop:max-w-[60%] desktop:text-center">
            Olá, seja muito bem-vindo ao meu portfólio! Me chamo Cleilton Rocha,
            sou um desenvolvedor Front-end apaixonado por criar experiências
            incríveis!
          </p>
        </div>
      </div>
      <InfiniteScroll />
    </section>
  )
}
