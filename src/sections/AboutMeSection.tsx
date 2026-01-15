import { Book, Briefcase } from 'phosphor-react'
import colors from 'tailwindcss/colors'
import ProfileImageUrl from '@/assets/profile.jpeg'

export function AboutMeSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="relative w-full items-start pb-20 pt-20 mobile:flex mobile:flex-col mobile:gap-6 mobile:px-4 desktop:grid desktop:grid-cols-2 desktop:gap-16 desktop:px-16"
    >
      <img
        src=""
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
            HTML, CSS, JavaScript, ReactJS, TypeScript, Angular, Node, PHP, Git,
            Github, NextJS, Styled Components, Bootstrap e Sass .
          </strong>
        </p>
        <div className="flex flex-col gap-12">
          <h1 className="mt-5 text-2xl font-medium leading-tight text-zinc-100">
            Experiências e Formação
          </h1>
          <div className="flex items-start justify-start gap-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Briefcase
                  size={24}
                  color={colors.slate['100']}
                  weight="bold"
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Briefcase
                  size={24}
                  color={colors.slate['100']}
                  weight="bold"
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Book size={24} color={colors.slate['100']} weight="bold" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Book size={24} color={colors.slate['100']} weight="bold" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Book size={24} color={colors.slate['100']} weight="bold" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
            </div>
            <div className="flex flex-col gap-14">
              <h2 className="mt-3 inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Janeiro de 2022
              </h2>
              <div>
                <h2 className="text-xl leading-tight text-slate-100">
                  Front-end Developer
                </h2>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  ETS Assessoria e Soluções em Informática
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-12 desktop:-mt-4 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Agosto de 2019 - Dezembro de 2022
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  TI Support | UI Designer
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Prefeitura Municipal de São Gonçalo do Amarante - CE
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-16 desktop:-mt-3 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Novembro de 2023 - Novembro de 2024
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Estudante em desenvolvimento Full-stack
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Rocketseat
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-16 desktop:-mt-4 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Agosto de 2020 - Agosto de 2024
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Bacharelado em Sistemas de Informação
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Faculdade Multiversa Fortaleza
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-16 desktop:-mt-3 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Janeiro de 2017 - Dezembro de 2019
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Técnico em Informática
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
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
