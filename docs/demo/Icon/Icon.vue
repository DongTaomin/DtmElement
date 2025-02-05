<template>
  <div class="icon-demo-container">
    <!-- 基本使用 -->
    <div class="icon-item">
      <DtmIcon icon="coffee" />
      <p>咖啡图标</p>
    </div>

    <!-- 带颜色和类型 -->
    <div class="icon-item">
      <DtmIcon icon="check-circle" type="success" color="green" />
      <p>成功图标</p>
    </div>

    <!-- 自定义大小 -->
    <div class="icon-item">
      <DtmIcon icon="exclamation-triangle" size="2x" color="#ff9900" />
      <p>警告图标</p>
    </div>

    <!-- 动画效果：旋转 -->
    <div class="icon-item">
      <DtmIcon icon="sync" spin color="blue" />
      <p>旋转图标</p>
    </div>

    <!-- 动画效果：跳动 -->
    <div class="icon-item">
      <DtmIcon icon="heart" beat color="red" />
      <p>跳动的心</p>
    </div>

    <!-- 翻转与旋转 -->
    <div class="icon-item">
      <DtmIcon icon="arrow-right" flip="horizontal" rotation="90" />
      <p>翻转箭头</p>
    </div>

    <!-- 结合 slot 使用 -->
    <button class="icon-button">
      <DtmIcon icon="arrow-left" />
      返回
    </button>
  </div>
</template>

<script setup>
import DtmIcon from '@/components/Icon/Icon.vue'
</script>

<style scoped>
/* 容器样式 */
.icon-demo-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
}

/* 图标单元样式 */
.icon-item {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
}

.icon-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 图标下方的文本 */
.icon-item p {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}

/* 按钮样式 */
.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 14px;
}

.icon-button:hover {
  background-color: #0056b3;
}
</style>
