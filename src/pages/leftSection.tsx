"use client";
import { FC } from "react";
import { ScrollArea } from "src/components/ui/scroll-area";

// Polia s názvami zmrzlín pre jednotlivé kategórie
export const milkIceCreams = [
	{ id: "M1", name: "Čokoládová" },
	{ id: "M2", name: "Vanilková" },
	{ id: "M3", name: "Karamelová" },
	{ id: "M4", name: "Kokosová" },
];

export const fruitIceCreams = [
	{ id: "F1", name: "Jahodová" },
	{ id: "F2", name: "Malinová" },
	{ id: "F3", name: "Mango" },
	{ id: "F4", name: "Citrónová" },
];

export const layeredIceCreams = [
	{ id: "L1", name: "Čoko-vanilka" },
	{ id: "L2", name: "Pistáciová" },
	{ id: "L3", name: "Mätová" },
];

export const sorbets = [
	{ id: "S1", name: "Citrón" },
	{ id: "S2", name: "Pomaranč" },
	{ id: "S3", name: "Lesné plody" },
];
const LeftSection: FC = () => {
	return (
		<div className="flex flex-col w-1/3 bg-card p-4 rounded-lg shadow-lg border-2 border-orange-400">
			<h2 className="text-lg font-semibold mb-4">Zoznam zmrzlín</h2>

			{/* Zoznamy zmrzlín */}
			<div className="grid grid-cols-2 gap-4">
				{/* Mliečne zmrzliny */}
				<div>
					<h4 className="text-md font-semibold mb-2">Mliečne zmrzliny</h4>
					<ScrollArea className="h-72 bg-muted rounded-lg p-2 border-2 border-orange-400">
						<div className="space-y-2">
							{milkIceCreams.map((iceCream, index) => (
								<div key={index} className="bg-white text-orange-400 py-1 px-2 rounded-md">
									{iceCream.name} ({iceCream.id})
								</div>
							))}
						</div>
					</ScrollArea>
					<div className="flex justify-around mt-6">
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Pridať</button>
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Odstrániť</button>
					</div>
				</div>

				{/* Ovocné zmrzliny */}
				<div>
					<h4 className="text-md font-semibold mb-2">Ovocné zmrzliny</h4>
					<ScrollArea className="h-72 bg-muted rounded-lg p-2 border-2 border-orange-400">
						<div className="space-y-2">
							{fruitIceCreams.map((iceCream, index) => (
								<div key={index} className="bg-white text-orange-400 py-1 px-2 rounded-md">
									{iceCream.name} ({iceCream.id})
								</div>
							))}
						</div>
					</ScrollArea>
					<div className="flex justify-around mt-6">
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Pridať</button>
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Odstrániť</button>
					</div>
				</div>

				{/* Prekladané zmrzliny */}
				<div>
					<h4 className="text-md font-semibold mb-2">Prekladané zmrzliny</h4>
					<ScrollArea className="h-72 bg-muted rounded-lg p-2 border-2 border-orange-400">
						<div className="space-y-2">
							{layeredIceCreams.map((iceCream, index) => (
								<div key={index} className="bg-white text-orange-400 py-1 px-2 rounded-md">
									{iceCream.name} ({iceCream.id})
								</div>
							))}
						</div>
					</ScrollArea>
					<div className="flex justify-around mt-6">
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Pridať</button>
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Odstrániť</button>
					</div>
				</div>

				{/* Sorbety */}
				<div>
					<h4 className="text-md font-semibold mb-2">Sorbety</h4>
					<ScrollArea className="h-72 bg-muted rounded-lg p-2 border-2 border-orange-400">
						<div className="space-y-2">
							{sorbets.map((iceCream, index) => (
								<div key={index} className="bg-white text-orange-400 py-1 px-2 rounded-md">
									{iceCream.name} ({iceCream.id})
								</div>
							))}
						</div>
					</ScrollArea>
					<div className="flex justify-around mt-6">
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Pridať</button>
						<button className="bg-orange-400 text-primary-foreground py-2 px-4 rounded-md hover:bg-orange-500/90">Odstrániť</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSection;
