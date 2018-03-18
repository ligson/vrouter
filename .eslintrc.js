// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // https://eslint.org/docs/user-guide/configuring
    'no-extend-native': 0,
    'space-before-function-paren': 0,
    'indent': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [2, 'always'],//语句强制分号结尾
    // 'quotes': [1, 'single']//引号类型 `` "" ''
    'quotes': [2, 'double'],
    'strict': 2,//使用严格模式
    // 'quote-props': [2, 'always']//对象字面量中的属性名是否强制双引号
  }
}
