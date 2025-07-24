<script lang="ts" setup>
import MenuAside from './components/MenuAside.vue'
import MenuToolbar from './components/MenuToolbar.vue'
import { ref } from 'vue'

// 侧边栏可视状态
const asideVisible = ref(true)

function clickButton() {
  asideVisible.value = !asideVisible.value
}
</script>

<template>
  <el-container class="main-container">
    <el-header>
      <MenuToolbar />
    </el-header>
    <el-container class="main-container-body">
      <el-aside
        :width="asideVisible ? '240px' : '0px'"
        class="transition-all duration-300 overflow-hidden"
      >
        <el-scrollbar class="w-full" view-style="height: 100%">
          <MenuAside />
        </el-scrollbar>
      </el-aside>
      <el-scrollbar view-style="height: 100%">
        <div class="min-w-[100vw] h-full">
          <el-container class="h-full">
            <el-main class="overflow-x-auto">
              <el-button @click="clickButton" type="primary">按钮</el-button>
              你好世界!你好世界!你好世界!你好世界!你好世界!你好世界!
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </div>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<style scoped>
.main-container {
  height: 100%;
}

.main-container-body,
.el- {
  max-height: calc(100% - 60px);
}

.main-container .el-header {
  height: 60px;
  padding: 0px;
  box-shadow:
    0 2px 2px rgba(0, 0, 0, 0.06),
    0 0 4px rgba(0, 0, 0, 0.02);
  z-index: 1;
}
</style>
