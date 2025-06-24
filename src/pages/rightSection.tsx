"use client";
import { FC, useState } from "react";

const RightSection: FC = () => {
	return (
		<div className="flex flex-col w-1/3 bg-white p-4 rounded-lg shadow-lg border-2 border-orange-400">
			{/* Nadpis */}
			<h2 className="text-lg font-semibold mb-4 text-center">Zadajte Udaje</h2>

			{/* Inputy na zadávanie údajov */}
			<div className="grid grid-cols-2 gap-4 mb-4">
				<label className="text-black">Odberatel</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Auto</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Odosietalel</label>
				<input
					type="text"
					className="p-2 rounded-md  bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">ID</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
			</div>

			{/* Tlačidlo na spravovanie odberateľov */}
			<div className="flex justify-center mb-4">
				<button className="bg-orange-400 text-black py-2 px-6 rounded-md hover:bg-orange-500">Spravovať odberateľov</button>
			</div>

			{/* Zoznam údajov */}
			<div className="grid grid-cols-2 gap-4">
				<label className="text-black">Skratka</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Prevádzka</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Meno</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Mesto</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Ulica</label>
				<input
					type="text"
					className="p-2 rounded-md  bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">PSC</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Štát</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">Telefón</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">ICO</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
				<label className="text-black">DIC</label>
				<input
					type="text"
					className="p-2 rounded-md bg-white text-black focus:ring-2 border-2 border-orange-400 focus:ring-orange-500 outline-none"
				/>
			</div>
		</div>
	);
};

export default RightSection;
