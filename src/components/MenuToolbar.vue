<script lang="ts" setup></script>

<template>
  <div class="menu-toolbar w-full h-full">
    <div>
      <img
        style="height: 40px"
        src="https://element-plus.org/images/element-plus-logo.svg"
        alt="Element logo"
      />
    </div>
    <div>用户信息</div>
  </div>
</template>

<style scoped>
.menu-toolbar {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-toolbar > div {
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
