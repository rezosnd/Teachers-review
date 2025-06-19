"use client"

import { useEffect } from "react"

export default function CustomCursor() {
  useEffect(() => {
    // Create cursor elements
    const cursorBig = document.createElement("div")
    cursorBig.classList.add("cursor", "big")

    const cursorSmall = document.createElement("div")
    cursorSmall.classList.add("cursor", "small")

    document.body.appendChild(cursorBig)
    document.body.appendChild(cursorSmall)

    // Handler functions
    const handleMouseMove = (e: MouseEvent) => {
      cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      cursorSmall.style.left = `${e.clientX}px`
      cursorSmall.style.top = `${e.clientY}px`
    }

    const handleMouseDown = () => {
      cursorBig.classList.add("click")
      cursorSmall.classList.add("hover__small")
    }

    const handleMouseUp = () => {
      cursorBig.classList.remove("click")
      cursorSmall.classList.remove("hover__small")
    }

    // Hover handlers for links/buttons
    const handleMouseOver = () => {
      cursorBig.classList.add("hover__big")
      cursorSmall.classList.add("hover__small")
    }
    const handleMouseLeave = () => {
      cursorBig.classList.remove("hover__big")
      cursorSmall.classList.remove("hover__small")
    }

    // Register global event listeners
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Register hover listeners on interactive elements
    const links = document.querySelectorAll("a, button, [role='button']")
    links.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver)
      item.addEventListener("mouseleave", handleMouseLeave)
    })

    // Cleanup on unmount
    return () => {
      document.body.removeChild(cursorBig)
      document.body.removeChild(cursorSmall)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      links.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver)
        item.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return null
}

