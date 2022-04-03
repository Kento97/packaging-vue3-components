<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :isCollapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header :isCollapse="isCollapse" :toggle="toggle"/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import {ref} from "vue";
import NavSide from "@/components/navSide/index.vue";
import NavHeader from "@/components/navHeader/index.vue";

const isCollapse = ref(false)
const toggle = () => isCollapse.value = !isCollapse.value;
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
