<template>
  <DtmInput v-model="text" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
import DtmInput from '@/components/Input/Input.vue'

const text = ref('')
</script>
