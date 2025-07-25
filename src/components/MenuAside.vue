<template>
  <el-menu class="el-menu-vertical" :default-active="activeKey" :router="true">
    <el-sub-menu index="home">
      <template #title>
        <el-icon><HomeFilled /></el-icon>
        <span>主页</span>
      </template>
      <el-menu-item route="/home" index="home-console">控制台</el-menu-item>
      <el-menu-item route="/home/user" index="home-user">用户信息</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeKey = ref('home-console')

// 响应式监听路由变化
watch(
  () => route.meta.activeName,
  (newVal) => {
    if (typeof newVal === 'string') {
      activeKey.value = newVal
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.el-menu-vertical {
  min-height: 100%;
}
</style>
