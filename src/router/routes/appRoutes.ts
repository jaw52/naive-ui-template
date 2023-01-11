import { RouteRecordNormalized } from 'vue-router';

// vite从文件系统导入多个模块，即收集modules下的文件
const modules = import.meta.glob('./modules/*.ts', { eager: true });

function formatModules(_modules: Record<string, any>) {
	const result: RouteRecordNormalized[] = [];

	Object.keys(_modules).forEach((key) => {
		const defaultModule = _modules[key].default;
		if (!defaultModule) return;
		const moduleList = Array.isArray(defaultModule)
			? [...defaultModule]
			: [defaultModule];
		result.push(...moduleList);
	});

	return result;
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules);
