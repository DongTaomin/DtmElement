---
title: Button | Dtm-Element
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮，支持多种样式和状态。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 属性来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>



---

## Button Attributes

| Name        | Description                                                      | Type                                                        | Default   |
| ----------- | ---------------------------------------------------------------- | ----------------------------------------------------------- | --------- |
| size        | 按钮尺寸，可选 `large`, `default`, `small`                       | `'large' \| 'default' \| 'small'`                           | `default` |
| type        | 按钮类型，可选 `primary`, `success`, `warning`, `danger`, `info` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `default` |
| plain       | 是否为朴素按钮                                                   | `boolean`                                                   | `false`   |
| round       | 是否为圆角按钮                                                   | `boolean`                                                   | `false`   |
| circle      | 是否为圆形按钮                                                   | `boolean`                                                   | `false`   |
| loading     | 是否为加载中状态                                                 | `boolean`                                                   | `false`   |
| disabled    | 是否禁用按钮                                                     | `boolean`                                                   | `false`   |
| icon        | 图标组件名                                                       | `string`                                                    | `—`       |
| autofocus   | 是否默认聚焦                                                     | `boolean`                                                   | `false`   |
| native-type | 原生 button 的 type 属性，可选 `button`, `submit`, `reset`       | `'button' \| 'submit' \| 'reset'`                           | `button`  |

---

## 插槽

| Name    | Description    |
| ------- | -------------- |
| default | 按钮的内容     |
| icon    | 自定义图标插槽 |

---

## 事件

| Event | Description    | Parameters   |
| ----- | -------------- | ------------ |
| click | 点击按钮时触发 | `MouseEvent` |
