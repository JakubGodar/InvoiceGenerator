import { IceCream } from "@/lib/types";
import React from "react";
import iceCreamsData from "src/data/IceCream.json";

export default function AllIceCreamList() {
	return (
		<div className="flex flex-col w-1/3 bg-card p-4 rounded-lg shadow-lg">
			<div className="grid grid-cols-2 gap-2">
				<IceCreamListItem title="Mliecne zmrzlin" items={iceCreamsData.filter((ice) => ice.type === "M")} />
				<IceCreamListItem title="Ovocné zmrzliny" items={iceCreamsData.filter((ice) => ice.type === "F")} />
				<IceCreamListItem title="Špeciálne zmrzliny" items={iceCreamsData.filter((ice) => ice.type === "I")} />
				<IceCreamListItem title="Sorbety" items={iceCreamsData.filter((ice) => ice.type === "S")} />
			</div>
		</div>
	);
}

function IceCreamListItem({ title, items }: { title: string; items: IceCream[] }) {
	return (
		<div className="border border-red-500 rounded-lg flex flex-col h-[350px] w-[230px]">
			<h3 className="text-xs  p-1 bg-white text-black font-bold">{title}</h3>
			<div className="bg-orange-300 flex-1 overflow-y-auto p-1">
				{items.map((item) => (
					<div key={item.id} className="text-black text-xs py-0.5 cursor-pointer hover:bg-gray-200 p-1 rounded font-bold">
						{item.id} - {item.name}
					</div>
				))}
			</div>
		</div>
	);
}
