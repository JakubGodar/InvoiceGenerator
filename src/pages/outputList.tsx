import React from "react";
import { IceCream } from "./outputPanel"; // Importuje typ IceCream

type Props = {
  items: IceCream[];
};

export const OutPutList: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <h2 className="font-bold">Objednávka:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.amount}× {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
