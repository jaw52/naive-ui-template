import { useSettingStore } from './modules/setting';
import { createPinia } from 'pinia';
import { useThemeStore } from './modules/theme';
import { useUserStore } from './modules/user';

const store = createPinia();

export { useThemeStore, useUserStore, useSettingStore };
export default store;
