<template>
  <el-popover
      placement="bottom"
      :width="300"
      trigger="click"
      content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <component :is="iconName" class="icon__item"></component>
      </el-badge>
    </template>
    <template #default>
      <slot>这是一段内容</slot>
    </template>
  </el-popover>
</template>

<script lang='ts' setup>

import {computed} from "vue";

interface IProps {
  iconName: string,
  //icon的长和宽,单位px
  size: number,
  //通知数量
  value?: number | string,
  //最大值
  max?: number,
  //是否显示小圆点
  isDot?: boolean
}

const {iconName = 'Bell', size = 50, value = '', isDot = false, max = 99} = defineProps<IProps>();
const iconSize = computed(() => `${size}px`);
</script>

<style lang="scss" scoped>
.icon__item {
  width: v-bind('iconSize');
  height: v-bind('iconSize');
  cursor: pointer;
}
</style>
