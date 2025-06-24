const { contextBridge, ipcRenderer } = require("electron");

console.log("🔌 Preload loaded");
contextBridge.exposeInMainWorld("electron", {
	invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
});
