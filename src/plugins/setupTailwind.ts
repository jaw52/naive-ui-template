// 解决tailwind覆盖naive-ui 样式
export const setupTailwind = () => {
	const meta = document.createElement('meta');
	meta.name = 'naive-ui-style';
	document.head.appendChild(meta);
};
