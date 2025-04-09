import { FC, useState } from "react";
import { OutputPanel } from "./outputPanel";
import { InputPanel } from "./allinputs";
import { NavBar } from "./navBar";
import AllIceCreamList from "./iceCreamList";

export const IndexPage: FC = () => {
	const [selectedSender, setSelectedSender] = useState(""); // 🔥 Sem to doplň
	const [selectedCar, setSelectedCar] = useState("");
	const [selectedCompany, setSelectedCompany] = useState("");

	return (
		<div className="flex flex-row w-full h-screen bg-[#10162F] text-white p-4 gap-4">
			<AllIceCreamList />
			<OutputPanel
				selectedSender={selectedSender}
				setSelectedSender={setSelectedSender}
				selectedCompany={selectedCompany}
				selectedCar={selectedCar}
			/>
			<InputPanel
				selectedSender={selectedSender}
				setSelectedSender={setSelectedSender}
				selectedCar={selectedCar}
				setSelectedCar={setSelectedCar}
				selectedCompany={selectedCompany}
				setSelectedCompany={setSelectedCompany}
			/>
		</div>
	);
};
