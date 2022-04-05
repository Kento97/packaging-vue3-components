<template>
  <div class="header">
    <span @click="toggle">
      <el-icon v-show="isCollapse" :size="25" style="cursor: pointer;"><expand/></el-icon>
      <el-icon v-show="!isCollapse" :size="25" style="cursor: pointer;"><fold/></el-icon>
    </span>
  </div>
</template>

<script lang='ts' setup>
interface IProps {
  isCollapse: boolean,
  toggle: () => void
}

const {toggle, isCollapse = false} = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
