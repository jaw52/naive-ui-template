// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/**
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    // Airbnb JavaScript Style Guide
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    // import路径检查
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    // 解决eslint与prettier冲突
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
  overrides: [
    // ts本身就能检查no-undef
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 0,
      },
    },
  ],
  // 具体的eslint规则，可覆盖extends的默认规则
  rules: {
    // import
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    // Vue: Recommended rules to be closed or modify
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    // allow @ts-ignore
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
