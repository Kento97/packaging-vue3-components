<template>
  <div>
    <el-dialog v-model="isOpen" v-bind="$attrs">
      <template #default>
        表单
      </template>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import {ref, watch} from "vue";

interface IProps {
  visible: boolean
}

interface IEmits {
  (e: 'update:visible', visible: boolean): void
}

const {visible = false} = defineProps<IProps>();
const emits = defineEmits<IEmits>();
const isOpen = ref(visible);

watch(() => visible, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emits('update:visible', val);
});
</script>

<style scoped>

</style>
