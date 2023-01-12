import Mock from 'mockjs';
import setupMock, { successResponseWrap, failResponseWrap } from '../utils';
import { MockParams } from '../types';
import { isLogin } from '@/utils/auth';

setupMock({
	setup() {
		// 用户信息
		Mock.mock(/\/user\/info/, () => {
			if (isLogin()) {
				const role = window.localStorage.getItem('userRole') || 'admin';
				return successResponseWrap({
					avatar: '//inews.gtimg.com/newsapp_bt/0/13084452391/1000',
					name: '空条承太郎',
					role,
				});
			}
			return failResponseWrap(null, '未登录', 50008);
		});

		// 登录
		Mock.mock(/\/user\/login/, (params: MockParams) => {
			const { username, password } = JSON.parse(params.body);
			if (!username) {
				return failResponseWrap(null, '用户名不能为空', 50000);
			}
			if (!password) {
				return failResponseWrap(null, '密码不能为空', 50000);
			}
			if (username === 'admin' && password === '123456') {
				window.localStorage.setItem('userRole', 'admin');
				return successResponseWrap({
					token: '12345',
				});
			}
			if (username === 'user' && password === 'user') {
				window.localStorage.setItem('userRole', 'user');
				return successResponseWrap({
					token: '54321',
				});
			}
			return failResponseWrap(null, '账号或者密码错误', 50000);
		});

		// 登出
		Mock.mock(/\/user\/logout/, () => successResponseWrap(null));

		// 用户的服务端菜单
		Mock.mock(/\/user\/menu/, () => {
			const menuList = [
				{
					path: '/dashboard',
					name: 'dashboard',
					meta: {
						locale: 'menu.server.dashboard',
						requiresAuth: true,
						icon: 'icon-dashboard',
						order: 1,
					},
					children: [
						{
							path: 'workplace',
							name: 'Workplace',
							meta: {
								locale: 'menu.server.workplace',
								requiresAuth: true,
							},
						},
						{
							path: 'https://arco.design',
							name: 'arcoWebsite',
							meta: {
								locale: 'menu.arcoWebsite',
								requiresAuth: true,
							},
						},
					],
				},
			];
			return successResponseWrap(menuList);
		});
	},
});
