const TOKEN_KEY = 'token';

const isLogin = () => !!localStorage.getItem(TOKEN_KEY);

const getToken = () => localStorage.getItem(TOKEN_KEY);

const setToken = (token: string) => {
	localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
