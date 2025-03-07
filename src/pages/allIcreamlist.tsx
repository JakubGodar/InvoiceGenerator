import { FC, useState } from "react";
import {IceCreamList} from "../pages/iceCreamList"

type OrderItem = {
    count: number 
    code: string
    name: string
    category: string
}

export const AllIceCreamList: React.FC = () => {
    const [inputValue, setInputValue] = useState(""); // Hodnota z inputu
    const [items, setItems] = useState<string[]>([]); // Zoznam predmetov

    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue.trim()]);
            setInputValue("");
        }
    };

    return (
        <div className="flex flex-col w-1/3 bg-card p-4 rounded-lg shadow-lg">
        <IceCreamList />
        </div>
    );
};
