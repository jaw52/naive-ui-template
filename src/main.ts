import '@/plugins/setupMock';
import router from '@/router';
import { setupTailwind } from '@/plugins/setupTailwind';
import '@/styles/index.css';
import '@unocss/reset/tailwind.css';
// eslint-disable-next-line import/no-unresolved
import 'uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import directives from './directives';
import store from './store';

async function setupApp() {
	const app = createApp(App);
	app.use(store).use(router).use(directives);
	setupTailwind();
	await router.isReady();
	app.mount('#app');
}

setupApp();
