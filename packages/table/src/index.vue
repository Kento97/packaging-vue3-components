<template>
  <el-table :data="data">
    <template v-for="(item,index) in tableOptions">
      <el-table-column
          v-if="!item.slot"
          :key="index"
          :align="item.align"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
      >
      </el-table-column>
      <el-table-column
          v-if="item.slot"
          :key="index"
          :align="item.align"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
      >
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column
        :align="actionOptions.align"
        :label="actionOptions.label"
        :width="actionOptions.width"
    >
      <template #default="scope">
        <slot :scope="scope" name="action"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang='ts' setup>

import type {TableOptions} from "@/components/table/src/types";
import {computed} from "vue";

interface IProps {
  options: TableOptions[],
  data: any[]
}

const {options, data} = defineProps<IProps>();
//过滤操作选项之后的配置
const tableOptions = computed(() => options.filter((item) => !item.action));
//找出操作项的配置
const actionOptions = computed(() => options.find((item) => item.action));
</script>

<style scoped>

</style>
