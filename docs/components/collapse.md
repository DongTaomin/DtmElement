# 📚 **DtmCollapse 折叠面板组件使用文档**

`DtmCollapse` 是一个支持手风琴模式、禁用项、自定义标题等功能的折叠面板组件，适用于展示可展开/收起的内容区域。

## 🚀 **快速开始**

### **1️⃣ 基本用法**

<preview path="../demo/Collapse/Collapse.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

- **`v-model`**：双向绑定当前展开的项。
- **`name`**：每个折叠项的唯一标识符。
- **`title`**：折叠项的标题。
- **`disabled`**：禁用项，无法展开/收起。

## ⚙️ **API 参考**

### **DtmCollapse Props**

| 属性        | 描述                     | 类型         | 默认值  |
| ----------- | ------------------------ | ------------ | ------- |
| `v-model`   | 绑定当前展开项的名称数组 | `NameType[]` | `[]`    |
| `accordion` | 是否开启手风琴模式       | `boolean`    | `false` |

- **`v-model`**：支持多项展开，除非开启 `accordion`。
- **`accordion`**：启用后，同一时间只允许展开一个折叠项。

---

### **DtmCollapseItem Props**

| 属性       | 描述             | 类型               | 默认值  |
| ---------- | ---------------- | ------------------ | ------- |
| `name`     | 折叠项的唯一标识 | `string \| number` | -       |
| `title`    | 折叠项的标题     | `string`           | -       |
| `disabled` | 是否禁用该折叠项 | `boolean`          | `false` |

---

### **事件**

| 事件名              | 描述                     | 参数             |
| ------------------- | ------------------------ | ---------------- |
| `update:modelValue` | v-model 绑定值更新时触发 | `NameType[]`     |
| `change`            | 折叠项状态变化时触发     | 当前展开项的数组 |

#### 示例：监听展开/收起事件

```vue
<DtmCollapse v-model="openedValue" @change="handleChange">
  <DtmCollapseItem name="1" title="项 1">内容 1</DtmCollapseItem>
  <DtmCollapseItem name="2" title="项 2">内容 2</DtmCollapseItem>
</DtmCollapse>

<script setup>
const openedValue = ref([])
const handleChange = (activeItems) => {
  console.log('当前展开项:', activeItems)
}
</script>
```

## 🎨 **自定义标题**

支持通过 `#title` 插槽自定义标题内容：

```vue
<DtmCollapse v-model="openedValue">
  <DtmCollapseItem name="custom">
    <template #title>
      <Icon icon="star" /> 自定义标题
    </template>
    <p>自定义标题的内容区域</p>
  </DtmCollapseItem>
</DtmCollapse>
```

## 🎯 **手风琴模式**

在手风琴模式下，同一时间只能展开一个折叠项：

```vue
<DtmCollapse v-model="openedValue" accordion>
  <DtmCollapseItem name="a" title="手风琴 A">内容 A</DtmCollapseItem>
  <DtmCollapseItem name="b" title="手风琴 B">内容 B</DtmCollapseItem>
  <DtmCollapseItem name="c" title="手风琴 C">内容 C</DtmCollapseItem>
</DtmCollapse>

<script setup>
const openedValue = ref(['a'])
</script>
```

## ✅ **最佳实践**

1. **手风琴模式只允许展开一个折叠项，适合导航场景。**
2. **禁用项用于不可交互的状态，增加视觉提示。**
3. **自定义标题插槽支持嵌入图标、按钮等增强可读性。**
4. **在 `change` 事件中处理展开逻辑，适配复杂业务需求。**
