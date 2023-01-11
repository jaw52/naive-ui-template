import { Directive, DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
	const permissionArr = binding.value;
	const userStore = useUserStore();
	const { role } = userStore;

	if (Array.isArray(permissionArr) && permissionArr.length > 0) {
		const hasPermission = permissionArr.includes(role);

		if (!hasPermission && el.parentNode) {
			el.parentNode.removeChild(el);
		}
	} else {
		throw new Error(`need roles! Like v-permission="['admin','user']"`);
	}
}

export default {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		checkPermission(el, binding);
	},
	updated(el: HTMLElement, binding: DirectiveBinding) {
		checkPermission(el, binding);
	},
} as Directive;
