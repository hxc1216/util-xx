import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "util-xx",
  description: "工作中常用的工具方法，Array,Object,String,utils...",
  base:"/", // 打包时开启
  dest:"./dist",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "start", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Function Types",
        items: [
          { text: "string", link: "/string" },
          { text: "array", link: "/array" },
          { text: "object", link: "/object" },
          { text: "function", link: "/function" },
          { text: "utils", link: "/utils" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
