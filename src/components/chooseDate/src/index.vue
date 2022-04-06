<template>
  <div style="display: flex;">
    <div style="margin-right: 10px;">
      <el-date-picker
          v-model="startDate"
          :disabled-date="startDisabledDate"
          :placeholder="startPlaceholder"
          type="date"
          v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-date-picker
          v-model="endDate"
          :disabled='endDateDisabled'
          :disabled-date="endDisabledDate"
          :placeholder=endPlaceholder
          type="date"
          v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang='ts' setup>
import {ref, watch} from "vue";

interface IProps {
  startPlaceholder?: string,
  endPlaceholder?: string,
  //是否禁用选择今天之前得日期
  disableToday?: boolean
}

const {startPlaceholder = '请选择开始日期', endPlaceholder = '请选择结束日期', disableToday = true} = defineProps<IProps>();

interface IEmits {
  (e: string, value: Date | IEndChangeVal): void
}

interface IEndChangeVal {
  startDate: Date,
  endDate: Date
}

const emits = defineEmits<IEmits>();
//开始日期
const startDate = ref<Date | null>(null);
//结束日期
const endDate = ref<Date | null>(null);
//控制结束日期的禁用状态
const endDateDisabled = ref(true);
//禁用开始日期的函数
const startDisabledDate = (time: Date) => {
  if (disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
  }
};
//监听开始的日期
watch(() => startDate.value, (val: Date | null) => {
  if (!val) {
    endDateDisabled.value = true;
    endDate.value = null;
  } else {
    endDateDisabled.value = false;
    emits('startChange', val);
  }
});

const endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
  }
};
//监听结束日期
watch(() => endDate.value, (val: Date | null) => {
  if (val && startDate.value) {
    emits("endChange", {
      startDate: startDate.value,
      endDate: val
    });
  }
});
</script>

<style scoped>

</style>
