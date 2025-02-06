---
title: Switch | Dtm-Element
description: Switch 组件的文档
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## **基础用法**

<preview path="../demo/Switch/Basic.vue" title="基础Switch" description="Switch 基础用例"></preview>

## 禁用状态

设置 **disabled** 属性，接受一个 boolean，设置true即可禁用。

<preview path="../demo/Switch/Disabled.vue" title="Switch 禁用状态" description="Switch 禁用状态"></preview>

## 不同尺寸

设置 **size** 属性，接受**large / small**，呈现不同的尺寸。

<preview path="../demo/Switch/Size.vue" title="Switch 不同尺寸" description="Switch 不同尺寸"></preview>

## 支持自定义 value 类型

你可以设置 **active-value** 和 **inactive-value** 属性， 它们接受 boolean | string | number 类型的值。
<preview path="../demo/Switch/CustomValue.vue" title="支持自定义 value 类型" description="Switch 支持自定义 value 类型"></preview>

## 文字描述

使用 **active-text** 属性与 **inactive-text** 属性来设置开关的文字描述。

<preview path="../demo/Switch/Text.vue" title="支持文字描述" description="Switch 文字描述"></preview>

```vue
<script setup lang="ts">
import { ref } from 'vue'

const switchValue = ref(false)
</script>

<template>
  <VkSwitch v-model="switchValue" />
  <p>当前状态: {{ switchValue }}</p>
</template>
```

✅ **说明**：

- 绑定 `v-model`，点击后 `switchValue` 在 `true/false` 之间切换。

## **属性（Props）**

| 属性名          | 说明                             | 类型                          | 默认值  |
| --------------- | -------------------------------- | ----------------------------- | ------- |
| `modelValue`    | 开关的绑定值                     | `boolean \| string \| number` | `false` |
| `disabled`      | 是否禁用                         | `boolean`                     | `false` |
| `activeText`    | 开启状态显示的文本               | `string`                      | `''`    |
| `inactiveText`  | 关闭状态显示的文本               | `string`                      | `''`    |
| `activeValue`   | 开启时的值                       | `boolean \| string \| number` | `true`  |
| `inactiveValue` | 关闭时的值                       | `boolean \| string \| number` | `false` |
| `name`          | 原生 `name` 属性                 | `string`                      | `''`    |
| `id`            | 原生 `id` 属性                   | `string`                      | `''`    |
| `size`          | 组件大小，可选 `small` / `large` | `'small' \| 'large'`          | `默认`  |

## **事件（Emits）**

| 事件名              | 说明                 | 回调参数                 |
| ------------------- | -------------------- | ------------------------ |
| `update:modelValue` | 绑定值发生变化时触发 | `value: SwitchValueType` |
| `change`            | 开关状态改变时触发   | `value: SwitchValueType` |

## **示例**

### **1. 禁用状态**

```vue
<VkSwitch v-model="switchValue" disabled />
```

### **2. 自定义开关文本**

```vue
<VkSwitch v-model="switchValue" activeText="开" inactiveText="关" />
```

### **3. 使用自定义的 `activeValue` / `inactiveValue`**

```vue
<VkSwitch v-model="switchValue" activeValue="on" inactiveValue="off" />
```

### **4. 设置不同大小**

```vue
<VkSwitch v-model="smallSwitch" size="small" />
<VkSwitch v-model="largeSwitch" size="large" />
```

### **5. 监听 `change` 事件**

```vue
<VkSwitch v-model="switchValue" @change="handleChange" />
```

### **6. 结合表单使用**

```vue
<form @submit.prevent="alert('提交成功!')">
  <label>
    <VkSwitch v-model="formData.agree" />
    我同意《用户协议》
  </label>
  <button type="submit" :disabled="!formData.agree">提交</button>
</form>
```

## **总结**

- **`VkSwitch`** 适用于状态切换，如开关、启用/禁用等。
- **支持 `v-model` 绑定值**，可自定义 `activeValue/inactiveValue`。
- **提供 `change` 事件**，方便监听状态变更。
- **支持不同尺寸（small/large）**，适配不同 UI 需求。
