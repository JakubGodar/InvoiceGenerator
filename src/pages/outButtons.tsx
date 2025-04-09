import React from "react";
import ExportButton from "../pages/excel";
import { IceCream } from "@/lib/types";
import personData from "../data/PersonalData.json";
import senderReceiverData from "../data/Clients.json";
import CarsData from "../data/Cars.json"; // 🚗 pridaj import

type Props = {
	onAdd: () => void;
	onRemove: () => void;
	items: IceCream[];
	sender: string;
	selectedCompany: string;
	selectedCar: string;
};

export const OutPutButtons: React.FC<Props> = ({ onAdd, onRemove, items, sender, selectedCompany, selectedCar }) => {
	const senderDetails = personData.find((person) => person.name === sender);
	const companyDetails = senderReceiverData.find((c) => c.nick === selectedCompany);
	const carDetails = CarsData.find((c) => c.carName === selectedCar); // 🔍 nájdi detail auta

	const openTemplatePreview = async () => {
		try {
			const result = await window.electron.invoke("generate-and-open-excel", {
				items,
				sender,
				car: {
					licensePlate: carDetails?.licensePlate || "", // ✅ teraz to ide
					carName: carDetails?.carName || "",
				},
				company: {
					name: companyDetails?.name || "",
					lastname: companyDetails?.lastname || "",
					shopName: companyDetails?.shopName || "",
					street: companyDetails?.street || "",
					city: companyDetails?.city || "",
					phonenumber: companyDetails?.phonenumber || "",
					psc: companyDetails?.psc || "",
					state: companyDetails?.state || "",
					ico: companyDetails?.ico || "",
					dic: companyDetails?.dic || "",
				},
			});

			if (!result.success) {
				alert("Chyba: " + result.error);
			}
		} catch (err) {
			console.error("IPC chyba:", err);
		}
	};

	return (
		<div className="flex gap-2">
			<button onClick={onAdd} className="bg-orange-500 text-white p-2 rounded">
				Pridať
			</button>
			<button onClick={onRemove} className="bg-orange-500 text-white p-2 rounded">
				Odstrániť
			</button>
			<button onClick={openTemplatePreview} className="bg-orange-500 text-white p-2 rounded">
				Náhľad
			</button>
			<ExportButton />
		</div>
	);
};
