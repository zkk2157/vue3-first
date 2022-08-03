module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/multi-word-component-names":"off",
    "generator-star-spacing": "off",
    "no-tabs":"off",
    "no-unused-vars":"off",
    // "no-console":"off",
    "no-irregular-whitespace":"off",
    // "no-debugger": "off"

  }
}
