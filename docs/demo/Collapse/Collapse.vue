<template>
  <div class="collapse-container">
    <DtmCollapse v-model="openedValue">
      <DtmCollapseItem name="a" title="Title A">
        <h1 class="headline">Headline Title</h1>
        <div class="content">This is content A aaa</div>
      </DtmCollapseItem>
      <DtmCollapseItem name="b" title="Title B">
        <div class="content">This is BBBBB test</div>
      </DtmCollapseItem>
      <DtmCollapseItem name="c" title="Disabled Title" disabled>
        <div class="content">This is CCCC test</div>
      </DtmCollapseItem>
    </DtmCollapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DtmCollapse from '@/components/Collapse/Collapse.vue'
import DtmCollapseItem from '@/components/Collapse/CollapseItem.vue'

const openedValue = ref(['a'])
</script>

<style scoped>
.collapse-container {
  max-width: 600px;
  margin: 20px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.headline {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.content {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 4px;
}

.vk-collapse-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.vk-collapse-item__header {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  background: #f0f0f0;
  border-radius: 4px;
  transition: background 0.3s;
}

.vk-collapse-item__header:hover {
  background: #e0e0e0;
}

.vk-collapse-item.is-disabled .vk-collapse-item__header {
  color: #bbb;
  cursor: not-allowed;
  background: #f5f5f5;
}
</style>
