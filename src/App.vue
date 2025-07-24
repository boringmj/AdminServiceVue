<script lang="ts" setup>
import MenuVertical from './components/MenuVertical.vue'
</script>

<template>
  <el-container id="main-container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <MenuVertical />
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
#main-container {
  height: 100%;
  overflow: auto;
}

.el-header,
.el-footer {
  background-color: #ebedf0;
  color: #303133;
  text-align: center;
  line-height: 60px;
}
</style>
