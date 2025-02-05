<template>
  <DtmInput v-model="password" type="password" placeholder="请输入密码" show-password />
</template>

<script setup>
import { ref } from 'vue'
import DtmInput from '@/components/Input/Input.vue'

const password = ref('')
</script>
