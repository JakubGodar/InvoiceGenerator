export interface IElectronAPI {}

declare global {
	interface Window {
		electronAPI: IElectronAPI;
	}
	interface File {
		path: string;
	}
}
