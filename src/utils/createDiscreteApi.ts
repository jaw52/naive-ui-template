import { createDiscreteApi as createDiscreteApiNA } from 'naive-ui';
import store, { useThemeStore } from '@/store';

// 创建NA脱离上下文的 API
export function createDiscreteApi() {
	const themeStore = useThemeStore(store);
	const { loadingBar } = createDiscreteApiNA(['loadingBar'], {
		configProviderProps: {
			themeOverrides: themeStore.getThemeOverrides,
		},
	});

	return { loadingBar };
}