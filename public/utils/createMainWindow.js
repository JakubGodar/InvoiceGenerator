const { BrowserWindow } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const remote = require("@electron/remote/main");
const config = require("./config");

exports.createMainWindow = async () => {
	const window = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: true, // MUST be true for contextBridge
			nodeIntegration: false, // MUST be false, inak izolácia nefunguje
		},
		title: "Invoicing Tool",
		icon: "./icon.png",
	});

	// povolíme @electron/remote ak ho potrebuješ v rendereri (voliteľné)
	remote.enable(window.webContents);

	// načítanie Reactu
	const url = config.isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "..", "..", "build", "index.html")}`;
	await window.loadURL(url);

	
	window.once("ready-to-show", () => {
		autoUpdater.checkForUpdatesAndNotify();
	});
	
	window.on("close", (e) => {
		if (!config.isQuiting) {
			e.preventDefault();
			window.hide();
		}
	});
	

	window.on("closed", () => {
		config.mainWindow = null;
	});

	return window;
};
