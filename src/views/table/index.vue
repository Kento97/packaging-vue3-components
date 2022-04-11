<template>
  <div>
    <my-table :data="tableData" :options="options">
      <template #date="{scope}">
        <el-icon>
          <timer/>
        </el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>

      <template #name="{scope}">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>

      <template #action="{scope}">
        <el-button type="primary" @click="edit(scope)">编辑</el-button>
        <el-button type="danger" plain @click="remove(scope)">移除</el-button>
      </template>
    </my-table>
  </div>
</template>

<script setup lang='ts'>
import type {TableOptions} from "@/components/table/src/types";

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];

const options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    width: 200,
    slot: "date"
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    width: 200,
    slot: 'name'
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
    width: 200
  },
  {
    label: '操作',
    align: 'center',
    action: true
  }
];

const edit = (scope: any) => {
  console.log(scope);
};
const remove = (scope: any) => {
  console.log(scope);
};
</script>

<style scoped>

</style>
