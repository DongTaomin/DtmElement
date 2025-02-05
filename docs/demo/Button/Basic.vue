<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="button-demo">
    <!-- 默认按钮 -->
    <Button>Default</Button>

    <!-- 加载与图标 -->
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />

    <!-- 不同类型的按钮 -->
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="info">Info</Button>
    <Button type="danger">Danger</Button>

    <!-- 不同尺寸的按钮 -->
    <Button size="small" type="primary">Small</Button>
    <Button size="medium" type="primary">Medium</Button>
    <Button size="large" type="primary">Large</Button>

    <!-- 加载中按钮 -->
    <Button loading>Loading</Button>
    <Button type="success" loading>Submitting...</Button>

    <!-- 图标按钮 -->
    <Button type="primary">
      <template #icon>
        <i class="fas fa-check"></i>
      </template>
      Confirm
    </Button>

    <!-- 仅图标按钮 -->
    <Button type="primary" icon-only>
      <i class="fas fa-heart"></i>
    </Button>

    <!-- 圆形按钮 -->
    <Button type="danger" circle>
      <i class="fas fa-times"></i>
    </Button>

    <!-- 块级按钮 -->
    <Button type="primary" block>Block Button</Button>

    <!-- 禁用按钮 -->
    <Button disabled>Disabled</Button>

    <!-- 自定义颜色按钮 -->
    <Button :customColor="'#9c27b0'">Custom Purple</Button>

    <!-- 带图标的大按钮 -->
    <Button size="large" icon="arrow-up">Icon</Button>
  </div>
</template>

<style scoped>
/* 容器样式 */
.button-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 12px;
  justify-content: center;
}

/* 通用按钮样式 */
button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;
}

/* 悬停和按压效果 */
button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 不同类型的按钮 */
button[type='primary'] {
  background-color: #007bff;
  color: white;
}

button[type='primary']:hover {
  background-color: #0056b3;
}

button[type='success'] {
  background-color: #28a745;
  color: white;
}

button[type='warning'] {
  background-color: #ffc107;
  color: #212529;
}

button[type='info'] {
  background-color: #17a2b8;
  color: white;
}

button[type='danger'] {
  background-color: #dc3545;
  color: white;
}

/* 尺寸控制 */
button[size='small'] {
  padding: 6px 12px;
  font-size: 12px;
}

button[size='medium'] {
  padding: 10px 20px;
  font-size: 14px;
}

button[size='large'] {
  padding: 14px 28px;
  font-size: 16px;
}

/* 加载状态 */
button[loading] {
  position: relative;
  pointer-events: none;
  opacity: 0.6;
}

button[loading]::after {
  content: '⏳';
  position: absolute;
  right: 10px;
  animation: spin 1s linear infinite;
}

/* 图标按钮 */
button[icon-only] {
  padding: 10px;
  width: 40px;
  height: 40px;
  justify-content: center;
}

/* 圆形按钮 */
button[circle] {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 块级按钮 */
button[block] {
  display: block;
  width: 100%;
  text-align: center;
}

/* 禁用状态 */
button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* 自定义颜色按钮 */

button[customColor]:hover {
  filter: brightness(0.9);
}

/* 旋转动画 */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
