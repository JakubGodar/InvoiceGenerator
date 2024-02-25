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

if (config.isDev) require("electron-reloader")(module);
remote.initialize();

if (!config.isDev) {
	const autoStart = new AutoLaunch({
		name: config.appName,
	});
	autoStart.enable();
}

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
