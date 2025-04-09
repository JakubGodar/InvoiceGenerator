import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type React from "react";
import { Input } from "../components/ui/input";
import senderReceiverData from "../data/Clients.json";
import CarsData from "../data/Cars.json"; // Import the CarsData
import personData from "../data/PersonalData.json"; // Import the PersonData

type Props = {
	selectedSender: string;
	setSelectedSender: (value: string) => void;
	selectedCar: string;
	setSelectedCar: (value: string) => void;
	selectedCompany: string;
	setSelectedCompany: (value: string) => void;
};

export const InputPanel: React.FC<Props> = ({
	selectedSender,
	setSelectedSender,
	selectedCompany,
	setSelectedCompany,
	selectedCar,
	setSelectedCar,
}) => {
	//const [selectedCompany, setSelectedCompany] = useState(""); // Selected company
	//const [selectedCar, setSelectedCar] = useState(""); // Selected car

	const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
	const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);
	const [isSenderDropdownOpen, setIsSenderDropdownOpen] = useState(false);
	console.log("selectedCompany:", selectedCompany);

	// Find selected details
	const selectedCompanyDetails = senderReceiverData.find((company) => company.nick === selectedCompany);
	const selectedCarDetails = CarsData.find((car) => car.carName === selectedCar);
	const selectedSenderDetails = personData.find((sender) => sender.name === selectedSender);

	return (
		<div className="flex flex-col w-1/3 bg-white text-black p-4 rounded-lg shadow-lg">
			<h2 className="text-lg font-semibold mb-2">Zadajte údaje</h2>
			<div className="flex flex-col gap-4">
				{/* Company Dropdown */}
				<div className="relative">
					<label
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
						onClick={() => {
							setIsCompanyDropdownOpen((prev) => !prev);
							setIsCarDropdownOpen(false);
							setIsSenderDropdownOpen(false);
						}}
					>
						Odberatel
					</label>
					<input
						type="text"
						value={selectedCompany}
						readOnly
						placeholder="Vyberte spoločnosť"
						className="w-full p-2 border border-gray-300 rounded-md"
						onClick={() => {
							setIsCompanyDropdownOpen((prev) => !prev);
							setIsCarDropdownOpen(false);
							setIsSenderDropdownOpen(false);
						}}
					/>
					{isCompanyDropdownOpen && (
						<ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
							{senderReceiverData.map((company, index) => (
								<li
									key={index}
									className="p-2 hover:bg-gray-200 cursor-pointer"
									onClick={() => {
										setSelectedCompany(company.nick);
										setIsCompanyDropdownOpen(false);
									}}
								>
									{company.nick}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Car Dropdown */}
				<div className="relative">
					<label
						className="block text-sm font-medium text-gray-700 cursor-pointer"
						onClick={() => {
							setIsCarDropdownOpen((prev) => !prev);
							setIsCompanyDropdownOpen(false);
							setIsSenderDropdownOpen(false);
						}}
					>
						Auto
					</label>
					<input
						type="text"
						value={selectedCar}
						readOnly
						placeholder="Vyberte auto"
						className="w-full p-2 border border-gray-300 rounded-md"
						onClick={() => {
							setIsCarDropdownOpen((prev) => !prev);
							setIsCompanyDropdownOpen(false);
							setIsSenderDropdownOpen(false);
						}}
					/>
					{isCarDropdownOpen && (
						<ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
							{CarsData.map((car, index) => (
								<li
									key={index}
									className="p-2 hover:bg-gray-200 cursor-pointer"
									onClick={() => {
										setSelectedCar(car.carName);
										setIsCarDropdownOpen(false);
									}}
								>
									{car.carName}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Sender Dropdown */}
				<div className="relative">
					<label
						className="block text-sm font-medium text-gray-700 cursor-pointer"
						onClick={() => {
							setIsSenderDropdownOpen((prev) => !prev);
							setIsCompanyDropdownOpen(false);
							setIsCarDropdownOpen(false);
						}}
					>
						Odosielatel
					</label>
					<input
						type="text"
						value={selectedSender}
						readOnly
						placeholder="Vyberte odosielateľa"
						className="w-full p-2 border border-gray-300 rounded-md"
						onClick={() => {
							setIsSenderDropdownOpen((prev) => !prev);
							setIsCompanyDropdownOpen(false);
							setIsCarDropdownOpen(false);
						}}
					/>
					{isSenderDropdownOpen && (
						<ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
							{personData.map((sender, index) => (
								<li
									key={index}
									className="p-2 hover:bg-gray-200 cursor-pointer"
									onClick={() => {
										setSelectedSender(sender.name);
										setIsSenderDropdownOpen(false);
									}}
								>
									{sender.name}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Other Inputs */}
				<div className="flex flex-col gap-2">
					<h2 className="text-lg font-semibold mb-1">Informácie</h2>
					<Input
						type="text"
						placeholder="Skratka"
						value={selectedCompanyDetails?.nick || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="Prevadzka"
						value={selectedCompanyDetails?.shopName || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="Meno"
						value={selectedCompanyDetails?.name || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="Priezvisko"
						value={selectedCompanyDetails?.lastname || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="Mesto"
						value={selectedCompanyDetails?.city || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="Ulica"
						value={selectedCompanyDetails?.street || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="PSC"
						value={selectedCompanyDetails?.psc || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="Štát"
						value={selectedCompanyDetails?.state || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="Telefon"
						value={selectedCompanyDetails?.phonenumber || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="ICO"
						value={selectedCompanyDetails?.ico || ""}
						readOnly
						className="block text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
					/>
					<Input
						type="text"
						placeholder="DIC"
						value={selectedCompanyDetails?.dic || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
				</div>
				<div className="flex gap-3 justify-center mt-4">
					<button className="bg-orange-500 text-white p-2 rounded">Pridať</button>
					<button className="bg-orange-500 text-white p-2 rounded">Upraviť</button>
					<button className="bg-orange-500 text-white p-2 rounded">Zmazať</button>
				</div>
			</div>
		</div>
	);
};
