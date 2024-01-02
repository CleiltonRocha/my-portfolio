// import ImgBoraCodar from '../assets/projetos-img/bora-codar.jpg'
// import ImgCoffeeDelivery from '../assets/projetos-img/coffee-delivery.jpg'
import { ArrowUpRight, GithubLogo } from 'phosphor-react'
import { ReactOriginalIcon } from 'react-devicons'
import colors from 'tailwindcss/colors'

import styledComponentsIcon from '../assets/icons/styled-components.svg'
import ImgGithubBlog from '../assets/projetos-img/github-blog.jpg'
// import ImgHabits from '../assets/projetos-img/habits.jpg'

export function Project() {
  return (
    // <section className="flex w-full flex-col gap-20 desktop:px-20">
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-blue-200 via-blue-600 to-indigo-400 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Github Blog
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="ReactJS" />
    //           <Tags tagName="TypeScript" />
    //           <Tags tagName="Styled Components" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#01</h1>
    //     </div>
    //     <Image
    //       src={ImgGithubBlog}
    //       alt=""
    //       height={800}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-yellow-200 via-blue-100 to-pink-200 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Coffee Delivery
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="ReactJS" />
    //           <Tags tagName="TypeScript" />
    //           <Tags tagName="Styled Components" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#02</h1>
    //     </div>
    //     <Image
    //       src={ImgCoffeeDelivery}
    //       alt=""
    //       height={800}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-purple-200 via-purple-500 to-purple-800 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Habits
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="ReactJS" />
    //           <Tags tagName="TypeScript" />
    //           <Tags tagName="NodeJS" />
    //           <Tags tagName="RadixUI" />
    //           <Tags tagName="TailwindCSS" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#03</h1>
    //     </div>
    //     <Image
    //       src={ImgHabits}
    //       alt=""
    //       height={800}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-orange-300 via-purple-500 to-purple-800 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Desafios
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="HTML" />
    //           <Tags tagName="CSS" />
    //           <Tags tagName="Java Script" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#04</h1>
    //     </div>
    //     <Image
    //       src={ImgBoraCodar}
    //       alt=""
    //       height={600}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    // </section>
    <div className="relative flex w-full items-center gap-16">
      <img
        src={ImgGithubBlog}
        alt=""
        className="rounded-xl"
        data-aos="fade-left"
        width={800}
      />
      <div className="flex h-full flex-col gap-4">
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
              <span className="text-sm text-indigo-200">Styled Components</span>
            </div>
          </div>
        </div>
        <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Github Blog
        </h2>
        <p className=" text-left text-lg text-slate-400">
          Uma aplicação onde é possível buscar issues de um repositório e buscar
          dados do usuário através da api do Github.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <button className="flex w-fit items-center justify-center gap-3 rounded-md bg-indigo-500 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100">
            Visitar <ArrowUpRight weight="bold" size={18} />
          </button>
          <button className="flex w-fit items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100">
            <GithubLogo weight="bold" size={18} /> Ver código fonte
          </button>
        </div>
      </div>
    </div>
  )
}
