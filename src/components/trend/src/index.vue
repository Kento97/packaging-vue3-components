<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon v-if="type==='up'" :color="reverseColor?'gold':upColor" :size="20">
        <arrow-up/>
      </el-icon>
      <el-icon v-else :color="reverseColor?'skyblue':downColor" :size="20">
        <arrow-down/>
      </el-icon>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {useSlots} from "vue";


interface IProps {
  //标记当前趋势是上升还是下降
  type?: "up" | "down",
  //趋势显示的文字 1.父组件传递 2.插槽
  text?: string,
  upColor?: string,
  downColor?: string,
  reverseColor?: boolean
}

const {type = "up", text = "文字", upColor = 'red', downColor = 'green', reverseColor = false} = defineProps<IProps>();
const slots = useSlots();
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

}
</style>
