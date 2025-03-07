import React from "react";

type Props = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const OutputEntry: React.FC<Props> = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="text"
      placeholder="Zadajte počet*kód (napr. 5*1)"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="border p-2 w-full items-center"
    />
  );
};
