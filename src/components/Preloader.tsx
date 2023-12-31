import { useEffect } from 'react'

export function Preloader() {
  useEffect(() => {
    const intro = document.querySelector('.intro') as HTMLElement
    const logoSpan = document.querySelectorAll('.logo')

    if (intro && logoSpan.length > 0) {
      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(
            () => {
              span.classList.add('active')
            },
            (idx + 1) * 200,
          )
        })

        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(
              () => {
                span.classList.remove('active')
                span.classList.add('fade')
              },
              (idx + 1) * 50,
            )
          })
        }, 2000)

        setTimeout(() => {
          intro!.style.top = '-100vh'
        }, 2300)
      })
    }
  }, [])

  return (
    <div className="intro fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <h1 className="logo-header text-zinc-100">
        <span className="logo inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-6xl leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Cleilton
        </span>
        <span className="logo ml-4 inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-6xl leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Rocha
        </span>
      </h1>
    </div>
  )
}
