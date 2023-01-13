import { ConfigProviderProps, createDiscreteApi } from 'naive-ui';
import store, { useThemeStore } from '@/store';
import { computed } from 'vue';

// 创建NA脱离上下文的 API
export function useCreateDiscreteApi() {
	const themeStore = useThemeStore(store);

	const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
		themeOverrides: themeStore.getThemeOverrides,
		theme: themeStore.getDarkTheme,
	}));

	const { loadingBar, message, dialog } = createDiscreteApi(
		['loadingBar', 'message', 'dialog'],
		{
			configProviderProps: configProviderPropsRef,
		}
	);

	return { loadingBar, message, dialog };
}
