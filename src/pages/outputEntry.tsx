"use client";

import type React from "react";

type Props = {
	inputValue: string;
	setInputValue: (value: string) => void;
	onEnterPress?: () => void;
};

export const OutputEntry: React.FC<Props> = ({ inputValue, setInputValue, onEnterPress }) => {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && onEnterPress) {
			e.preventDefault();
			onEnterPress();
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		const regex = /^(\d+)?(\*\d{0,2})?$/;
		if (regex.test(newValue)) {
			setInputValue(newValue);
		}
	};

	return (
		<input
			type="text"
			placeholder="Zadajte počet*kód (napr. 5*12)"
			value={inputValue}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			className="border p-2 w-full items-center rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
		/>
	);
};
