<template>
	<router-view v-slot="{ Component, route }">
		<transition name="fade-bottom" mode="out-in" appear>
			<component
				:is="Component"
				v-if="route.meta.ignoreKeepAlive"
				:key="route.fullPath"
			/>
			<keep-alive v-else>
				<component :is="Component" :key="route.fullPath" />
			</keep-alive>
		</transition>
	</router-view>
</template>
