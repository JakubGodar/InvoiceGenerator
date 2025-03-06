"use client"
import { FC, useState } from "react";

export const OutputEntry: React.FC = () => {
    const [inputValue, setInputValue] = useState(""); // Hodnota z inputu
    const [items, setItems] = useState<string[]>([]); // Zoznam predmetov

    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue.trim()]);
            setInputValue("");
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Zadaj zmrzlinu v tvare (počet*kód)</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2 text-lg w-full text-center"
                placeholder="Napíš text v tvare 5*1"
            />
        </div>
    );
};
