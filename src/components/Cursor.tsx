'use client'

import { gsap } from 'gsap'
import { useEffect } from 'react'

export function Cursor() {
  useEffect(() => {
    const links = document.querySelectorAll('a, button')
    const cursorText = document.querySelector('.cursor-text') as HTMLElement

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      gsap.to('.cursor', { x: clientX, y: clientY })
    }

    const onMouseEnterLink = () => {
      gsap.to('.cursor', { scale: 2 })
    }

    const onMouseLeaveLink = () => {
      gsap.to('.cursor', { scale: 1 })
      cursorText.style.display = 'none'
    }

    document.addEventListener('mousemove', onMouseMove)

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })
  }, [])

  return (
    <div
      id="cursor"
      className="custom-cursor cursor mobile:hidden desktop:block"
    >
      <span className="cursor-text">View</span>
    </div>
  )
}
