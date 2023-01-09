import { defineStore } from 'pinia';
import { clearToken, setToken } from '@/utils/auth';
import { login } from '@/api/user';

export type RoleType = '' | '*' | 'admin' | 'user';

export interface UserState {
	role: RoleType;
}

export const useUserStore = defineStore({
	id: 'app-user',
	state: (): UserState => ({
		role: '',
	}),
	getters: {
		userInfo(state: UserState): UserState {
			return { ...state };
		},
	},
	actions: {
		// 登录
		async login(form) {
			try {
				const res = await login(form);
				setToken(res.data.token);
				return Promise.resolve(true);
			} catch (err) {
				clearToken();
				return Promise.reject();
			}
		},
	},
});
