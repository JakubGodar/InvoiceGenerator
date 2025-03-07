"use client"
import { FC, useState, useEffect } from "react";
import { OutputEntry } from "./outputEntry";
import { OutPutDisplay } from "./outputDisplay";
import { OutPutButtons } from "./outButtons";
import { OutPutList } from "./outputList";
import iceCreamsData from "src/data/IceCream.json";

export type IceCream = {
  id: number;
  name: string;
  type: string;
  amount: number;
};


export const OutputPanel: React.FC = () => {
  // Zoznam všetkých zmrzlín
  const [allIceCreams, setAllIceCreams] = useState<IceCream[]>([]);
  // Hodnota z inputu
  const [inputValue, setInputValue] = useState("");
  // Zoznam zmrzlín v objednávke
  const [orderItems, setOrderItems] = useState<IceCream[]>([]);
  // Chybová správa
  const [error, setError] = useState<string | null>(null);

  // Načítanie zmrzlín pri mountnutí komponentu
  useEffect(() => {
    const iceCreams = iceCreamsData as IceCream[];
    setAllIceCreams(iceCreams);
  }, []);

  // Pridanie zmrzliny do objednávky
  const handleAddItem = () => {
    if (inputValue.trim() === "") return;

    // Parsovanie vstupu vo formáte "počet*kód"
    const match = inputValue.trim().match(/^(\d+)\*(\d+)$/);
    if (!match) {
      setError("Nesprávny formát. Použite: počet*kód (napr. 5*1)");
      return;
    }

    const count = Number.parseInt(match[1], 10);
    const id = Number.parseInt(match[2], 10);

    // Kontrola, či kód existuje
    const iceCream = allIceCreams.find((ice) => ice.id === id);
    if (!iceCream) {
      setError(`Kód zmrzliny "${id}" neexistuje`);
      return;
    }

    // Pridanie položky do objednávky
    setOrderItems((prev) => [
      ...prev,
      { ...iceCream, amount: count },
    ]);

    setInputValue("");
    setError(null);
  };

  // Odstránenie poslednej položky z objednávky
  const handleRemoveItem = () => {
    setOrderItems((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex flex-col w-1/3 bg-white text-black p-4 rounded-lg shadow-lg">
      <OutputEntry inputValue={inputValue} setInputValue={setInputValue} />
      
      <OutPutDisplay selectedItem={orderItems.length > 0 ? orderItems[orderItems.length - 1] : null} 
error={error} 
/>

      <div className="flex gap-2 justify-center mt-4">
        
      <OutPutButtons onAdd={handleAddItem} onRemove={handleRemoveItem} />
      </div>
      <OutPutList items={orderItems} />
    </div>
  );
};
