<template>
  <div>
    <el-button type="primary" @click="openDialog">open</el-button>
    <my-modal-form v-model:visible="visible" title="编辑用户" width="50%">
      <template #footer>
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="confirm"
        >Confirm
        </el-button
        >
      </template>
    </my-modal-form>
  </div>
</template>

<script setup lang='ts'>

import {ref} from "vue";

const visible = ref(false);
const openDialog = () => visible.value = true;
const cancel = () => {
  visible.value = false;
};
const confirm = () => {
  visible.value = false;
};
</script>

<style scoped>

</style>
