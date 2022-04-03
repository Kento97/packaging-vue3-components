<template>
  <div class="side-container">
    <el-menu
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        default-active="1"
    >
      <el-menu-item index="1">
        <el-icon :size="40">
          <alarm-clock/>
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon :size="40">
          <alarm-clock/>
        </el-icon>
        <template #title>图标选择器</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon :size="40">
          <alarm-clock/>
        </el-icon>
        <template #title>趋势标记</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang='ts' setup>
interface IProps {
  isCollapse: boolean
}

//解构props并且初始化，需要开启响应式语法糖 reactivityTransform: true
const {isCollapse = false} = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.side-container {
  height: 100%;
}
</style>
