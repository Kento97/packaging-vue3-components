<template>
  <div style="display: flex;">
    <div style="margin-right: 20px;">
      <el-time-select
          v-model="startTime"
          :end="startTimeEnd"
          :max-time="endTime"
          :placeholder="startPlaceholder"
          :start="startTimeInit"
          :step="startStep"
          clearable
          v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-time-select
          v-model="endTime"
          :end="endTimeEnd"
          :min-time="startTime"
          :placeholder="endPlaceholder"
          :start="endTimeInit"
          :step="endStep"
          :disabled="endTimeDisabled"
          v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang='ts' setup>

import {ref, watch} from "vue";

interface IProps {
  //开始时间的占位符
  startPlaceholder?: string,
  //开始时间的开始选择
  startTimeInit?: string,
  //开始时间的步进
  startStep?: string,
  //开始时间的结束选择
  startTimeEnd?: string

  //结束时间的占位符
  endPlaceholder?: string,
  //结束时间的开始选择
  endTimeInit?: string,
  //结束时间的步进
  endStep?: string,
  //结束时间的结束选择
  endTimeEnd?: string
}

const {
  startPlaceholder = '请选择开始时间',
  startTimeInit = '08:00',
  startStep = '00:30',
  startTimeEnd = '24:00',
  endPlaceholder = '请选择结束时间',
  endTimeInit = '08:00',
  endStep = '00:30',
  endTimeEnd = '24:00'
} = defineProps<IProps>();

interface IEmits {
  (e: string, value: string | endValue): void
}

interface endValue {
  startTime: string,
  endTime: string
}

const emits = defineEmits<IEmits>();
const startTime = ref('');
const endTime = ref('');
const endTimeDisabled = ref(true);
watch(() => startTime.value, (val: string) => {
  if (val === '') {
    endTime.value = '';
    endTimeDisabled.value = true;
  } else {
    endTimeDisabled.value = false;
    emits('startChange', val);
  }
});

watch(() => endTime.value, (val: string) => {
  if (val) {
    emits('endChange', {
      startTime: startTime.value,
      endTime: val
    });
  }
});
</script>

<style scoped>

</style>
