<template>
  <div>
    <choose-icon :type="buttonType" :visible="visible" title="选择图标" :changeVisible="changeVisible">
      选择图标
    </choose-icon>
  </div>
</template>

<script lang='ts' setup>
import ChooseIcon from "@/components/chooseIcon/src/index.vue";
import {ref} from "vue";

const visible = ref(false)
const buttonType = ref<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>("warning")
const changeVisible = () => visible.value = !visible.value
</script>

<style lang="scss" scoped>

</style>
