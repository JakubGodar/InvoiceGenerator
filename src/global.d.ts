export {};

declare global {
	interface Window {
		electron: {
			invoke: (channel: string, ...args: any[]) => Promise<any>;
		};
	}
	interface IceCream {
		id: string;
		name: string;
		amount: number;
	}
}
