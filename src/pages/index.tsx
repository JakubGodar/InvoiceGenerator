import { FC } from "react";

export const IndexPage: FC = () => {
  return (
    <div className="flex flex-col h-screen bg-primary text-foreground">
      {/* Header */}
      <header className="flex items-center justify-center bg-primary text-card-foreground py-4 px-6 rounded-lg shadow-lg">
  		<h1 className="text-xl font-bold text-center">Vanilla Rišnovce 🍦</h1>
		</header>


      <div className="flex flex-1 gap-4 mt-6">
        {/* Zoznam zmrzlín */}
        <div className="flex flex-col w-1/3 bg-card p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Zoznam zmrzlín</h2>
          <div className="flex-1 bg-muted rounded-lg"></div>
		  <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Pridat
          </button>
		  <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Odstranit
          </button>
        </div>

        {/* Export buttons */}
        <div className="grid grid-cols-2 gap-4 w-1/3 bg-card p-4 rounded-lg shadow-lg">
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Pridat
          </button>
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Odstranit
          </button>
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Edit
          </button>
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Export
          </button>
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Info
          </button>
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
            Exit
          </button>
        </div>

        <div className="flex flex-col w-1/3 bg-card p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Zadajte údaje</h2>
          <div className="flex flex-col gap-4">
		  <input
              type="text"
              placeholder="Odberatel"
              className="p-2 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="text"
              placeholder="Názov zmrzliny"
              className="p-2 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="number"
              placeholder="Počet kusov"
              className="p-2 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
            />
            <textarea
              placeholder="Poznámky"
              className="p-2 rounded-md bg-muted text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
              rows={5}
            ></textarea>
            <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
              Uložiť
            </button>
          </div>
        </div>
      </div>

      {/* Dolná veľká sekcia */}
      <div className="mt-4 bg-card p-6 rounded-lg shadow-lg h-40"></div>
    </div>
  );
};
