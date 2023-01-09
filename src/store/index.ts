import { createPinia } from 'pinia';
import { useThemeStore } from './modules/theme';

const store = createPinia();

export { useThemeStore };
export default store;
