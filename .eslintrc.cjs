/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 关闭组件命名检测
  rules: {
    'vue/multi-word-component-names': 'off'
  },
}
