<template>
  <DtmDropdown :menu-options="menuOptions" trigger="click">
    <button class="dropdown-trigger">Click me to open dropdown</button>
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

<style scoped>
/* 样式：按钮 */
.dropdown-trigger {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.dropdown-trigger:hover {
  background-color: #45a049;
}

/* 样式：下拉菜单 */
.vk-dropdown__menu {
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
}

.vk-dropdown__item {
  padding: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.vk-dropdown__item:hover {
  background-color: #f1f1f1;
}

.vk-dropdown__item.is-disabled {
  color: #ccc;
  cursor: not-allowed;
}

.vk-dropdown__item.is-divided {
  border-top: 1px solid #ddd;
}

/* 分隔符样式 */
.divided-placeholder {
  height: 1px;
  background-color: #ddd;
  margin: 5px 0;
}
</style>
