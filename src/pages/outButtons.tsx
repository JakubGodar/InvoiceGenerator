import { FC, useState } from "react";


export const OutPutButtons: FC = () => {
    const [inputValue, setInputValue] = useState(""); // Hodnota z inputu
    const [items, setItems] = useState<string[]>([]); // Zoznam predmetov
  
      const handleRemoveItem = () => {
          setItems((prev) => prev.slice(0, -1)); // Odstráni posledný predmet zo zoznamu
        };
  
      const handleAddItem = () => {
          if (inputValue.trim() !== "") {
            setItems([...items, inputValue.trim()]);
            setInputValue("");
          }
        };
  

    return (
        <div className="flex justify-around mt-4">
          <button
            onClick={handleAddItem}
            className="flex justify-around mt-4 bg-orange-400 text-white py-2 px-10 rounded-md hover:bg-orange-500"
          >
            Pridať
          </button>
		  <button className="flex justify-around mt-4 bg-orange-400 text-white py-2 px-10 rounded-md hover:bg-orange-500">
            Náhľad
          </button>
          <button
            onClick={handleRemoveItem}
            className="flex justify-around mt-4 bg-orange-400 text-white py-2 px-10 rounded-md hover:bg-orange-500"
          >
            Zmazať
          </button>
          <button className="flex justify-around mt-4 bg-orange-400 text-white py-2 px-10 rounded-md hover:bg-orange-500">
            Tlačiť
          </button>
		  
        </div>

   
  );
  
};

export{};