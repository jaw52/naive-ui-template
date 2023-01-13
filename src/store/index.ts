import { useSettingStore } from './modules/setting';
import { createPinia } from 'pinia';
import { useThemeStore } from './modules/theme';
import { useUserStore } from './modules/user';
import { useTabBarStore } from './modules/tabBar';

const store = createPinia();

export { useThemeStore, useUserStore, useSettingStore, useTabBarStore };
export default store;
