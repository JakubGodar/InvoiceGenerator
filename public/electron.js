require("dotenv").config();
const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const { createMainWindow } = require("./utils/createMainWindow");
const AutoLaunch = require("auto-launch");
const remote = require("@electron/remote/main");
const config = require("./utils/config");
const { spawn } = require("child_process");
const fs = require("fs").promises;
const isDev = require("electron-is-dev");
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

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
	app.quit();
} else {
	app.on("second-instance", () => {
		if (config.mainWindow) {
			if (config.mainWindow.isMinimized()) config.mainWindow.restore();
			config.mainWindow.focus();
		}
	});
}

/* * Excel Preview * */

ipcMain.handle("generate-and-open-excel", async (_event, { items, sender, car, company }) => {

	const tempPath = path.join(os.tmpdir(), `preview-${Date.now()}.xlsx`);

	console.log("Template path:", templatePath);
	const fs = require("fs");
	if (!fs.existsSync(templatePath)) {
		console.error("Template file not found at:", templatePath);

		dialog.showMessageBox({
			type: "error",
			title: "Chyba",
			message: "Súbor šablóny (template.xlsx) nebol nájdený.",
			detail: `Skontrolujte, či sa súbor nachádza na očakávanej ceste:\n${templatePath}`,
		});

		return { success: false, error: "Template file not found" };
	}

	console.log("Template path:", templatePath);

	const workbook = new ExcelJS.Workbook();
	await workbook.xlsx.readFile(templatePath);

	console.log("Template path:", templatePath);

	const today = new Date();
	const formattedDate = today.toLocaleDateString("sk-SK");

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

	row3.getCell(3).value = sender.name + " " + sender.lastname;
	row4.getCell(3).value = sender.city + "  " + sender.street;
	row5.getCell(3).value = sender.psc;
	row6.getCell(3).value = sender.state;

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
	row54.getCell(5).value = "   Meno: " + sender.name + sender.lastname;
	row55.getCell(5).value = "     IČO: " + sender.ico;
	row55.getCell(7).value = "     mobil: ";
	row55.getCell(8).value = sender.phonenumber;
	row56.getCell(5).value = "     DIC: " + sender.dic;
	row57.getCell(5).value = "   IČ DPH: " + sender.icdph;

	row54.getCell(3).value = sender.name + " " + sender.lastname;
	row55.getCell(3).value = sender.city + "  " + sender.street;
	row56.getCell(3).value = sender.psc;
	row57.getCell(3).value = sender.state;

	if (sender.name === "Peter") {
		row3.getCell(3).value = sender.name + " " + sender.lastname;
		row4.getCell(3).value = sender.city + "  " + sender.street;
		row5.getCell(3).value = sender.psc;
		row6.getCell(3).value = sender.state;
		row3.getCell(5).value = "   Meno: " + sender.name + " " + sender.lastname;
		row4.getCell(5).value = "     IČO: " + sender.ico;
		row4.getCell(7).value = "     mobil: ";
		row4.getCell(8).value = sender.phonenumber;
		row5.getCell(5).value = "     DIC: " + sender.dic;
		row6.getCell(5).value = "   IČ DPH: " + sender.icdph;

		row54.getCell(5).value = "   Meno: " + sender.name + sender.lastname;
		row55.getCell(5).value = "     IČO: " + sender.ico;
		row55.getCell(7).value = "     mobil: ";
		row55.getCell(8).value = sender.phonenumber;
		row56.getCell(5).value = "     DIC: " + sender.dic;
		row57.getCell(5).value = "   IČ DPH: " + sender.icdph;
		row54.getCell(3).value = sender.name + " " + sender.lastname;
		row55.getCell(3).value = sender.city + "  " + sender.street;
		row56.getCell(3).value = sender.psc;
		row57.getCell(3).value = sender.state;

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
			summaryRow.getCell(8).value = item.amount * 18.33;
			summaryRow.getCell(9).value = "18,33 €";
			summaryRow.getCell(10).value = item.amount * 22.00;

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
			summaryRow.getCell(8).value = item.amount * 18.33;
			summaryRow.getCell(9).value = "18,33 €";
			summaryRow.getCell(10).value = item.amount * 22.00;

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

	if (isDev) {
		// v dev režime otvori excel normálne
		await shell.openPath(tempPath);
	} else {
		// v produkcii otvori v Print Preview pomocou PowerShell COM
		const psScript = [
			`$excel  = New-Object -ComObject Excel.Application`,
			`$wb     = $excel.Workbooks.Open('${tempPath.replace(/\\/g, "\\\\")}')`,
			`$excel.Visible = $true`,
			`$wb.ActiveSheet.PrintPreview($true)`,
		].join("; ");


		spawn("powershell.exe", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", psScript], { shell: true });
	}

	return { success: true };
});

/* * Export to PDF * */

ipcMain.handle("export-to-pdf", async (_event, { items, sender, car, company }) => {
	const templatePath = isDev
		? path.join(__dirname, "..", "src", "data", "template.xlsx")
		: path.join(process.resourcesPath, "data", "template.xlsx");
	const tempXlsx = path.join(os.tmpdir(), `export-${Date.now()}.xlsx`);

	const workbook = new ExcelJS.Workbook();
	await workbook.xlsx.readFile(templatePath);

	const today = new Date();
	const formattedDate = today.toLocaleDateString("sk-SK");

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

	row3.getCell(3).value = sender.name + " " + sender.lastname;
	row4.getCell(3).value = sender.city + "  " + sender.street;
	row5.getCell(3).value = sender.psc;
	row6.getCell(3).value = sender.state;

	row11.getCell(5).value = company.shopName;
	row12.getCell(5).value = company.name + " " + company.lastname;
	row13.getCell(5).value = company.city + " , " + company.street + " , " + company.psc;
	row14.getCell(8).value = company.ico;
	row15.getCell(8).value = company.dic;
	row15.getCell(5).value = "Mobil: " + company.phonenumber;


	const numberOfItems = items.length;
	const totalKs = items.reduce((sum, item) => sum + item.amount, 0);
	row12.getCell(3).value = car.licensePlate;
	row54.getCell(5).value = "   Meno: " + sender.name + sender.lastname;
	row55.getCell(5).value = "     IČO: " + sender.ico;
	row55.getCell(7).value = "     mobil: ";
	row55.getCell(8).value = sender.phonenumber;
	row56.getCell(5).value = "     DIC: " + sender.dic;
	row57.getCell(5).value = "   IČ DPH: " + sender.icdph;

	row54.getCell(3).value = sender.name + " " + sender.lastname;
	row55.getCell(3).value = sender.city + "  " + sender.street;
	row56.getCell(3).value = sender.psc;
	row57.getCell(3).value = sender.state;

		row3.getCell(3).value = sender.name + " " + sender.lastname;
		row4.getCell(3).value = sender.city + "  " + sender.street;
		row5.getCell(3).value = sender.psc;
		row6.getCell(3).value = sender.state;
		row3.getCell(5).value = "   Meno: " + sender.name + " " + sender.lastname;
		row4.getCell(5).value = "     IČO: " + sender.ico;
		row4.getCell(7).value = "     mobil: ";
		row4.getCell(8).value = sender.phonenumber;
		row5.getCell(5).value = "     DIC: " + sender.dic;
		row6.getCell(5).value = "   IČ DPH: " + sender.icdph;

		row54.getCell(5).value = "   Meno: " + sender.name + sender.lastname;
		row55.getCell(5).value = "     IČO: " + sender.ico;
		row55.getCell(7).value = "     mobil: ";
		row55.getCell(8).value = sender.phonenumber;
		row56.getCell(5).value = "     DIC: " + sender.dic;
		row57.getCell(5).value = "   IČ DPH: " + sender.icdph;
		row54.getCell(3).value = sender.name + " " + sender.lastname;
		row55.getCell(3).value = sender.city + "  " + sender.street;
		row56.getCell(3).value = sender.psc;
		row57.getCell(3).value = sender.state;

			row25.commit();

	if (sender.name === "Peter") {
		row3.getCell(3).value = sender.name + " " + sender.lastname;
		row4.getCell(3).value = sender.city + "  " + sender.street;
		row5.getCell(3).value = sender.psc;
		row6.getCell(3).value = sender.state;
		row3.getCell(5).value = "   Meno: " + sender.name + " " + sender.lastname;
		row4.getCell(5).value = "     IČO: " + sender.ico;
		row4.getCell(7).value = "     mobil: ";
		row4.getCell(8).value = sender.phonenumber;
		row5.getCell(5).value = "     DIC: " + sender.dic;
		row6.getCell(5).value = "   IČ DPH: " + sender.icdph;

		row54.getCell(5).value = "   Meno: " + sender.name + sender.lastname;
		row55.getCell(5).value = "     IČO: " + sender.ico;
		row55.getCell(7).value = "     mobil: ";
		row55.getCell(8).value = sender.phonenumber;
		row56.getCell(5).value = "     DIC: " + sender.dic;
		row57.getCell(5).value = "   IČ DPH: " + sender.icdph;
		row54.getCell(3).value = sender.name + " " + sender.lastname;
		row55.getCell(3).value = sender.city + "  " + sender.street;
		row56.getCell(3).value = sender.psc;
		row57.getCell(3).value = sender.state;

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

	await workbook.xlsx.writeFile(tempXlsx);

	const { canceled, filePath } = await dialog.showSaveDialog({
		title: "Uložiť objednávku ako PDF",
		defaultPath: "objednávka.pdf",
		filters: [{ name: "PDF súbory", extensions: ["pdf"] }],
	});
	if (canceled || !filePath) {
		return { canceled: true };
	}

	const xlsxEscaped = tempXlsx.replace(/\\/g, "\\\\");
	const pdfEscaped = filePath.replace(/\\/g, "\\\\");
	const ps = [
		`$excel = New-Object -ComObject Excel.Application`,
		`$excel.Visible = $false`,
		`$wb = $excel.Workbooks.Open('${xlsxEscaped}')`,
		`$wb.ExportAsFixedFormat(0, '${pdfEscaped}')`,
		`$wb.Close($false)`,
		`$excel.Quit()`,
	].join("; ");

	spawn("powershell.exe", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", ps], { shell: true });

	return { success: true };
});

app.on("ready", async () => {
	if (!config.mainWindow) {
		config.mainWindow = await createMainWindow();
	}
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		config.mainWindow = createMainWindow();
	}
});
