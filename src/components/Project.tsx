// import ImgCoffeeDelivery from '../assets/projetos-img/coffee-delivery.jpg'
import { ArrowUpRight, GithubLogo } from 'phosphor-react'
import {
  Css3PlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  NodejsPlainIcon,
  ReactOriginalIcon,
  TailwindcssPlainIcon,
} from 'react-devicons'
import colors from 'tailwindcss/colors'

import prismaIcon from '../assets/icons/prisma.svg'
import radixIcon from '../assets/icons/radix-ui.svg'
import styledComponentsIcon from '../assets/icons/styled-components.svg'
import ImgBoraCodar from '../assets/projetos-img/bora-codar.jpg'
import ImgGithubBlog from '../assets/projetos-img/github-blog.jpg'
import ImgHabits from '../assets/projetos-img/habits.jpg'

export function Project() {
  return (
    <>
      <div className="flex w-full items-center gap-20 mobile:flex-col desktop:flex-row">
        <img
          src={ImgGithubBlog}
          alt=""
          className="rounded-xl"
          data-aos="fade-left"
          width={800}
        />
        <div className="flex h-full flex-col flex-wrap gap-4">
          <div className="mb-4 flex items-center justify-start gap-3">
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <ReactOriginalIcon
                  className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                  color={colors.indigo['300']}
                />
                <span className="text-sm text-indigo-200">ReactJS</span>
              </div>
            </div>
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <img
                  src={styledComponentsIcon}
                  alt="Ícone da biblioteca styled components"
                  width={20}
                  height={20}
                />
                <span className="text-sm text-indigo-200">Styled C.</span>
              </div>
            </div>
          </div>
          <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            Github Blog
          </h2>
          <p className=" text-left text-lg text-slate-400">
            Uma aplicação onde é possível buscar issues de um repositório e
            buscar dados do usuário através da api do Github.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://github-blog-cr.vercel.app"
              target="_blank"
              className="flex w-fit items-center justify-center gap-3 rounded-md bg-gradient-to-br from-indigo-400 to-indigo-600 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
              rel="noreferrer"
            >
              Visitar <ArrowUpRight weight="bold" size={18} />
            </a>
            <a
              href="https://github.com/CleiltonRocha/github-blog"
              target="_blank"
              className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-slate-700 active:scale-95"
              rel="noreferrer"
            >
              <GithubLogo weight="bold" size={18} /> Código fonte
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-full items-center gap-16 mobile:flex-col desktop:flex-row-reverse">
        <img
          src={ImgHabits}
          alt=""
          className="rounded-xl"
          data-aos="fade-left"
          width={800}
        />
        <div className="flex h-full flex-col flex-wrap gap-4">
          <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <ReactOriginalIcon
                  className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                  color={colors.indigo['300']}
                />
                <span className="text-sm text-indigo-200">
                  ReactJS/React-native
                </span>
              </div>
            </div>

            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <NodejsPlainIcon
                  className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                  color={colors.indigo['300']}
                />
                <span className="text-sm text-indigo-200">NodeJS</span>
              </div>
            </div>
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <img
                  src={prismaIcon}
                  alt="Ícone da biblioteca styled components"
                  width={20}
                  height={20}
                />
                <span className="text-sm text-indigo-200">Prisma</span>
              </div>
            </div>
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <TailwindcssPlainIcon
                  className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                  color={colors.indigo['300']}
                />
                <span className="text-sm text-indigo-200">TailwindCSS</span>
              </div>
            </div>
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <img
                  src={radixIcon}
                  alt="Ícone da biblioteca styled components"
                  width={20}
                  height={20}
                />
                <span className="text-sm text-indigo-200">Radix UI</span>
              </div>
            </div>
          </div>
          <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            Habits
          </h2>
          <p className=" text-left text-lg text-slate-400">
            Essa aplicação permite que os usuários adicionem uma lista de
            hábitos a serem cumpridos ao longo do dia. A aplicação foi
            desenvolvida durante o NLW Setup promovido pela Rocketseat
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://github-blog-cr.vercel.app"
              target="_blank"
              className="flex w-fit items-center justify-center gap-3 rounded-md bg-gradient-to-br from-indigo-400 to-indigo-600 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
              rel="noreferrer"
            >
              Visitar <ArrowUpRight weight="bold" size={18} />
            </a>
            <a
              href="https://github.com/CleiltonRocha/desafios-bora-codar"
              target="_blank"
              className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-slate-700 active:scale-95"
              rel="noreferrer"
            >
              <GithubLogo weight="bold" size={18} /> Código fonte
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-full items-center gap-16 mobile:flex-col desktop:flex-row">
        <img
          src={ImgBoraCodar}
          alt=""
          className="rounded-xl"
          data-aos="fade-left"
          width={800}
        />
        <div className="flex h-full flex-col flex-wrap gap-4">
          <div className="mb-4 flex items-center justify-start gap-3">
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <Html5PlainIcon
                  className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                  color={colors.indigo['300']}
                />
                <span className="text-sm text-indigo-200">HTML</span>
              </div>
            </div>
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <Css3PlainIcon
                  className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                  color={colors.indigo['300']}
                />
                <span className="text-sm text-indigo-200">CSS</span>
              </div>
            </div>
            <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                <JavascriptPlainIcon
                  className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                  color={colors.indigo['300']}
                />
                <span className="text-sm text-indigo-200">JavaScript</span>
              </div>
            </div>
          </div>
          <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            Desafios #boracodar
          </h2>
          <p className=" text-left text-lg text-slate-400">
            Uma coleção de desafios front-end resolvidos para o #BoraCodar, um
            evento promovido pela Rocketseat.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://github-blog-cr.vercel.app"
              target="_blank"
              className="flex w-fit items-center justify-center gap-3 rounded-md bg-gradient-to-br from-indigo-400 to-indigo-600 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
              rel="noreferrer"
            >
              Visitar <ArrowUpRight weight="bold" size={18} />
            </a>
            <a
              href="https://github.com/CleiltonRocha/desafios-bora-codar"
              target="_blank"
              className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-slate-700 active:scale-95"
              rel="noreferrer"
            >
              <GithubLogo weight="bold" size={18} /> Código fonte
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
