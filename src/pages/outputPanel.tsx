"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { OutputEntry } from "./outputEntry"
import { OutPutDisplay } from "./outputDisplay"
import { OutPutButtons } from "./outButtons"
import { OutPutList } from "./outputList"
import iceCreamsData from "src/data/IceCream.json"

export type IceCream = {
  id: number
  name: string
  type: string
  amount: number
}

export const OutputPanel: React.FC = () => {
  // Zoznam všetkých zmrzlín
  const [allIceCreams, setAllIceCreams] = useState<IceCream[]>([])
  // Hodnota z inputu
  const [inputValue, setInputValue] = useState("")
  // Zoznam zmrzlín v objednávke
  const [orderItems, setOrderItems] = useState<IceCream[]>([])
  // Chybová správa
  const [error, setError] = useState<string | null>(null)
  // Zobrazovaný text v displeji
  const [displayText, setDisplayText] = useState("")

  // Načítanie zmrzlín pri mountnutí komponentu
  useEffect(() => {
    const iceCreams = iceCreamsData as IceCream[]
    setAllIceCreams(iceCreams)
  }, [])

  // Aktualizácia displeja pri zmene inputu
  useEffect(() => {
    if (inputValue === "") {
      setDisplayText("")
      return
    }

    // Kontrola formátu "počet*kód"
    const match = inputValue.match(/^(\d+)\*(\d*)$/)
    if (match) {
      const count = match[1]
      const idPart = match[2]

      if (idPart) {
        // Ak je zadané ID, pokúsime sa nájsť zodpovedajúcu zmrzlinu
        const id = Number.parseInt(idPart, 10)
        const iceCream = allIceCreams.find((ice) => ice.id === id)

        if (iceCream) {
          setDisplayText(`${count}*${iceCream.name}`)
          setError(null)
        } else {
          setDisplayText(inputValue)
          setError(`Kód zmrzliny "${id}" neexistuje`)
        }
      } else {
        // Ak je zadaný len počet a *, zobrazíme to tak ako je
        setDisplayText(inputValue)
        setError(null)
      }
    } else {
      // Ak formát nezodpovedá, zobrazíme vstup tak ako je
      setDisplayText(inputValue)
      setError(null)
    }
  }, [inputValue, allIceCreams])

  // Pridanie zmrzliny do objednávky
  const handleAddItem = () => {
    if (inputValue.trim() === "") return

    // Parsovanie vstupu vo formáte "počet*kód"
    const match = inputValue.trim().match(/^(\d+)\*(\d+)$/)
    if (!match) {
      setError("Nesprávny formát. Použite: počet*kód (napr. 5*1)")
      return
    }

    const count = Number.parseInt(match[1], 10)
    const id = Number.parseInt(match[2], 10)

    // Kontrola, či kód existuje
    const iceCream = allIceCreams.find((ice) => ice.id === id)
    if (!iceCream) {
      setError(`Kód zmrzliny "${id}" neexistuje`)
      return
    }

    // Kontrola, či už táto zmrzlina je v objednávke
    const existingItemIndex = orderItems.findIndex((item) => item.id === id)

    if (existingItemIndex !== -1) {
      // Ak zmrzlina už existuje v objednávke, zvýšime jej množstvo
      setOrderItems((prev) => {
        const newItems = [...prev]
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          amount: newItems[existingItemIndex].amount + count,
        }
        return newItems
      })
    } else {
      // Ak zmrzlina ešte nie je v objednávke, pridáme ju ako novú položku
      setOrderItems((prev) => [...prev, { ...iceCream, amount: count }])
    }

    setInputValue("")
    setDisplayText("")
    setError(null)
  }

  // Odstránenie poslednej položky z objednávky
  const handleRemoveItem = () => {
    setOrderItems((prev) => prev.slice(0, -1))
  }

  // Funkcia na aktualizáciu inputu
  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  // Nové funkcie pre úpravu položiek v zozname

  // Zvýšenie množstva konkrétnej položky
  const handleIncreaseAmount = (index: number) => {
    setOrderItems((prev) => {
      const newItems = [...prev]
      newItems[index] = {
        ...newItems[index],
        amount: newItems[index].amount + 1,
      }
      return newItems
    })
  }

  // Zníženie množstva konkrétnej položky
  const handleDecreaseAmount = (index: number) => {
    setOrderItems((prev) => {
      const newItems = [...prev]
      if (newItems[index].amount > 1) {
        newItems[index] = {
          ...newItems[index],
          amount: newItems[index].amount - 1,
        }
      }
      return newItems
    })
  }

  // Odstránenie konkrétnej položky zo zoznamu
  const handleRemoveSpecificItem = (index: number) => {
    setOrderItems((prev) => {
      const newItems = [...prev]
      newItems.splice(index, 1)
      return newItems
    })
  }

  return (
    <div className="flex flex-col w-1/3 bg-white text-black p-4 rounded-lg shadow-lg">
      <OutputEntry inputValue={inputValue} setInputValue={handleInputChange} onEnterPress={handleAddItem} />

      <OutPutDisplay
        selectedItem={orderItems.length > 0 ? orderItems[orderItems.length - 1] : null}
        error={error}
        displayText={displayText}
      />

      <div className="flex gap-2 justify-center mt-4">
        <OutPutButtons onAdd={handleAddItem} onRemove={handleRemoveItem} />
      </div>

      <OutPutList
        items={orderItems}
        onIncreaseAmount={handleIncreaseAmount}
        onDecreaseAmount={handleDecreaseAmount}
        onRemoveItem={handleRemoveSpecificItem}
      />
    </div>
  )
}

