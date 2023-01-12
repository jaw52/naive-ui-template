<template>
	<div>
		<n-tooltip>
			<template #trigger>
				<n-button circle @click="$emit('click')">
					<template #icon>
						<slot />
					</template>
				</n-button>
			</template>
			<span>{{ content }}</span>
		</n-tooltip>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	content: string;
}>();

defineEmits<{
	(e: 'click'): void;
}>();
</script>

<style scoped></style>
