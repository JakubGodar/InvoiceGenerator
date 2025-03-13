"use client"

import type React from "react"

type Props = {
  inputValue: string
  setInputValue: (value: string) => void
  onEnterPress?: () => void // Add this prop for Enter key handling
}

export const OutputEntry: React.FC<Props> = ({ inputValue, setInputValue, onEnterPress }) => {
  // Handle key press events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterPress) {
      e.preventDefault()
      onEnterPress()
    }
  }

  return (
    <input
      type="text"
      placeholder="Zadajte počet*kód (napr. 5*1)"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className="border p-2 w-full items-center"
    />
  )
}

