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
			</div>
          </div>
        </div>

);


};