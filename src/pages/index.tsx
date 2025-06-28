import { FC, useState } from "react";
import { OutputPanel } from "./outputPanel";
import { InputPanel } from "./allinputs";
import AllIceCreamList from "./iceCreamList";

export const IndexPage: FC = () => {
  const [selectedSender, setSelectedSender] = useState<string>("");
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  return (
    <div className="flex flex-col w-full h-screen bg-[#10162F] text-white">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 p-4 gap-4 overflow-auto">
        <AllIceCreamList />
        <OutputPanel
          selectedSender={selectedSender}
          setSelectedSender={setSelectedSender}
          selectedCompany={selectedCompany}
          selectedCar={selectedCar}
        />
        <InputPanel
          selectedSender={selectedSender}
          setSelectedSender={setSelectedSender}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      </div>
    </div>
  );
};
