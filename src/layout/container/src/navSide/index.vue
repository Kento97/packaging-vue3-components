<template>
  <div style="width: 250px;height: 100%;">
    <my-infinite-menu
        :data="routeList"
        :defaultActive="$route.path"
        :isCollapse="isCollapse"
        :router="true"
        active-text-color="pink"
        background-color="#F2F6FC"
    ></my-infinite-menu>
  </div>

</template>

<script lang='ts' setup>
import {useRouter} from "vue-router";

interface IProps {
  isCollapse: boolean
}

//解构props并且初始化，需要开启响应式语法糖 reactivityTransform: true
const {isCollapse = false} = defineProps<IProps>();
const router = useRouter();
const [defaultLayout] = router.options.routes;
const routeList = defaultLayout.children;
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.side-container {
  height: 100%;
}
</style>
