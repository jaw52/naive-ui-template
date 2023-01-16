import { ref, nextTick } from 'vue';

export default function useRightDropdown() {
	const x = ref(0);
	const y = ref(0);

	const showDropdown = ref(false);

	const handleContextMenu = (e: MouseEvent) => {
		showDropdown.value = false;
		nextTick().then(() => {
			showDropdown.value = true;
			x.value = e.clientX;
			y.value = e.clientY;
		});
	};

	return { x, y, showDropdown, handleContextMenu };
}
