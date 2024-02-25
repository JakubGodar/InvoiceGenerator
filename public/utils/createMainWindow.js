const { BrowserWindow } = require("electron");
const { join } = require("path");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const remote = require("@electron/remote/main");
const config = require("./config");

exports.createMainWindow = async () => {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: true,
			nodeIntegration: true,
		},
		title: "Invoicing Tool",
		icon: "./icon.png",
	});

	remote.enable(window.webContents);

	await window.loadURL(config.isDev ? "http://localhost:3000" : `file://${join(__dirname, "..", "../build/index.html")}`);

	window.once("ready-to-show", () => {
		autoUpdater.checkForUpdatesAndNotify();
	});

	window.on("close", (e) => {
		if (!config.isQuiting) {
			e.preventDefault();

			window.hide();
		}
	});

	return window;
};
