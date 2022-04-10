<template>
  <div :class="{'choose-icon-dialog-body-style':isScroll}">
    <el-dialog v-model="isOpen" v-bind="$attrs">
      <template #default>
        <my-form ref="form" :options="options" label-width="100px">
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </my-form>
      </template>
      <template #footer>
        <slot :form="form" name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import {ref, watch} from "vue";
import type {FormOptions} from "@/components/form/src/types/types";
import type {FormInstance} from "element-plus";

interface IProps {
  visible: boolean,
  //表单的配置项
  options: FormOptions[],
  isScroll: boolean
}

interface IEmits {
  (e: 'update:visible', visible: boolean): void
}

const {
  visible = false, options, isScroll
} = defineProps<IProps>();
const emits = defineEmits<IEmits>();
const isOpen = ref(visible);
const form = ref<FormInstance>();
watch(() => visible, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emits('update:visible', val);
});
</script>

<style scoped>

</style>
