<template>
  <div>
    <el-button :type="type" @click="changeVisible">
      <slot>选择图标</slot>
    </el-button>
    <el-dialog :model-value="visible" :title="title" @closed="handleClosed">
      111
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
interface IProps {
  //弹框的标题
  title: string,
  //控制弹框的显示与隐藏
  visible: boolean,
  //el-button的颜色
  type: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text',
  //改变弹框的可视状态（取反visible的值）
  changeVisible: () => void
}

const {changeVisible, title = "选择图标", visible = false, type = "primary"} = defineProps<IProps>()
const handleClosed = () => changeVisible();
</script>

<style scoped>

</style>
