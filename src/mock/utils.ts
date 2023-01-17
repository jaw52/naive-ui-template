export default ({
	mock = true,
	setup,
}: {
	mock?: boolean;
	setup: () => void;
}) => {
	if (mock && !import.meta.env.VITE_APP_DISABLE_MOCK) setup();
};

export const successResponseWrap = (data: unknown) => ({
	data,
	status: 'ok',
	msg: '请求成功',
	code: 20000,
});

export const failResponseWrap = (data: unknown, msg: string, code = 50000) => ({
	data,
	status: 'fail',
	msg,
	code,
});
