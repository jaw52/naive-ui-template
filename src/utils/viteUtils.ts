export function loadImages(name: string) {
	return new URL(`../assets/images/${name}`, import.meta.url).href;
}
