"use client"
import { FC, useState } from "react";
import { OutputEntry } from "./outputEntry";
import { OutPutDisplay } from "./outputDisplay";
import { OutPutButtons } from "./outButtons";
import { OutPutList } from "./outputList";

export const OutputPanel: React.FC = () => {
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

  <div className="flex flex-col w-50% bg-card p-4 rounded-lg shadow-lg ml-2 mr-2"> 
    <OutputEntry />
    <OutPutDisplay />
    <OutPutButtons />
    <OutPutList />      
  </div>
);
};