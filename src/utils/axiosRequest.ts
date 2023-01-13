import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '@/utils/auth';
import { useCreateDiscreteApi } from '@/hooks/useCreateDiscreteApi';
import { Tips } from '@/enums/tips';
import { useUserStore } from '@/store';

export interface HttpResponse<T = any> {
	status: number;
	msg: string;
	code: number;
	data: T;
}

const setupAxios = () => {
	const instance = axios.create();
	instance.interceptors.request.use(
		(config: AxiosRequestConfig) => {
			const token = getToken();
			if (token) {
				if (!config.headers) {
					config.headers = {};
				}
				// @ts-ignore
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => {
			const { message } = useCreateDiscreteApi();
			message.error(Tips.NetError);
			return Promise.reject(error);
		}
	);

	instance.interceptors.response.use(
		(response: AxiosResponse<HttpResponse>) => {
			const { message, dialog } = useCreateDiscreteApi();
			const res = response.data;

			// 返回不为20000，则请求错误
			if (res.code !== 20000) {
				const tips = res.msg || Tips.NetError;
				message.error(tips, { duration: 5 * 1000 });

				// 50008: 未等录;
				if (
					[50008].includes(res.code) &&
					response.config.url !== '/user/info'
				) {
					dialog.error({
						title: '请重新登录',
						content: '登录已失效',
						positiveText: '确认',
						onPositiveClick: async () => {
							const userStore = useUserStore();
							await userStore.logout();
						},
					});
				}

				return Promise.reject(new Error(tips));
			}

			return Promise.resolve(res);
		},
		(error) => {
			const { message } = useCreateDiscreteApi();
			message.error(error.msg || Tips.NetError, {
				duration: 5 * 1000,
			});
			return Promise.reject(error);
		}
	);

	return instance;
};

export default setupAxios();
