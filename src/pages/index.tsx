import { FC, useState } from "react";
import { Settings } from 'lucide-react';
import { Plus, Minus } from "lucide-react";
import { AllIceCreamList } from "./allIcreamlist";
import { OutputPanel } from "./outputPanel";
import { InputPanel } from "./allinputs";
import { NavBar } from "./navBar";

export const IndexPage: FC = () => {
  {
  /*
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [inputValue, setInputValue] = useState(""); // Hodnota z inputu
  const [items, setItems] = useState<string[]>([]); // Zoznam predmetov
  
  const handleConfirm = () => {
    setItems((prev) => [...prev, `Predmet ${prev.length + 1}`]); // Pridá nový predmet
    setIsDialogOpen(false); // Zavrie dialóg
    };

	  const handleRemoveItem = () => {
		setItems((prev) => prev.slice(0, -1)); // Odstráni posledný predmet zo zoznamu
	  };

	  const handleAddItem = () => {
		if (inputValue.trim() !== "") {
		  setItems([...items, inputValue.trim()]);
		  setInputValue("");
		}
	  };
*/}
  

  return (
   
    <div className="flex flex-row w-full h-screen bg-[#10162F] text-white p-4 gap-4">   
        
    <AllIceCreamList />
    
    <OutputPanel/>
  
    <InputPanel/>
    
  </div>    
   
  );
};
