const exportToExcel = async () => {
  // Dáta na export (pris
};

const ExportButton = () => {
  return (
    <button
      onClick={exportToExcel}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Exportovať do Excelu
    </button>
  );
};

export default ExportButton;
