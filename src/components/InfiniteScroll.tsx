import {
  AdonisjsOriginalIcon,
  AngularjsPlainIcon,
  BootstrapPlainIcon,
  Css3PlainIcon,
  FigmaPlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  NextjsLineIcon,
  NodejsPlainIcon,
  PostgresqlPlainIcon,
  ReactOriginalIcon,
  SassOriginalIcon,
  TailwindcssPlainIcon,
} from 'react-devicons'
import colors from 'tailwindcss/colors'

import styledComponentsIcon from '../assets/icons/styled-components.svg'

export function InfiniteScroll() {
  return (
    <>
      <ul className="mt-10">
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <Html5PlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">HTML</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <Css3PlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">CSS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <JavascriptPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">JavaScript</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <ReactOriginalIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">ReactJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <NextjsLineIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">NextJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <AngularjsPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Angular</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <TailwindcssPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">TailwindCSS</span>
            </div>
          </div>
        </li>
      </ul>
      <ul className="alt mt-3">
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <BootstrapPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Bootstrap</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <SassOriginalIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Sass</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <img
                src={styledComponentsIcon}
                alt="Ícone da biblioteca styled components"
                width={32}
                height={32}
              />
              <span className="text-indigo-200">Styled C.</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <FigmaPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Figma</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <NodejsPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">NodeJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <AdonisjsOriginalIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">AdonisJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800">
              <PostgresqlPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">PostgreSQL</span>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}
