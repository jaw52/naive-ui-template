import { themeColorList } from '@/configs/themeConfig';
import { defineStore } from 'pinia';
import { GlobalThemeOverrides } from 'naive-ui';
import { generate } from '@ant-design/colors';

interface DesignSettingState {
	// 深色主题
	darkTheme: boolean;
	// 系统风格
	themeColor: string;
	// 系统内置风格
	themeColorList: string[];
}

export const useThemeStore = defineStore({
	id: 'app-theme',
	state: (): DesignSettingState => ({
		darkTheme: false,
		themeColor: themeColorList[0],
		themeColorList,
	}),
	getters: {
		getDarkTheme(): boolean {
			return this.darkTheme;
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
	actions: {},
});
