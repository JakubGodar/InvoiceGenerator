import type React from "react";
import { IceCream } from "@/lib/types";

type Props = {
	selectedItem: IceCream | null;
	error: string | null;
	displayText: string;
};

export const OutPutDisplay: React.FC<Props> = ({ selectedItem, error, displayText }) => {
	return (
		<div className="p-4 bg-gray-100 rounded-lg min-h-[80px] text-black">
			{error && <p className="text-red-500">{error}</p>}
			{displayText ? (
				<p className="text-lg font-bold">{displayText}</p>
			) : selectedItem ? (
				<p className="text-lg font-bold">
					{selectedItem.amount}× {selectedItem.name}
				</p>
			) : (
				<p className="text-gray-500">Žiadna zmrzlina nebola vybraná.</p>
			)}
		</div>
	);
};
