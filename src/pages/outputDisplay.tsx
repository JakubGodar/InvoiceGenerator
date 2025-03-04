import { FC, useState } from "react";


export const OutPutDisplay: FC = () => {
    const [inputValue, setInputValue] = useState(""); // Hodnota z inputu
    const [items, setItems] = useState<string[]>([]); // Zoznam predmetov
    
  

    return (
        <div className="mt-4 text-lg p-2 rounded-md text-center">
        {items.length > 0 ? items[items.length - 1] : "Zatiaľ nič pridané"}

        </div>

   
  );
};