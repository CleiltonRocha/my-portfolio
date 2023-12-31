import { Project } from '../components/Project'

export function ProjectsSection() {
  return (
    <section className="flex flex-col items-center overflow-hidden mobile:px-4 mobile:py-16 desktop:px-16 desktop:py-[100px]">
      <div className="flex w-full flex-col items-center gap-6">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-5xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400"
        >
          Projetos Recentes
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
          className="text-center text-lg text-slate-400 mobile:max-w-[90%] desktop:max-w-[50%]"
        >
          Alguns projetos selecionados que mostram minha paixão por criar
          layouts e elevar o desenvolvimento front-end a um novo nível.
        </p>
      </div>
      <Project />
    </section>
  )
}
