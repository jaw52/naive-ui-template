import { themeColorList } from '@/configs/themeConfig';
import { defineStore } from 'pinia';
import { darkTheme, GlobalTheme, GlobalThemeOverrides } from 'naive-ui';
import { generate } from '@ant-design/colors';

interface DesignSettingState {
	// 深色主题
	dark: boolean;
	// 系统风格
	themeColor: string;
	// 系统内置风格
	themeColorList: string[];
}

export const useThemeStore = defineStore({
	id: 'app-theme',
	state: (): DesignSettingState => ({
		dark: false,
		themeColor: themeColorList[0],
		themeColorList,
	}),
	getters: {
		getDarkTheme(): GlobalTheme | null {
			return this.dark ? darkTheme : null;
		},
		getAppTheme(): string {
			return this.themeColor;
		},
		getAppThemeList(): string[] {
			return this.themeColorList;
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
	},
});
