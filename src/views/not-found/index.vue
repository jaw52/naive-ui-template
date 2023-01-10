<template>
	<n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
		<template #footer>
			<n-button @click="goBack">返回首页</n-button>
		</template>
	</n-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RoutePath } from '@/enums/route';

const router = useRouter();
const goBack = () => {
	router.push({ name: RoutePath.DefaultPath });
};
</script>

<style scoped></style>
