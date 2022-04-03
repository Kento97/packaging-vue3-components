<template>
  <el-container>
    <el-aside width="auto">
      <el-menu
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
          default-active="1"
      >
        <el-menu-item index="1">
          <el-icon :size="40"><alarm-clock /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <el-icon v-show="isCollapse" style="cursor: pointer;" :size="25"><expand/></el-icon>
          <el-icon v-show="!isCollapse" style="cursor: pointer;" :size="25"><fold/></el-icon>
        </span>
      </el-header>
      <el-main>
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import {RouterView} from 'vue-router'
import {ref} from "vue";

const isCollapse = ref(false)
const toggle = () => isCollapse.value = !isCollapse.value;
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
