---
title: Icon | Dtm-Element
description: Icon 组件的文档
---

# Icon 图标组件

`Icon` 组件是一个封装了 FontAwesome 图标的 Vue 组件，支持自定义颜色、大小、旋转、动画等属性。你可以通过该组件在应用中使用 FontAwesome 图标。

## 安装

确保你已经安装了 `@fortawesome/vue-fontawesome` 和相关的 FontAwesome 图标库：

```bash
npm install --save @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons
```

## 基本用法

<preview path="../demo/Icon/Icon.vue" title="基础用法" description="Icon 组件的基础用法"></preview>

## 属性

| Name          | Description                                                      | Type           | Default    |
| ------------- | ---------------------------------------------------------------- | -------------- | ---------- |
| `icon`        | 设置图标的名称或图标对象，必须传入。支持字符串、对象或数组格式。 | \`string       | object     |
| `type`        | 设置图标的类型，控制颜色等样式。                                 | \`'primary'    | 'success'  |
| `size`        | 设置图标的大小。可以选择多个预设值。                             | \`'2xs'        | 'xs'       |
| `color`       | 设置图标的颜色。                                                 | `string`       | —          |
| `spin`        | 是否开启旋转动画。                                               | `boolean`      | `false`    |
| `flip`        | 设置图标的翻转方向。                                             | \`'horizontal' | 'vertical' |
| `rotation`    | 设置图标的旋转角度。                                             | \`90           | 180        |
| `pulse`       | 是否开启脉动效果。                                               | `boolean`      | `false`    |
| `fixedWidth`  | 是否固定图标宽度。                                               | `boolean`      | `false`    |
| `border`      | 是否为图标添加边框。                                             | `boolean`      | `false`    |
| `listItem`    | 是否将图标显示为列表项。                                         | `boolean`      | `false`    |
| `title`       | 设置图标的标题，鼠标悬停时显示。                                 | `string`       | —          |
| `mask`        | 设置图标的遮罩层。                                               | \`object       | Array      |
| `pull`        | 设置图标的拉伸方向。                                             | \`'right'      | 'left'\`   |
| `swapOpacity` | 是否交换图标的透明度。                                           | `boolean`      | `false`    |
| `transform`   | 设置图标的自定义变换。                                           | \`object       | string\`   |
| `bounce`      | 是否开启跳动动画。                                               | `boolean`      | `false`    |
| `shake`       | 是否开启抖动动画。                                               | `boolean`      | `false`    |
| `beat`        | 是否开启跳跃动画。                                               | `boolean`      | `false`    |
| `fade`        | 是否开启淡出动画。                                               | `boolean`      | `false`    |
| `beatFade`    | 是否开启跳跃并淡出动画。                                         | `boolean`      | `false`    |
| `spinPulse`   | 是否开启脉动旋转动画。                                           | `boolean`      | `false`    |
| `spinReverse` | 是否开启反向旋转动画。                                           | `boolean`      | `false`    |

## 插槽

| Name    | Description |
| ------- | ----------- |
| default | 图标的内容  |

## 事件

| Event | Description    | Parameters   |
| ----- | -------------- | ------------ |
| click | 点击图标时触发 | `MouseEvent` |

## 示例

### 1. 基本图标

```vue
<template>
  <DtmIcon icon="fas fa-home" />
</template>
```

### 2. 设置图标颜色

```vue
<template>
  <DtmIcon icon="fas fa-home" color="red" />
</template>
```

### 3. 设置大小和类型

```vue
<template>
  <DtmIcon icon="fas fa-home" size="2x" type="success" />
</template>
```

### 4. 设置动画效果

```vue
<template>
  <DtmIcon icon="fas fa-sync-alt" spin />
</template>
```

### 5. 设置翻转和旋转

```vue
<template>
  <DtmIcon icon="fas fa-arrow-right" flip="horizontal" rotation="90" />
</template>
```

## 说明

- **`icon`**：这是一个必填项，设置要显示的图标。可以是 FontAwesome 图标名称（如 `fas fa-home`），或 `IconDefinition` 对象。
- **`type`**：设置图标的颜色类型。可以选择 `primary`、`success`、`warning`、`danger` 或 `info`，也可以根据需要自定义颜色。
- **`size`**：控制图标的大小。支持多个预设的大小，例如 `1x`、`2x`、`3x` 等。
- **动画效果**：可以通过设置 `spin`、`pulse`、`shake` 等属性启用不同的动画效果，增强交互体验。
