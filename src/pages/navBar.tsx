import { FC, useState } from "react";
import { Settings } from "lucide-react";

export const NavBar: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<header className="relative flex items-center justify-between bg-primary text-card-foreground py-4 px-6 rounded-lg shadow-lg">
			<h1 className="text-xl font-bold text-center text-white flex-1">Vanilla Rišnovce 🍦</h1>
			<div className="relative">
				<div onClick={togglePopup} className="text-white cursor-pointer hover:text-gray-300">
					<Settings />
				</div>
				{isOpen && (
					<div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
						<ul className="p-2 space-y-2">
							<li className="hover:bg-gray-100 p-2 rounded">Profil</li>
							<li className="hover:bg-gray-100 p-2 rounded">Nastavenia</li>
							<li className="hover:bg-gray-100 p-2 rounded">Odhlásiť sa</li>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
};
