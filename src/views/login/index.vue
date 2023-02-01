<template>
	<div class="view-account">
		<div ref="modelRef" class="model" />
		<div class="view-account-container">
			<div class="view-account-top">
				<div class="view-account-top-logo">
					<img :src="logoImage" alt="" />
				</div>
				<div class="view-account-top-desc">你相信引力吗</div>
			</div>
			<div class="view-account-form">
				<n-form
					ref="formRef"
					label-placement="left"
					size="large"
					:model="formInline"
					:rules="rules"
				>
					<n-form-item path="username">
						<n-input
							v-model:value="formInline.username"
							placeholder="请输入用户名"
						>
							<template #prefix>
								<n-icon size="18" color="#808695">
									<PersonOutline />
								</n-icon>
							</template>
						</n-input>
					</n-form-item>
					<n-form-item path="password">
						<n-input
							v-model:value="formInline.password"
							type="password"
							show-password-on="click"
							placeholder="请输入密码"
						>
							<template #prefix>
								<n-icon size="18" color="#808695">
									<LockClosedOutline />
								</n-icon>
							</template>
						</n-input>
					</n-form-item>
					<n-form-item class="default-color">
						<div class="flex justify-between">
							<div class="flex-initial">
								<n-checkbox v-model:checked="autoLogin">自动登录</n-checkbox>
							</div>
							<div class="flex-initial order-last">
								<a href="javascript:">忘记密码</a>
							</div>
						</div>
					</n-form-item>
					<n-form-item>
						<n-button
							type="primary"
							size="large"
							:loading="loading"
							block
							@click.stop="handleSubmit"
						>
							登录
						</n-button>
					</n-form-item>
					<n-form-item class="default-color">
						<div class="flex view-account-other">
							<div class="flex-initial">
								<span>其它登录方式</span>
							</div>
							<div class="flex-initial mx-2">
								<a href="javascript:">
									<n-icon size="24" color="#2d8cf0">
										<LogoGithub />
									</n-icon>
								</a>
							</div>
							<div class="flex-initial mx-2">
								<a href="javascript:">
									<n-icon size="24" color="#2d8cf0">
										<LogoFacebook />
									</n-icon>
								</a>
							</div>
							<div class="flex-initial" style="margin-left: auto">
								<a href="javascript:">注册账号</a>
							</div>
						</div>
					</n-form-item>
				</n-form>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { FormRules, useMessage } from 'naive-ui';
import { useUserStore } from '@/store';
import { RoutePath } from '@/enums/route';
import logoImage from '@/assets/images/account-logo.png';
import {
	LockClosedOutline,
	LogoFacebook,
	LogoGithub,
	PersonOutline,
} from '@vicons/ionicons5';
import { Tips } from '@/enums/tips';
import { initModel } from './initModel';

interface FormState {
	username: string;
	password: string;
}

const formRef = ref();
const message = useMessage();
const loading = ref(false);
const autoLogin = ref(true);

const formInline = reactive({
	username: 'admin',
	password: '123456',
	isCaptcha: true,
});

const rules: FormRules = {
	username: { required: true, message: '请输入用户名', trigger: 'blur' },
	password: { required: true, message: '请输入密码', trigger: 'blur' },
};

const userStore = useUserStore();

const router = useRouter();

const handleSubmit = () => {
	formRef.value.validate(async (errors) => {
		if (!errors) {
			const { username, password } = formInline;
			loading.value = true;

			const params: FormState = {
				username,
				password,
			};

			try {
				await userStore.login(params);
				const { redirect, ...othersQuery } = router.currentRoute.value.query;

				await router.push({
					name: (redirect as string) || RoutePath.DefaultPath,
					query: {
						...othersQuery,
					},
				});

				message.success(Tips.Welcome);
			} finally {
				loading.value = false;
			}
		}
	});
};

const modelRef = ref();
onMounted(() => {
	initModel(modelRef.value);
});
</script>

<style lang="less" scoped>
.view-account {
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: auto;

	&-container {
		flex: 1;
		padding: 32px 12px;
		max-width: 384px;
		min-width: 320px;
		margin: 0 auto;
	}

	&-top {
		padding: 32px 0;
		text-align: center;

		&-desc {
			font-size: 14px;
			color: #808695;
		}
	}

	&-other {
		width: 100%;
	}

	.default-color {
		color: #515a6e;

		.ant-checkbox-wrapper {
			color: #515a6e;
		}
	}
}

@media (min-width: 768px) {
	.view-account {
		background-image: url('../../assets/images/login.svg');
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: 100%;
	}

	.page-account-container {
		padding: 32px 0 24px 0;
	}
}

.model {
	width: 800px;
	height: 800px;
	position: fixed;
	right: 100px;
	bottom: 100px;
}
</style>
