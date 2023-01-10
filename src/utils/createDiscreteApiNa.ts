import { createDiscreteApi } from 'naive-ui';
import store, { useThemeStore } from '@/store';

// 创建NA脱离上下文的 API
export function createDiscreteApiNa() {
	const themeStore = useThemeStore(store);
	const { loadingBar, message, dialog } = createDiscreteApi(
		['loadingBar', 'message', 'dialog'],
		{
			configProviderProps: {
				themeOverrides: themeStore.getThemeOverrides,
			},
		}
	);

	return { loadingBar, message, dialog };
}
