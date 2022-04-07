<template>
  <el-form v-if="model" :model="model" :rules="rules" :validate-on-rule-change="false" v-bind="$attrs">
    <template v-for="(item,index) in options">
      <el-form-item
          v-if="!item.children || item.children.length===0"
          :key="index"
          :label="item.label"
          :prop="item.prop">
        <component
            :is="`el-${item.type}`"
            v-model="model[item.prop]"
            v-bind="item.attrs"
        ></component>
      </el-form-item>
      <el-form-item
          v-if="item.children && item.children.length!==0"
          :key="index"
          :label="item.label"
          :prop="item.prop">
        <component
            :is="`el-${item.type}`"
            v-model="model[item.prop]"
            v-bind="item.attrs"
        >
          <component
              :is="`el-${child.type}`"
              v-for="(child,indey) in item.children"
              :key="indey"
              :label="child.label"
              :value="child.value"
          />
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang='ts' setup>

import type {FormOptions} from "@/components/form/src/types/types";
import {ref, watch} from "vue";
import cloneDeep from "lodash/cloneDeep";
import type {RuleItem} from "@/components/form/src/types/rule";

interface IProps {
  //表单的配置项
  options: FormOptions[]
}

const {options} = defineProps<IProps>();

const model = ref<Record<string, any>>();
const rules = ref<Record<string, RuleItem[]>>();
const gender = ref<string>("男");
initForm();

function initForm() {
  if (options && options.length) {
    const m: Record<string, string> = {};
    const r: Record<string, RuleItem[]> = {};
    options.forEach((item: FormOptions) => {
      m[item.prop as string] = item.value;
      r[item.prop as string] = item.rules as RuleItem[];
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
}

//监听父组件传递进来的 options
watch(() => options, (val) => {
  initForm();
}, {deep: true});
</script>

<style scoped>

</style>
