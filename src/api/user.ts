import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user';
import axiosRequest from '@/utils/axiosRequest';

export interface LoginData {
	username: string;
	password: string;
}

export interface LoginRes {
	token: string;
}

export function login(data: LoginData) {
	return axiosRequest.post<LoginRes>('/user/login', data);
}

export function logout() {
	return axiosRequest.post<LoginRes>('/user/logout');
}

export function getUserInfo() {
	return axiosRequest.post<UserState>('/user/info');
}

export function getMenuList() {
	return axiosRequest.post<RouteRecordNormalized[]>('/user/menu');
}
