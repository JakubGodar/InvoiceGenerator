import { FC, useState } from "react";


export const OutPutList: FC = () => {
    const [items, setItems] = useState<string[]>([]); // Zoznam predmetov
  

    return (
    <div className="flex-1 bg-muted rounded-lg p-2 space-y-2 overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-orange-400 text-white py-1 px-2 rounded-md"
          >
            {item}
          </div>
        ))}
    </div>
    

   
  );
  
};
