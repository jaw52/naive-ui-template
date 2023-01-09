import { createPinia } from 'pinia';
import { useThemeStore } from './modules/theme';
import { useUserStore } from './modules/user';

const store = createPinia();

export { useThemeStore, useUserStore };
export default store;
