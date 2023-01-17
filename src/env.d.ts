interface ImportMetaEnv {
	readonly VITE_APP_DISABLE_MOCK: boolean;
	readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
