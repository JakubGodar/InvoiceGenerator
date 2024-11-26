"use client";
import { FC, useState } from "react";
import { milkIceCreams, fruitIceCreams, layeredIceCreams, sorbets } from "./leftSection";

const allIceCreams = [...milkIceCreams, ...fruitIceCreams, ...layeredIceCreams, ...sorbets];

const MiddleSection: FC = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState<{ id: string; name: string; count: number }[]>([]);

	const handleAddItem = () => {
		const [count, id] = inputValue.split("*");
		const iceCream = allIceCreams.find((item) => item.id === id.trim());
		if (iceCream && count && !isNaN(Number(count))) {
			setList((prevList) => [...prevList, { id: iceCream.id, name: iceCream.name, count: Number(count) }]);
			setInputValue("");
		} else {
			alert("Zadaj platný formát: počet*kód");
		}
	};
	const handleRemoveItem = () => {
		if (list.length > 0) {
			const newList = [...list];
			newList.pop(); // Removes the last item from the list
			setList(newList);
		} else {
			alert("Nie je čo odstrániť!");
		}
	};

	return (
		<div className="flex flex-col w-1/3 bg-white p-4 rounded-lg shadow-lg border-2 border-orange-400">
			<h2 className="text-md font-semibold mb-4 text-center">Zadaj zmrzlinu v tvare (počet*kód)</h2>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Napíš text v tvare 5*M1"
				className="border-2 border-orange-400 rounded-md p-2 text-lg w-full mb-4 text-center bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
			/>
			<button onClick={handleAddItem} className="bg-orange-400 text-black py-2 px-4 rounded-md hover:bg-orange-500 mb-4">
				Pridať
			</button>
			<button onClick={handleAddItem} className="bg-orange-400 text-black py-2 px-4 rounded-md hover:bg-orange-500 mb-4">
				Nahlad
			</button>
			<button onClick={handleRemoveItem} className="bg-orange-400 text-black py-2 px-4 rounded-md hover:bg-orange-500 mb-4">
				Odstranit
			</button>
			<div className="text-lg p-2 bg-orange-300 rounded-md text-center mb-4">
				{list.length === 0 ? "Zatiaľ nič pridané" : list.map((item) => `${item.count}x ${item.name}`).join(", ")}
			</div>
			<div className="flex-1 bg-white rounded-lg p-4 overflow-y-auto border border-orange-400">
				{list.map((item, index) => (
					<div key={index} className="bg-orange-300 text-black py-1 px-2 rounded-md mb-2">
						{item.count}x {item.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default MiddleSection;
