import React from "react";
import iceCreamsData from "src/data/IceCream.json";
import { IceCream } from "../lib/types";

export default function AllIceCreamList() {
	return (
		<div className="flex flex-col w-full md:w-1/3 bg-white p-4 rounded-xl shadow-lg overflow-auto">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<IceCreamListItem title="Mliečne zmrzliny" items={iceCreamsData.filter((ice) => ice.type === "M")} heightClass="h-90" />
				<IceCreamListItem title="Ovocné zmrzliny" items={iceCreamsData.filter((ice) => ice.type === "F")} heightClass="h-90" />
				<IceCreamListItem title="Špeciálne zmrzliny" items={iceCreamsData.filter((ice) => ice.type === "I")} heightClass="h-80" />
				<IceCreamListItem title="Sorbety" items={iceCreamsData.filter((ice) => ice.type === "S")} heightClass="h-80" />
			</div>
		</div>
	);
}

function IceCreamListItem({ title, items, heightClass }: { title: string; items: IceCream[]; heightClass: string }) {
	const half = Math.ceil(items.length / 2);
	const firstCol = items.slice(0, half);
	const secondCol = items.slice(half);

	return (
		<div className={`border border-gray-400 bg-white rounded-xl shadow-md flex flex-col ${heightClass} w-full sm:w-65`}>
			<h3 className="text-base p-2 bg-gray-100 text-gray-900 font-semibold border-b border-gray-300 rounded-t-xl">{title}</h3>
			<div className="flex-1 bg-orange-50 overflow-y-auto p-2">
				<div className="grid grid-cols-2 gap-2">
					<div className="space-y-1">
						{firstCol.map((item) => (
							<div key={item.id} className="text-gray-800 text-xs font-bold cursor-pointer hover:bg-orange-200 p-1 rounded">
								{item.id} – {item.name}
							</div>
						))}
					</div>
					<div className="space-y-1">
						{secondCol.map((item) => (
							<div key={item.id} className="text-gray-800 text-xs font-bold cursor-pointer hover:bg-orange-200 p-1 rounded">
								{item.id} – {item.name}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
