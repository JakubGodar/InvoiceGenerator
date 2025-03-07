import React from "react";

type Props = {
  onAdd: () => void;
  onRemove: () => void;
};

export const OutPutButtons: React.FC<Props> = ({ onAdd, onRemove }) => {
  return (
    <div className="flex gap-2">
      <button onClick={onAdd} className="bg-orange-500 text-white p-2 rounded">
        Pridať
      </button>
      <button onClick={onRemove} className="bg-orange-500 text-white p-2 rounded">
        Odstrániť
      </button>
      <button onClick={onAdd} className="bg-orange-500 text-white p-2 rounded">
        Nahlad
      </button>
      <button onClick={onRemove} className="bg-orange-500 text-white p-2 rounded">
        Tlacit
      </button>
    </div>
  );
};
