import { defineStore } from 'pinia';

interface SettingState {
	dark: boolean;
}

export const useSettingStore = defineStore({
	id: 'app-setting',
	state: (): SettingState => ({
		dark: false,
	}),
	actions: {
		toggleTheme(dark: boolean) {
			this.dark = dark;
		},
	},
});
