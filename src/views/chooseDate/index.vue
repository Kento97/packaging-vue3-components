<template>
  <div>
    <choose-date @startChange="startChange" @endChange="endChange" :startOptions="startOptions"
                 :endOptions="endOptions" :disableToday="true"/>
  </div>
</template>

<script setup lang='ts'>
import {ref} from "vue";

interface IEndChangeVal {
  startDate: Date,
  endDate: Date
}

const startOptions = ref({
  size: 'small',
  editable: false
});
const endOptions = ref({
  size: 'large',
  editable: false
});

function startChange(val: Date) {
  console.log(val);
}

function endChange(val: IEndChangeVal) {
  console.log(val);
}

</script>

<style scoped>

</style>
