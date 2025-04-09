"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type CompanyFormData = {
	nick: string;
	shopName: string;
	name: string;
	lastname: string;
	city: string;
	street: string;
	psc: string;
	state: string;
	phonenumber: string;
	ico: string;
	dic: string;
};

type CompanyFormModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: CompanyFormData) => void;
	initialData?: Partial<CompanyFormData>;
};

export const CompanyFormModal: React.FC<CompanyFormModalProps> = ({ isOpen, onClose, onSave, initialData = {} }) => {
	const [formData, setFormData] = useState<CompanyFormData>({
		nick: initialData.nick || "",
		shopName: initialData.shopName || "",
		name: initialData.name || "",
		lastname: initialData.lastname || "",
		city: initialData.city || "",
		street: initialData.street || "",
		psc: initialData.psc || "",
		state: initialData.state || "",
		phonenumber: initialData.phonenumber || "",
		ico: initialData.ico || "",
		dic: initialData.dic || "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(formData);
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Pridať novú spoločnosť</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="grid grid-cols-1 gap-4">
						<div>
							<label htmlFor="nick" className="text-sm font-medium text-gray-700">
								Skratka
							</label>
							<Input id="nick" name="nick" value={formData.nick} onChange={handleChange} className="mt-1" required />
						</div>

						<div>
							<label htmlFor="shopName" className="text-sm font-medium text-gray-700">
								Prevadzka
							</label>
							<Input id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} className="mt-1" />
						</div>

						<div>
							<label htmlFor="name" className="text-sm font-medium text-gray-700">
								Meno
							</label>
							<Input id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1" required />
						</div>

						<div>
							<label htmlFor="lastname" className="text-sm font-medium text-gray-700">
								Priezvisko
							</label>
							<Input id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="mt-1" required />
						</div>

						<div>
							<label htmlFor="city" className="text-sm font-medium text-gray-700">
								Mesto
							</label>
							<Input id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1" required />
						</div>

						<div>
							<label htmlFor="street" className="text-sm font-medium text-gray-700">
								Ulica
							</label>
							<Input id="street" name="street" value={formData.street} onChange={handleChange} className="mt-1" required />
						</div>

						<div>
							<label htmlFor="psc" className="text-sm font-medium text-gray-700">
								PSC
							</label>
							<Input id="psc" name="psc" value={formData.psc} onChange={handleChange} className="mt-1" required />
						</div>

						<div>
							<label htmlFor="state" className="text-sm font-medium text-gray-700">
								Štát
							</label>
							<Input id="state" name="state" value={formData.state} onChange={handleChange} className="mt-1" required />
						</div>

						<div>
							<label htmlFor="phonenumber" className="text-sm font-medium text-gray-700">
								Telefon
							</label>
							<Input id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} className="mt-1" />
						</div>

						<div>
							<label htmlFor="ico" className="text-sm font-medium text-gray-700">
								ICO
							</label>
							<Input id="ico" name="ico" value={formData.ico} onChange={handleChange} className="mt-1" />
						</div>

						<div>
							<label htmlFor="dic" className="text-sm font-medium text-gray-700">
								DIC
							</label>
							<Input id="dic" name="dic" value={formData.dic} onChange={handleChange} className="mt-1" />
						</div>
					</div>

					<DialogFooter>
						<Button type="button" variant="outline" onClick={onClose}>
							Zrušiť
						</Button>
						<Button type="submit" className="bg-orange-500 hover:bg-orange-600">
							Uložiť
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
