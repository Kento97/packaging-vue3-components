<template>
  <el-form :model="model" :rules="rules" v-bind="$attrs" :validate-on-rule-change="false">
    <el-form-item v-for="(item,index) in options" :key="index" :label="item.label" :prop="item.prop">
      <component
          :is="`el-${item.type}`"
          v-bind="item.attrs"
          v-model="model[item.prop]"
      ></component>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>

import type {FormOptions} from "@/components/form/src/types/types";
import {ref} from "vue";
import cloneDeep from "lodash/cloneDeep";
import type {RuleItem} from "@/components/form/src/types/rule";

interface IProps {
  //表单的配置项
  options: FormOptions[]
}

const {options} = defineProps<IProps>();

const model = ref<Record<string, string>>();
const rules = ref<Record<string, RuleItem[]>>();
const m: Record<string, string> = {};
const r: Record<string, RuleItem[]> = {};
options.forEach((item: FormOptions) => {
  m[item.prop as string] = item.value;
  r[item.prop as string] = item.rules as RuleItem[];
});
model.value = cloneDeep(m);
rules.value = cloneDeep(r);

</script>

<style scoped>

</style>
