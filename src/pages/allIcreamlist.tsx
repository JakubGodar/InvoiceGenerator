"use client"
import { FC, useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "src/@/components/ui/input"

type OrderItem = {
  count: number 
  code: string
  name: string
  category: string
}

export const IceCreamPanel: React.FC = () => {
  // Example with more items to demonstrate the split
  const [milkIceCreams, setMilkIceCreams] = useState<string[]>([
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
  ])
  const [fruitIceCreams, setFruitIceCreams] = useState<string[]>([
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
  ])
  const [layeredIceCreams, setLayeredIceCreams] = useState<string[]>([
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
  ])
  const [sorbets, setSorbets] = useState<string[]>([
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
    "1 Ananas",
    "2 Banan",
  ])

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("milk")

  const categories = {
    milk: {
      title: "Mliečne zmrzliny",
      items: milkIceCreams,
      setItems: setMilkIceCreams,
    },
    fruit: {
      title: "Ovocné zmrzliny",
      items: fruitIceCreams,
      setItems: setFruitIceCreams,
    },
    layered: {
      title: "Prekladané zmrzliny",
      items: layeredIceCreams,
      setItems: setLayeredIceCreams,
    },
    sorbet: {
      title: "Sorbety",
      items: sorbets,
      setItems: setSorbets,
    },
  }

  // Input for new item
  const [newItemInput, setNewItemInput] = useState("")
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [editValue, setEditValue] = useState("")

  const handleAddItem = () => {
    if (newItemInput.trim() !== "") {
      const category = categories[selectedCategory as keyof typeof categories]
      category.setItems([...category.items, newItemInput.trim()])
      setNewItemInput("")
    }
  }

  const handleRemoveItem = (index: number) => {
    const category = categories[selectedCategory as keyof typeof categories]
    category.setItems(category.items.filter((_, i) => i !== index))
  }

  const startEditItem = (index: number) => {
    const category = categories[selectedCategory as keyof typeof categories]
    setEditIndex(index)
    setEditValue(category.items[index])
  }

  const saveEditItem = () => {
    if (editIndex !== null && editValue.trim() !== "") {
      const category = categories[selectedCategory as keyof typeof categories]
      const newItems = [...category.items]
      newItems[editIndex] = editValue.trim()
      category.setItems(newItems)
      setEditIndex(null)
      setEditValue("")
    }
  }

  const cancelEdit = () => {
    setEditIndex(null)
    setEditValue("")
  }

  const renderIceCreamCategory = (title: string, items: string[]) => {
    // Split items into two columns
    const midPoint = Math.ceil(items.length / 2)
    const leftColumn = items.slice(0, midPoint)
    const rightColumn = items.slice(midPoint)

    return (
      <div className="border border-red-500 rounded-lg flex flex-col h-[300px]">
        <h3 className="text-xs font-semibold p-1 bg-white">{title}</h3>
        <div className="bg-orange-300 flex-1 flex flex-col p-1">
          <div className="flex-1 flex gap-2">
            {/* Left Column */}
            <div className="flex-1 overflow-y-auto">
              {leftColumn.map((item, index) => (
                <div key={`left-${index}`} className="text-black text-xs py-0.5">
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="flex-1 overflow-y-auto">
              {rightColumn.map((item, index) => (
                <div key={`right-${index}`} className="text-black text-xs py-0.5">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-red-500">Zoznam zmrzlín 🍦</h2>
        <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={() => setIsDialogOpen(true)}>
          <Pencil className="h-4 w-4" />
          <span>Edit</span>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {renderIceCreamCategory("Mliečne zmrzliny", milkIceCreams)}
        {renderIceCreamCategory("Ovocné zmrzliny", fruitIceCreams)}
        {renderIceCreamCategory("Prekladané zmrzliny", layeredIceCreams)}
        {renderIceCreamCategory("Sorbety", sorbets)}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">Edit Ice Cream Lists</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            {/* Category buttons */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(categories).map(([key, { title }]) => (
                <Button
                  key={key}
                  size="sm"
                  variant={selectedCategory === key ? "default" : "outline"}
                  onClick={() => setSelectedCategory(key)}
                  className="text-xs"
                >
                  {title}
                </Button>
              ))}
            </div>

            {/* Add new item */}
            <div className="flex items-center gap-2">
              <Input
                placeholder="Add new item..."
                value={newItemInput}
                onChange={(e) => setNewItemInput(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleAddItem} size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            {/* List of items */}
            <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto border rounded-md p-2">
              {categories[selectedCategory as keyof typeof categories].items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-1 border-b last:border-0">
                  {editIndex === index ? (
                    <div className="flex items-center gap-2 flex-1">
                      <Input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="flex-1"
                        autoFocus
                      />
                      <Button onClick={saveEditItem} size="sm" variant="outline">
                        Save
                      </Button>
                      <Button onClick={cancelEdit} size="sm" variant="ghost">
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <>
                      <span className="text-sm">{item}</span>
                      <div className="flex items-center gap-1">
                        <Button onClick={() => startEditItem(index)} size="sm" variant="ghost">
                          <Pencil className="h-3 w-3" />
                        </Button>
                        <Button
                          onClick={() => handleRemoveItem(index)}
                          size="sm"
                          variant="ghost"
                          className="text-red-500"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)} size="sm">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

