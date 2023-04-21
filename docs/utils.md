# 其他常用方法

## 节流函数

**导入**

| a | b | c | d |


```js{4}
import { throttle } from "util-xx"
```

**使用**

```js{4}
const throttleFn = throttle(()=>{
  console.log("throttle")
},500)

```

## 防抖函数

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
