import { FC, useState, useEffect } from "react";
import iceCreamsData from "src/data/IceCream.json";

type IceCream = {
  id: number;
  name: string;
  type: string;
  amount: number;
};

type Props = {
  onSelectIceCream?: (iceCream: IceCream) => void; // Volitelná funkcia na výber zmrzliny
};

export const IceCreamList: React.FC<Props> = ({ onSelectIceCream }) => {
  const [milkIceCreams, setMilkIceCreams] = useState<IceCream[]>([]);
  const [fruitIceCreams, setFruitIceCreams] = useState<IceCream[]>([]);
  const [specialIceCreams, setSpecialIceCreams] = useState<IceCream[]>([]);
  const [sorbets, setSorbets] = useState<IceCream[]>([]);

  // Nacítanie zmrzlín pri prvom zobrazení
  useEffect(() => {
    const iceCreams = iceCreamsData as IceCream[];

    setMilkIceCreams(iceCreams.filter((ice) => ice.type === "M"));
    setFruitIceCreams(iceCreams.filter((ice) => ice.type === "F"));
    setSpecialIceCreams(iceCreams.filter((ice) => ice.type === "I"));
    setSorbets(iceCreams.filter((ice) => ice.type === "S"));
  }, []);

  // UI renderovanie jednej kategórie
  const renderIceCreamCategory = (title: string, items: IceCream[]) => (
    <div className="border border-red-500 rounded-lg flex flex-col h-[350px] w-[230px]">
      <h3 className="text-xs  p-1 bg-white text-black font-bold">{title}</h3>
      <div className="bg-orange-300 flex-1 overflow-y-auto p-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="text-black text-xs py-0.5 cursor-pointer hover:bg-gray-200 p-1 rounded font-bold"
            onClick={() => onSelectIceCream && onSelectIceCream(item)}
          >
            {item.id} - {item.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 gap-2">
      {renderIceCreamCategory("Mliecne zmrzliny", milkIceCreams)}
      {renderIceCreamCategory("Ovocné zmrzliny", fruitIceCreams)}
      {renderIceCreamCategory("Špeciálne zmrzliny", specialIceCreams)}
      {renderIceCreamCategory("Sorbety", sorbets)}
    </div>
  );
};

