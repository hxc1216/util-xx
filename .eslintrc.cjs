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
    "no-useless-escape": 0, // 禁止不必要的转义字符
    "operator-assignment": [0, "always"], // 赋值运算符 += -=什么的
    "import/newline-after-import": "off", // 每个 import 语句之后不用必须加一个空行
    "object-curly-newline": "off",
    "no-unused-vars": "off",
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
  },
};
