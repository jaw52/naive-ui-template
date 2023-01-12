import { appColorList } from '@/config/theme';
import { defineStore } from 'pinia';
import { darkTheme, GlobalTheme, GlobalThemeOverrides } from 'naive-ui';
import { generate } from '@ant-design/colors';

interface DesignSettingState {
	// 深色主题
	dark: boolean;
	// 系统风格
	themeColor: string;
}

export const useThemeStore = defineStore({
	id: 'app-theme',
	state: (): DesignSettingState => ({
		dark: false,
		themeColor: appColorList[0],
	}),
	getters: {
		getDarkTheme(): GlobalTheme | null {
			return this.dark ? darkTheme : null;
		},
		getThemeOverrides(): GlobalThemeOverrides {
			const palettes = generate(this.themeColor);

			return {
				common: {
					primaryColor: this.themeColor,
					primaryColorHover: palettes[4],
					primaryColorPressed: palettes[4],
					primaryColorSuppl: this.themeColor,
				},
				LoadingBar: {
					colorLoading: this.themeColor,
				},
			};
		},
	},
	actions: {
		toggleTheme() {
			this.dark = !this.dark;
		},
		changePrimaryColor(color: string) {
			this.themeColor = color;
		},
	},
});
