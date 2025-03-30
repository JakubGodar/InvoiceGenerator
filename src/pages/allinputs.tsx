<<<<<<< Updated upstream
import type React from "react"
import { useState } from "react"
import { Plus, Minus } from "lucide-react";

export const InputPanel: React.FC = () => {
    const [name, setName] = useState(""); // Selected Odberatel
    const [searchTerm, setSearchTerm] = useState(""); // Search input
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle dropdown
    const [companyList, setCompanyList] = useState([
      "ABC Logistics",
      "XYZ Corporation",
      "Fast Shipping Ltd.",
      "Tech Innovators",
      "Green Energy Co.",
    ]); // List of companies

    const handleAddCompany = () => {
        if (searchTerm.trim() !== "" && !companyList.includes(searchTerm.trim())) {
          setCompanyList((prev) => [...prev, searchTerm.trim()]);
          setName(searchTerm.trim()); // Set newly added as selected
          setSearchTerm(""); // Clear input
          setIsDropdownOpen(false); // Close dropdown
        }
      };

      const handleDeleteCompany = (companyToDelete: string) => {
        setCompanyList((prev) => prev.filter((company) => company !== companyToDelete));
    
        // If the deleted company was selected, clear it
        if (name === companyToDelete) {
          setName("");
        }
      };

      const filteredCompanies = companyList.filter((company) =>
        company.toLowerCase().includes(searchTerm.toLowerCase())
      );
  

return (

<div className="flex flex-col w-1/3 bg-white text-black p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Zadajte údaje</h2>
          <div className="flex flex-col gap-4">
			<div>
      <div className="relative">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Odberatel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleAddCompany}
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-green-600 flex items-center justify-center"
              title="Pridať spoločnosť"
            >
              <Plus size={20} />
            </button>

            <button
              className="p-2 bg-red-500 text-white rounded-md hover:bg-green-600 flex items-center justify-center"
              title="Pridať spoločnosť"
            >
              <Minus size={20} />
            </button>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg">
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company, index) => (
                  <li
                    key={index}
                    className="p-2 flex justify-between items-center hover:bg-gray-200 cursor-pointer"
                  >
                    <span
                      onClick={() => {
                        setName(company); // Set selected company
                        setSearchTerm(company);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {company}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent selecting when deleting
                        handleDeleteCompany(company);
                      }}
                      className="ml-2 text-red-500 hover:text-red-700"
                      title="Odstrániť spoločnosť"
                    >
                      <Minus size={18} />
                    </button>
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">Žiadna zhoda</li>
              )}
            </ul>
          )}
        </div>
				<input
				type="text"
				placeholder="Odberatel"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="text"
				placeholder="Auto"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="text"
				placeholder="Odosielatel"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="ID"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				</div>
				<div>
				<h2 className="text-lg font-semibold mb-1">Spravovat Odberatelov</h2>
				<input
				type="text"
				placeholder="Skratka"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="Prevadzka"
				placeholder="Prevadzka"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="Meno"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="Mesto"
				className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="Ulica"
				className="p-1rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="PSC"
				className="p-1rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="Stat"
				className="p-1rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="Telefon"
				className="p-1rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="ICO"
				className="p-1rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
				<input
				type="number"
				placeholder="DIC"
				className="p-1rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
				/>
=======
import type React from "react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { SenderInputs } from "../pages/senderInputs"; // Import the SenderInputs component
import senderReceiverData from "../data/Clients.json";
import CarsData from "../data/Cars.json"; // Import the CarsData
import personData from "../data/PersonalData.json"; // Import the PersonData

export const InputPanel: React.FC = () => {
	const [selectedCompany, setSelectedCompany] = useState(""); // Selected company
	const [selectedCar, setSelectedCar] = useState(""); // Selected car
	const [selectedSender, setSelectedSender] = useState(""); // Selected sender

	// Dropdown states
	const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
	const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);
	const [isSenderDropdownOpen, setIsSenderDropdownOpen] = useState(false);

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
						className="block text-sm font-medium text-gray-700 cursor-pointer"
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
									{company.name}
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
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="Prevadzka"
						value={selectedCompanyDetails?.shopName || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="Meno"
						value={selectedCompanyDetails?.name || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="Priezvisko"
						value={selectedCompanyDetails?.lastname || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="Mesto"
						value={selectedCompanyDetails?.city || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="Ulica"
						value={selectedCompanyDetails?.street || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="PSC"
						value={selectedCompanyDetails?.psc || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="Štát"
						value={selectedCompanyDetails?.state || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="Telefon"
						value={selectedCompanyDetails?.phonenumber || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="ICO"
						value={selectedCompanyDetails?.ico || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
					<Input
						type="text"
						placeholder="DIC"
						value={selectedCompanyDetails?.dic || ""}
						readOnly
						className="p-1 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
					/>
				</div>
>>>>>>> Stashed changes
			</div>
          </div>
        </div>

);


};