import type { App } from 'vue';
import copy from './copy';

/** setup custom vue directives. - [安装自定义的vue指令] */
export default {
	install(Vue: App) {
		Vue.directive('copy', copy);
	},
};
