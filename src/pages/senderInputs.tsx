import React, { useState } from "react";
import { Input } from "../components/ui/input";
import senderReceiverData from "../data/Clients.json";

export const SenderInputs: React.FC = () => {
	// State for managing the selected company and dropdown
	const [selectedCompany, setSelectedCompany] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Find the selected company's details
	const selectedCompanyDetails = senderReceiverData.find((company) => company.nick === selectedCompany);

	return <div className="flex flex-col gap-4">{/* Odberatel Dropdown */}</div>;
};
