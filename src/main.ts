import { createApp } from 'vue';
import router from '@/route';
import App from './App.vue';
import directives from './directives';
import store from './store';
import '@/styles/index.css';

async function setupApp() {
	const app = createApp(App).use(router).use(store).use(directives);
	await router.isReady();
	app.mount('#app');
}

await setupApp();
