import { defineStore } from 'pinia';
import { clearToken, setToken } from '@/utils/auth';
import { getUserInfo, login, logout } from '@/api/user';

export type RoleType = '' | '*' | 'admin' | 'user';

export interface UserState {
	name: string;
	role: RoleType;
}

export const useUserStore = defineStore({
	id: 'app-user',
	state: (): Partial<UserState> => ({
		name: undefined,
		role: undefined,
	}),
	getters: {
		userInfo(state: Partial<UserState>): Partial<UserState> {
			return { ...state };
		},
	},
	actions: {
		// 登录
		async login(form) {
			try {
				const { data } = await login(form);
				setToken(data.token);
				return Promise.resolve(true);
			} catch (err) {
				clearToken();
				return Promise.reject(err);
			}
		},
		async logout() {
			try {
				await logout();
			} finally {
				this.$reset();
				clearToken();
			}
		},
		async info() {
			const { data } = await getUserInfo();
			this.$patch(data);
		},
	},
});
