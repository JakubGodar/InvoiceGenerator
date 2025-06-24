import React from "react";
import { IceCream } from "@/lib/types";
import personData from "../data/PersonalData.json";
import senderReceiverData from "../data/Clients.json";
import CarsData from "../data/Cars.json";

type Props = {
	onAdd: () => void;
	onRemove: () => void;
	items: IceCream[];
	selectedSender: string;
	selectedCompany: string;
	selectedCar: string;
};

export const OutPutButtons: React.FC<Props> = ({ onAdd, onRemove, items, selectedSender, selectedCompany, selectedCar }) => {
	const senderDetails = personData.find((person) => person.name === selectedSender);
	const companyDetails = senderReceiverData.find((c) => c.nick === selectedCompany);
	const carDetails = CarsData.find((c) => c.carName === selectedCar);

	const openTemplatePreview = async () => {
		try {
			const result = await window.electron.invoke("generate-and-open-excel", {
				items,
				sender: {
					companyName: senderDetails?.companyName || "",
					name: senderDetails?.name || "",
					lastname: senderDetails?.lastname || "",
					city: senderDetails?.city || "",
					street: senderDetails?.street || "",
					psc: senderDetails?.psc || "",
					state: senderDetails?.state || "",
					ico: senderDetails?.ico || "",
					dic: senderDetails?.dic || "",
					icdph: senderDetails?.icdph || "",
					phonenumber: senderDetails?.phonenumber || "",
					email: senderDetails?.email || "",
					email2: senderDetails?.email2 || "",
					priceN: senderDetails?.priceN || "",
					priceS: senderDetails?.priceS || "",
				},
				car: {
					licensePlate: carDetails?.licensePlate || "",
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

	const exportAsPdf = async () => {
		try {
			const result = await window.electron.invoke("export-to-pdf", {
				items,
				sender: {
					companyName: senderDetails?.companyName || "",
					name: senderDetails?.name || "",
					lastname: senderDetails?.lastname || "",
					city: senderDetails?.city || "",
					street: senderDetails?.street || "",
					psc: senderDetails?.psc || "",
					state: senderDetails?.state || "",
					ico: senderDetails?.ico || "",
					dic: senderDetails?.dic || "",
					icdph: senderDetails?.icdph || "",
					phonenumber: senderDetails?.phonenumber || "",
					email: senderDetails?.email || "",
					email2: senderDetails?.email2 || "",
					priceN: senderDetails?.priceN || "",
					priceS: senderDetails?.priceS || "",
				},
				car: {
					licensePlate: carDetails?.licensePlate || "",
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
			if (result.canceled) {
				return;
			}
			if (!result.success) {
				alert("Chyba pri ukladaní PDF: " + result.error);
			}
		} catch (err) {
			console.error(err);
			alert("Chyba pri exporte do PDF.");
		}
	};

	return (
		<div className="flex flex-col sm:flex-row gap-2 w-full">
			<button onClick={onAdd} className="bg-orange-500 text-white p-2 rounded flex-1 min-w-[100px]">
				Pridať
			</button>
			<button onClick={onRemove} className="bg-orange-500 text-white p-2 rounded flex-1 min-w-[100px]">
				Odstrániť
			</button>
			<button onClick={openTemplatePreview} className="bg-orange-500 text-white p-2 rounded flex-1 min-w-[100px]">
				Náhľad
			</button>
			<button onClick={exportAsPdf} className="bg-orange-500 text-white p-2 rounded flex-1 min-w-[100px]">
				Tlačiť
			</button>
		</div>
	);
};
