require("dotenv").config();
const { app, BrowserWindow, ipcMain } = require("electron");
const { createMainWindow } = require("./utils/createMainWindow");
const AutoLaunch = require("auto-launch");
const remote = require("@electron/remote/main");
const config = require("./utils/config");
const { spawn } = require("child_process");
const fs = require("fs").promises;
const path = require("path");
const os = require("os");
const { shell } = require("electron");
const XLSX = require("xlsx");
const ExcelJS = require("exceljs");

if (config.isDev) require("electron-reloader")(module);
remote.initialize();

if (!config.isDev) {
	const autoStart = new AutoLaunch({
		name: config.appName,
	});
	autoStart.enable();
}

ipcMain.handle("generate-and-open-excel", async (_event, { items, sender, car, company }) => {
	const templatePath = path.join(__dirname, "..", "src", "data", "template.xlsx");
	const tempPath = path.join(os.tmpdir(), `preview-${Date.now()}.xlsx`);

	const personData = require("../src/data/PersonalData.json");
	const senderDetails = personData.find((person) => person.name === sender);

	//const clientsData = require("../src/data/Clients.json");
	//const selectedCompanyDetails = clientsData.find((company) => company.nick === selectedCompany);

	const workbook = new ExcelJS.Workbook();
	await workbook.xlsx.readFile(templatePath);

	const today = new Date();
	const formattedDate = today.toLocaleDateString("sk-SK"); // napr. "5.4.2025"

	const sheet = workbook.getWorksheet(1);
	const startRow = 19;
	const row17 = sheet.getRow(17);
	const row3 = sheet.getRow(3);
	const row4 = sheet.getRow(4);
	const row5 = sheet.getRow(5);
	const row6 = sheet.getRow(6);
	const row10 = sheet.getRow(10);
	const row11 = sheet.getRow(11);
	const row12 = sheet.getRow(12);
	const row13 = sheet.getRow(13);
	const row14 = sheet.getRow(14);
	const row15 = sheet.getRow(15);
	const row18 = sheet.getRow(18);
	const row21 = sheet.getRow(21);
	const row25 = sheet.getRow(25);
	const row48 = sheet.getRow(48);
	const row54 = sheet.getRow(54);
	const row55 = sheet.getRow(55);
	const row56 = sheet.getRow(56);
	const row57 = sheet.getRow(57);

	row14.getCell(3).value = formattedDate;
	row15.getCell(3).value = formattedDate;

	row11.getCell(5).value = company.shopName;
	row12.getCell(5).value = company.name + " " + company.lastname;
	row13.getCell(5).value = company.city + " , " + company.street + " , " + company.psc;
	row14.getCell(8).value = company.ico;
	row15.getCell(8).value = company.dic;
	row15.getCell(5).value = "Mobil: " + company.phonenumber;
	row25.commit();

	const numberOfItems = items.length;
	const totalKs = items.reduce((sum, item) => sum + item.amount, 0);
	row12.getCell(3).value = car.licensePlate;
	row54.getCell(5).value = "   Meno: " + senderDetails.name + senderDetails.lastname;

	if (sender === "Peter") {
		row3.getCell(5).value = "   Meno: " + senderDetails.name + senderDetails.lastname;
		row4.getCell(5).value = "     IČO: " + senderDetails.ico;
		row4.getCell(7).value = "     mobil: ";
		row4.getCell(8).value = senderDetails.phonenumber;
		row5.getCell(5).value = "     DIC: " + senderDetails.dic;
		row6.getCell(5).value = "   IČ DPH: " + senderDetails.icdph;

		row54.getCell(5).value = "   Meno: " + senderDetails.name + senderDetails.lastname;
		row55.getCell(5).value = "     IČO: " + senderDetails.ico;
		row55.getCell(7).value = "     mobil: ";
		row55.getCell(8).value = senderDetails.phonenumber;
		row56.getCell(5).value = "     DIC: " + senderDetails.dic;
		row57.getCell(5).value = "   IČ DPH: " + senderDetails.icdph;

		items.forEach((item, i) => {
			const row = sheet.getRow(startRow + i);
			const summaryRow = sheet.getRow(startRow + numberOfItems + 1);
			const summaryRow2 = sheet.getRow(startRow + numberOfItems + 2);

			row.getCell(2).value = item.name; // C
			row.getCell(8).value = item.amount + ".00" + " ks"; // H
			row.getCell(9).value = "18,33 €"; // I
			row.getCell(10).value = "22.00 €"; // F
			summaryRow.getCell(2).value = "Spolu";
			summaryRow.getCell(4).value = totalKs + ".00" + " ks";
			summaryRow2.getCell(2).value = "Spolu v litroch: ";
			summaryRow2.getCell(5).value = "Mliečne: ";
			summaryRow2.getCell(7).value = "Ovocné: ";
			summaryRow2.getCell(9).value = "Sorberty: ";
			summaryRow.getCell(8).value = item.amount * 18.33;
			summaryRow.getCell(9).value = "18,33 €";

			summaryRow.commit();
			summaryRow2.commit();
			row.commit();
		});
		row18.getCell(2).value = "Názov položky";
		row17.getCell(8).value = "Počet";
		row18.getCell(8).value = "ks";
		row17.getCell(9).value = "Cena/ks";
		row18.getCell(9).value = "s DPH";
		row17.getCell(10).value = "Cena";
		row18.getCell(10).value = "s DPH";
	} else {
		items.forEach((item, i) => {
			const row = sheet.getRow(startRow + i);
			const summaryRow = sheet.getRow(startRow + numberOfItems + 1);
			const summaryRow2 = sheet.getRow(startRow + numberOfItems + 2);

			row.getCell(2).value = item.name; // C
			row.getCell(4).value = item.amount + ".00" + " ks"; // D
			row.getCell(5).value = "18,33 €"; // F
			row.getCell(6).value = "22.00 €"; // G
			row.getCell(7).value = "20 %"; // H
			row.getCell(8).value = item.amount * 18.33; // I

			summaryRow.getCell(2).value = "Spolu";
			summaryRow.getCell(4).value = totalKs + ".00" + " ks";
			summaryRow2.getCell(2).value = "Spolu v litroch: ";
			summaryRow2.getCell(5).value = "Mliečne: ";
			summaryRow2.getCell(7).value = "Ovocné: ";
			summaryRow2.getCell(9).value = "Sorberty: ";
			summaryRow.getCell(8).value = item.amount * 18.33;
			summaryRow.getCell(9).value = "18,33 €";

			summaryRow.commit();
			summaryRow2.commit();
			row.commit();
		});

		row18.getCell(2).value = "Názov položky";
		row18.getCell(4).value = "ks";
		row17.getCell(4).value = "Počet";
		row17.getCell(5).value = "Cena/ks";
		row18.getCell(4).value = "bez DPH";
		row18.getCell(5).value = "s DPH";
		row17.getCell(6).value = "Cena/ks";
		row18.getCell(6).value = "s DPH";
		row18.getCell(7).value = "DPH %";
		row17.getCell(8).value = "Cena";
		row18.getCell(8).value = "bez DPH";
		row17.getCell(9).value = "DPH z";
		row18.getCell(9).value = "ceny";
		row17.getCell(10).value = "Cena";
		row18.getCell(10).value = "s DPH";
	}

	await workbook.xlsx.writeFile(tempPath);
	await shell.openPath(tempPath);

	return { success: true };
});

app.on("ready", async () => {
	config.mainWindow = await createMainWindow();
	//config.mainWindow.openDevTools();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) config.mainWindow = createMainWindow();
});
