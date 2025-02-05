# 📋 **DtmInput 组件使用文档**

`DtmInput` 是一个功能丰富、可扩展的输入框组件，支持多种常见的表单输入需求，如文本输入、密码框、清空按钮、自定义前后缀、复合型输入框等。

## 🚀 **组件引入**

```ts
import DtmInput from '@/components/Input/Input.vue'
```

## 📦 **基础用法**

# Input 输入框

通过鼠标或键盘输入字符

## 基础文本框

<preview path="../demo/Input/Basic.vue" title="基础文本框" description="Input 基础文本框"></preview>

## 禁用文本框

通过 **disabled** 属性指定是否禁用 input 组件

<preview path="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></preview>

## 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： **large**, **small**。

<preview path="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></preview>

## 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 **prepend** 和 **append** 插槽。
要在输入框中添加前后元素，可以使用 **prefix** 和 **suffix** 插槽。

<preview path="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

## Textarea

用于输入多行文本信息可缩放的输入框。 添加 **type="textarea"** 属性来将 input 元素转换为原生的 textarea 元素。

<preview path="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></preview>

## 密码文本框

使用 **show-password** 属性即可得到一个可切换显示隐藏的密码框

<preview path="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></preview>

## 清空文本框

使用 **clearable** 属性即可得到一个可一键清空的输入框

<preview path="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></preview>

```vue
<template>
  <DtmInput v-model="text" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
import DtmInput from '@/components/Input/Input.vue'

const text = ref('')
</script>
```

## ⚙️ **Props (属性)**

| 属性名         | 说明                                         | 类型                   | 默认值      |
| :------------- | :------------------------------------------- | :--------------------- | :---------- |
| `modelValue`   | 绑定值，支持 `v-model`                       | `string`               | `''`        |
| `type`         | 输入框类型：`text` / `password` / `textarea` | `string`               | `'text'`    |
| `size`         | 输入框大小：`large` / `small`                | `'large'` \| `'small'` | `undefined` |
| `disabled`     | 是否禁用输入框                               | `boolean`              | `false`     |
| `clearable`    | 是否显示清空按钮                             | `boolean`              | `false`     |
| `showPassword` | 密码框可切换显示/隐藏                        | `boolean`              | `false`     |
| `placeholder`  | 占位符提示文本                               | `string`               | `''`        |
| `readonly`     | 是否只读                                     | `boolean`              | `false`     |
| `autocomplete` | 自动补全属性                                 | `string`               | `'off'`     |
| `autofocus`    | 是否自动获取焦点                             | `boolean`              | `false`     |
| `form`         | 指定所属表单的 `form` 属性                   | `string`               | `undefined` |

## 📢 **Events (事件)**

| 事件名              | 说明                         | 回调参数            |
| :------------------ | :--------------------------- | :------------------ |
| `update:modelValue` | 双向绑定事件，更新 `v-model` | `value: string`     |
| `input`             | 输入时触发（值变化立即触发） | `value: string`     |
| `change`            | 输入框失去焦点且值变化时触发 | `value: string`     |
| `focus`             | 获取焦点时触发               | `event: FocusEvent` |
| `blur`              | 失去焦点时触发               | `event: FocusEvent` |
| `clear`             | 点击清空按钮时触发           | 无                  |

## 🗂️ **Slots (插槽)**

| 插槽名    | 说明                               |
| :-------- | :--------------------------------- |
| `prepend` | 输入框前置内容，通常用于标签或符号 |
| `append`  | 输入框后置内容，通常用于单位或按钮 |
| `prefix`  | 输入框内的前缀内容，通常放置图标   |
| `suffix`  | 输入框内的后缀内容，通常放置图标   |

## 📊 **示例**

### ✅ **1. 带清空按钮**

```vue
<DtmInput v-model="inputText" placeholder="可清空" clearable />
```

### ✅ **2. 密码框切换可见**

```vue
<DtmInput v-model="password" type="password" show-password placeholder="请输入密码" />
```

### ✅ **3. 自定义前缀/后缀**

```vue
<DtmInput v-model="email" placeholder="邮箱地址">
  <template #prefix>📧</template>
  <template #suffix>✅</template>
</DtmInput>
```

### ✅ **4. 复合型输入框**

```vue
<DtmInput v-model="price" placeholder="金额">
  <template #prepend>￥</template>
  <template #append>.00</template>
</DtmInput>
```

### ✅ **5. 多行文本输入（Textarea）**

```vue
<DtmInput v-model="description" type="textarea" placeholder="请输入描述" />
```

---

## 🧩 **方法 (Exposed API)**

组件通过 `ref` 暴露了 `input` 或 `textarea` 的 DOM 引用，方便外部调用。

```vue
<template>
  <DtmInput ref="inputRef" v-model="value" placeholder="自动聚焦" />
  <button @click="focusInput">聚焦输入框</button>
</template>

<script setup>
import { ref } from 'vue'
import DtmInput from '@/components/Input/Input.vue'

const value = ref('')
const inputRef = ref()

const focusInput = () => {
  inputRef.value.ref.focus()
}
</script>
```

## 🗒️ **注意事项**

1. `v-model` 默认绑定 `modelValue`，需配合 `update:modelValue` 使用。
2. `clearable`、`showPassword` 等功能需与 `disabled` 状态结合考虑。
3. 插槽 `prepend` 和 `append` 不会影响输入框的宽度布局。

## 💡 **版本历史**

- **v1.0.0**：基础功能完成，支持常规输入、清空按钮、密码切换、自定义插槽等。
- **v1.1.0**：新增多行输入 `textarea`，优化事件处理和样式细节。
