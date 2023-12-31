import { Book, Briefcase } from 'phosphor-react'

import ProfileImage from '../assets/profile-image.png'
import { AnimatedTitles } from '../components/AnimatedTitles'

export function AboutMeSection() {
  return (
    <section className="relative w-full pb-20 pt-20 mobile:flex mobile:flex-col mobile:gap-6 mobile:px-4 desktop:grid desktop:grid-cols-2 desktop:px-16">
      <img
        src={ProfileImage}
        alt="Foto de Perfil - Cleilton Rocha"
        className="sticky grayscale filter desktop:top-10"
      />
      <div className="flex w-full flex-col items-start justify-start mobile:mt-10 mobile:gap-6 desktop:gap-16">
        <AnimatedTitles>Sobre mim</AnimatedTitles>
        <p className="font-normal leading-tight text-gray-400 mobile:pb-10 mobile:text-base desktop:text-2xl">
          Eu sou um profissional apaixonado por Design e front-end. Adoro criar
          designs bonitos e intuitivos para interfaces digitais e estou
          constantemente buscando novas formas de melhorar a experiência do
          usuário.
        </p>
        <div className="flex flex-col gap-12">
          <h1 className="text-2xl font-medium leading-tight text-zinc-100">
            Experiências e Formação
          </h1>
          <div className="flex items-start justify-start gap-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                <Briefcase size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-white"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                <Briefcase size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-white"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                <Book size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-white"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                <Book size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-white"></div>
            </div>
            <div className="flex flex-col gap-14">
              <div className="flex items-center gap-8">
                <p className="mt-3 text-2xl font-bold leading-tight text-gray-400">
                  2023
                </p>
                <span className="mt-3 flex items-center justify-center rounded-sm bg-green-500/10 px-4 py-1 text-xs text-green-500 ring-1  ring-green-500">
                  Trabalho atual
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
                  Full Stack Developer | UI Designer
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-400 mobile:pb-10 mobile:text-base desktop:text-xl">
                  ETS Assessoria e Soluções em Informática
                </p>
              </div>
              <p className="text-2xl font-bold leading-tight text-gray-400 mobile:-mt-14 desktop:-mt-4">
                2019 - 2022
              </p>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
                  TI Support | UI Designer
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-400 mobile:pb-10 mobile:text-base desktop:text-xl">
                  Prefeitura Municipal de São Gonçalo do Amarante - Ceará
                </p>
              </div>
              <p className="text-2xl font-bold leading-tight text-gray-400 mobile:-mt-9 desktop:-mt-3">
                2020 - 2024
              </p>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
                  Bacharelado em Sistemas de Informação
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-400 mobile:pb-10 mobile:text-base desktop:text-xl">
                  Faculdade Lourenço Filho
                </p>
              </div>
              <p className="text-2xl font-bold leading-tight text-gray-400 mobile:-mt-9 desktop:-mt-3">
                2017 - 2019
              </p>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
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
