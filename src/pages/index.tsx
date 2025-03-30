import { FC } from "react";
import { OutputPanel } from "./outputPanel";
import { InputPanel } from "./allinputs";
import AllIceCreamList from "./iceCreamList";

export const IndexPage: FC = () => {
	return (
		<div className="flex flex-row w-full h-screen bg-[#10162F] text-white p-4 gap-4">
			<AllIceCreamList />
			<OutputPanel />
			<InputPanel />
		</div>
	);
};
