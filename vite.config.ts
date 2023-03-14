import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [
			vue(),
			vueJsx(),
			AutoImport({
				imports: [
					'vue',
					{
						'naive-ui': [
							'useDialog',
							'useMessage',
							'useNotification',
							'useLoadingBar',
						],
					},
				],
			}),
			Components({
				resolvers: [NaiveUiResolver()],
			}),
			UnoCSS(),
		],
		server: {
			host: true,
			port: 3032,
		},
		define: {
			'process.env': {},
		},
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vuedraggable'],
						three: ['three'],
					},
				},
			},
		},
		base: env.VITE_APP_BASE_URL ?? '/',
		resolve: {
			alias: [
				{
					find: '@',
					replacement: path.resolve(__dirname, 'src'),
				},
			],
		},
	};
});
