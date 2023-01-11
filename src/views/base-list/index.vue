<template>
	<div>
		<n-space>
			<n-button v-permission="['admin']">admin only</n-button>
			<n-button>all</n-button>
		</n-space>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
