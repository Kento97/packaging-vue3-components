<template>
  <div>
    <choose-icon :changeVisible="changeVisible" :notVisible="notVisible" :type="buttonType" :visible="visible"
                 title="选择图标">
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
const notVisible = () => visible.value = false;
</script>

<style lang="scss" scoped>

</style>
