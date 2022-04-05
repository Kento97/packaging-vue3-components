<template>
  <div style="display: flex;justify-content: space-around;">
    <div style="width: 200px;">
      <my-menu :data="data1" :router="false" active-text-color="pink" defaultActive="2"></my-menu>
    </div>
    <div style="width: 300px;">
      <my-infinite-menu :data="data2" :router="false" active-text-color="pink" defaultActive="/"></my-infinite-menu>
    </div>
  </div>
</template>

<script lang='ts' setup>
import type {MenuItem} from "@/components/menu/src/types";
import {useRouter} from "vue-router";

const data1: MenuItem[] = [
  {
    name: "导航1",
    index: '1',
    icon: "IconMenu"
  },
  {
    name: "导航2",
    index: '2',
    icon: "IconMenu"
  },
  {
    name: "导航3",
    index: '3',
    icon: "IconMenu",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "IceTea"
      }
    ]
  },
];

const router = useRouter();
const [defaultLayout] = router.options.routes;
const routeList = defaultLayout.children;
const data2 = [
  {
    "path": "/",
    "name": "home",
    "component": {
      "__hmrId": "fae5bece",
      "__file": "D:/Workspace/packaging-vue3-components/src/views/Home.vue"
    },
    "meta": {
      "label": "首页",
      "icon": "IconMenu"
    },
    "children": []
  },
  {
    "path": "/chooseIcon",
    "name": "chooseIcon",
    "meta": {
      "label": "图标选择",
      "icon": "Bell"
    },
    "children": []
  },
  {
    "path": "/chooseArea",
    "name": "chooseArea",
    "meta": {
      "label": "省市区选择",
      "icon": "Apple"
    },
    "children": []
  },
  {
    "path": "/trend",
    "name": "trend",
    "meta": {
      "label": "趋势标记",
      "icon": "Cherry"
    },
    "children": []
  },
  {
    "path": "/notification",
    "name": "notification",
    "meta": {
      "label": "通知菜单",
      "icon": "Coffee"
    },
    "children": []
  },
  {
    "path": "/menu2",
    "name": "menu",
    "meta": {
      "label": "导航菜单",
    },
    "children": [
      {
        "path": "/menuTest",
        "name": "menuTest",
        "meta": {
          "label": "导航菜单层级测试",
        },
        "children": [
          {
            "path": "/menu",
            "name": "menuTest2",
            "meta": {
              "label": "导航菜单层级测试2",
              "icon": "Cpu"
            },
            "children": []
          }
        ]
      }
    ]
  }
];
</script>

<style lang="scss" scoped>
</style>
