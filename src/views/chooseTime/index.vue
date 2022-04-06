<template>
  <div>
    <choose-time
        :endOptions="endOptions"
        :startOptions="startOptions"
        @endChange="endChange"
        @startChange="startChange"
    ></choose-time>
  </div>
</template>

<script lang='ts' setup>

import {ref} from "vue";

interface endValue {
  startTime: string,
  endTime: string
}

const startChange = (val: string) => {
  console.log("开始时间", val);
};
const endChange = (val: endValue) => {
  console.log('开始和结束', val);
};
const startOptions = ref({
  size: 'small',
  effect: 'dark'
});
const endOptions = ref({
  size: 'large',
  effect: 'dark'
});
</script>

<style scoped>

</style>
