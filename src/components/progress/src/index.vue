<template>
  <div>
    <el-progress :percentage="p" v-bind="$attrs"/>
  </div>
</template>

<script setup lang='ts'>

import {onBeforeUnmount, onMounted, ref} from "vue";

interface IProps {
  percentage: number,
  //进度条是否有动画效果
  isAnimation: boolean,
  //动画时长（毫秒）
  time: number
}

const {percentage = 0, isAnimation = false, time = 3000} = defineProps<IProps>();
const p = ref(0);

onMounted(() => {
  if (isAnimation) {
    //每加载percentage的1%需要耗时 t ms，也就是每 t ms进度涨1%
    let t = Math.ceil(time / percentage);
    let timer = setInterval(() => {
      p.value++;
      if (p.value >= percentage) {
        p.value = percentage;
        clearInterval(timer);
      }
    }, t);
  } else {
    p.value = percentage;
  }
});
</script>

<style scoped lang="scss">

</style>
