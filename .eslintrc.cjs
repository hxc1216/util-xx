module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": ["error", "windows"],
    "no-console": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "arrow-parens": "off", // 箭头函数参数必须带括号
    "guard-for-in": 0, // forin 警告
  },
};
