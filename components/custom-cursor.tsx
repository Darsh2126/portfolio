"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener("mousemove", updatePosition)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .interactive")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 border-green-400 transition-all duration-200 ${
            isHovering ? "scale-150 bg-green-400/20" : "scale-100"
          }`}
        />
      </div>
      <div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50 bg-green-400 rounded-full"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          transition: "transform 0.05s ease-out",
        }}
      />
    </>
  )
}
