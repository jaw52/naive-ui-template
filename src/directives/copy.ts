import { Directive, DirectiveBinding } from 'vue';

interface ELData extends HTMLElement {
	$copyData: string | number;
	__handleClick__: () => void;
}

function handleClick(this: ELData) {
	const input = document.createElement('input');
	input.value = this.$copyData.toLocaleString();
	document.body.appendChild(input);
	input.select();
	document.execCommand('Copy');
	document.body.removeChild(input);
}

export default {
	mounted(el: ELData, binding: DirectiveBinding) {
		el.$copyData = binding.value;
		el.addEventListener('click', handleClick);
	},
	updated(el: ELData, binding: DirectiveBinding) {
		el.$copyData = binding.value;
	},
	beforeUnmount(el: ELData) {
		// eslint-disable-next-line no-underscore-dangle
		el.removeEventListener('click', el.__handleClick__);
	},
} as Directive;
