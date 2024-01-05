import { Book, Briefcase } from 'phosphor-react'
import colors from 'tailwindcss/colors'

import ProfileImage from '../assets/profile.jpeg'

export function AboutMeSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="relative w-full items-start pb-20 pt-20 mobile:flex mobile:flex-col mobile:gap-6 mobile:px-4 desktop:grid desktop:grid-cols-2 desktop:gap-16 desktop:px-16"
    >
      <img
        src={ProfileImage}
        alt="Foto de Perfil - Cleilton Rocha"
        className="sticky rounded-2xl desktop:top-10"
      />
      <div className="flex w-full flex-col items-start justify-start mobile:mt-10 mobile:gap-6">
        <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-5xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Sobre mim
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
          className="text-lg text-slate-400"
        >
          Olá! Meu nome é{' '}
          <strong className="text-slate-100">Cleilton Rocha</strong>, tenho
          <strong className="text-slate-100"> 22 anos</strong> e sou um
          <strong className="text-slate-100"> programador Front-end. </strong>
          Tenho 2 anos de experiência e possuo conhecimentos sólidos em{' '}
          <strong className="text-slate-100">
            HTML, CSS, JavaScript, ReactJS, TypeScript, Angular, Node, PHP,
            Angular, Git, Github, NextJS, Styled Components, Bootstrap e Sass .
          </strong>
        </p>
        <div className="flex flex-col gap-12">
          <h1 className="text-2xl font-medium leading-tight text-zinc-100">
            Experiências e Formação
          </h1>
          <div className="flex items-start justify-start gap-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-fit overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300">
                  <Briefcase size={24} color={colors.indigo['300']} />
                </div>
              </div>
              <div className="bg-gradient-time-line h-[165px] w-1 rounded-md"></div>
              <div className="w-fit overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300">
                  <Briefcase size={24} color={colors.indigo['300']} />
                </div>
              </div>
              <div className="bg-gradient-time-line h-[165px] w-1 rounded-md"></div>
              <div className="w-fit overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300">
                  <Book size={24} color={colors.indigo['300']} />
                </div>
              </div>
              <div className="bg-gradient-time-line h-[165px] w-1 rounded-md"></div>
              <div className="w-fit overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300">
                  <Book size={24} color={colors.indigo['300']} />
                </div>
              </div>
              <div className="bg-gradient-time-line h-[165px] w-1 rounded-md"></div>
            </div>
            <div className="flex flex-col gap-14">
              <div className="flex items-center gap-8">
                <h2 className="mt-3 inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-2xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  Janeiro de 2022
                </h2>
                <span className="mt-3 flex items-center justify-center rounded-sm bg-green-500/10 px-4 py-1 text-xs text-green-500 ring-1  ring-green-500">
                  Trabalho atual
                </span>
              </div>
              <div>
                <h2 className="text-xl leading-tight text-slate-100">
                  Front-end Developer && UI Designer
                </h2>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  ETS Assessoria e Soluções em Informática
                </p>
              </div>
              <h2 className="-mt-3 inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-2xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Agosto de 2019 a Dezembro de 2022
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  TI Support | UI Designer
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-400 mobile:pb-10 mobile:text-base desktop:text-xl">
                  Prefeitura Municipal de São Gonçalo do Amarante - Ceará
                </p>
              </div>
              <p className="text-2xl leading-tight text-gray-400 mobile:-mt-9 desktop:-mt-3">
                2020 - 2024
              </p>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Bacharelado em Sistemas de Informação
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-400 mobile:pb-10 mobile:text-base desktop:text-xl">
                  Faculdade Lourenço Filho
                </p>
              </div>
              <p className="text-2xl leading-tight text-gray-400 mobile:-mt-9 desktop:-mt-3">
                2017 - 2019
              </p>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Técnico em Informática
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-400 mobile:pb-10 mobile:text-base desktop:text-xl">
                  E.E.E.P Walter Ramos de Araújo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
