# `Dropdown` 组件使用文档

`Dropdown` 组件是一个下拉菜单组件，可以用于展示一组可选择的菜单项。它支持点击或悬停触发，并且提供丰富的配置选项来控制其行为和样式。

## 安装

确保已经在项目中安装并引入了 `Dropdown` 组件。如果你正在使用 Vue 3 并通过组件库管理工具（如 Vite）构建项目，则只需在需要的地方导入和注册组件。

```js
import DtmDropdown from '@/components/Dropdown/Dropdown.vue'
```

## 基本用法

`Dropdown` 组件默认触发方式为 `hover`，也可以设置为 `click`。下面是一个基本的用法示例：

<preview path="../demo/Dropdown/Dropdown.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 属性

| 属性             | 类型                 | 默认值     | 说明                                                                 |
| ---------------- | -------------------- | ---------- | -------------------------------------------------------------------- |
| `menuOptions`    | `MenuOption[]`       | 无         | 菜单项的数组，每项包含 `label`、`key` 和可选的 `disabled`、`divided` |
| `trigger`        | `'hover' \| 'click'` | `'hover'`  | 设置触发下拉菜单的方式，支持 `hover` 和 `click` 两种方式             |
| `placement`      | `string`             | `'bottom'` | 设置弹出框的位置，支持 `top`, `bottom`, `left`, `right` 等           |
| `openDelay`      | `number`             | `0`        | 设置打开下拉菜单的延迟，单位为毫秒                                   |
| `closeDelay`     | `number`             | `0`        | 设置关闭下拉菜单的延迟，单位为毫秒                                   |
| `manual`         | `boolean`            | `false`    | 设置为 `true` 时需要手动控制下拉菜单的显示和隐藏                     |
| `hideAfterClick` | `boolean`            | `true`     | 设置为 `true` 时点击菜单项后自动关闭下拉菜单                         |
| `popperOptions`  | `Partial<Options>`   | 无         | `Popper.js` 配置项，用于控制弹出框的行为和样式                       |

### `MenuOption` 类型

| 属性       | 类型               | 默认值  | 说明                                      |
| ---------- | ------------------ | ------- | ----------------------------------------- |
| `label`    | `string \| VNode`  | 无      | 菜单项的显示内容，支持字符串或 VNode 组件 |
| `key`      | `string \| number` | 无      | 菜单项的唯一标识                          |
| `disabled` | `boolean`          | `false` | 设置为 `true` 时该项不可点击              |
| `divided`  | `boolean`          | `false` | 设置为 `true` 时该项前面会出现分隔符      |

## 事件

| 事件             | 返回值       | 说明                                       |
| ---------------- | ------------ | ------------------------------------------ |
| `visible-change` | `boolean`    | 当下拉菜单的可见状态发生变化时触发         |
| `select`         | `MenuOption` | 当选中菜单项时触发，返回被选中的菜单项对象 |

## 使用方法

#### 1. 默认触发方式 `hover`

```vue
<template>
  <DtmDropdown :menu-options="menuOptions">
    <button>Hover over me to open dropdown</button>
  </DtmDropdown>
</template>

<script setup>
import DtmDropdown from '@/components/Dropdown/Dropdown.vue'

const menuOptions = [
  { label: 'Option 1', key: '1' },
  { label: 'Option 2', key: '2' },
  { label: 'Option 3', key: '3', disabled: true },
  { label: 'Option 4', key: '4', divided: true },
]
</script>
```

#### 2. 使用 `click` 触发方式

如果你希望通过点击触发下拉菜单，可以设置 `trigger` 属性为 `'click'`。

```vue
<template>
  <DtmDropdown :menu-options="menuOptions" trigger="click">
    <button>Click me to open dropdown</button>
  </DtmDropdown>
</template>

<script setup>
import DtmDropdown from '@/components/Dropdown/Dropdown.vue'

const menuOptions = [
  { label: 'Option 1', key: '1' },
  { label: 'Option 2', key: '2' },
  { label: 'Option 3', key: '3', disabled: true },
  { label: 'Option 4', key: '4', divided: true },
]
</script>
```

#### 3. 控制菜单显隐

通过 `manual` 属性，你可以手动控制下拉菜单的显隐。设置 `manual` 为 `true` 后，组件会暴露 `show` 和 `hide` 方法，你可以在需要时调用它们。

```vue
<template>
  <DtmDropdown :menu-options="menuOptions" manual ref="dropdown">
    <button @click="toggleDropdown">Toggle Dropdown</button>
  </DtmDropdown>
</template>

<script setup>
import { ref } from 'vue'
import DtmDropdown from '@/components/Dropdown/Dropdown.vue'

const menuOptions = [
  { label: 'Option 1', key: '1' },
  { label: 'Option 2', key: '2' },
  { label: 'Option 3', key: '3', disabled: true },
  { label: 'Option 4', key: '4', divided: true },
]

const dropdown = ref(null)

const toggleDropdown = () => {
  dropdown.value?.show()
}
</script>
```

## 总结

`Dropdown` 组件是一个功能强大且灵活的下拉菜单，可以轻松集成到任何项目中。它支持不同的触发方式、丰富的自定义选项和事件处理，满足了大多数使用场景。
