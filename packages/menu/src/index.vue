<template>
  <el-menu class="el-menu-vertical-demo" :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item,index) in data">
      <el-menu-item v-if="!item.children || !item.children.length" :key="index" :index="item.index">
        <component :is="item.icon" v-if="item.icon" class="iconClass"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length>0" :key="index" :index="item.index">
        <template #title>
          <component :is="item.icon" v-if="item.icon" class="iconClass"></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(item1,index1) in item.children" :key="index1" :index="item1.index">
          <component :is="item1.icon" v-if="item1.icon" class="iconClass"></component>
          <span>{{ item1.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang='ts' setup>
import type {MenuItem} from "./types";

interface IProps {
  data: MenuItem[],
  defaultActive?: string,
  router?: boolean
}

const {data, defaultActive = '1', router = false} = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {

  .iconClass {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
}

</style>
