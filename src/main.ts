import { createApp } from 'vue';
import store from './store';
import router from '@/route';
import App from './App.vue';
import directives from './directives';
import '@/styles/index.css';
import { setupTailwind } from '@/plugins/setupTailwind';
import '@/plugins/setupMock';

async function setupApp() {
	const app = createApp(App);
	app.use(store).use(router).use(directives);
	setupTailwind();
	await router.isReady();
	app.mount('#app');
}

await setupApp();
