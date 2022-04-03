<template>
  <div>
    <el-button :type="type" @click="changeVisible">
      <slot>选择图标</slot>
    </el-button>
    <el-dialog :model-value="visible" :title="title" @closed="handleClosed">
      <div class="container">
        <div class="border-container" v-for="(item,index) in Object.keys(ElIcons)" :key="index"
        >
          <div class="icon-text-item">
            <div class="icon-container">
              <el-icon :size="25">
                <component :is="item" class="icon-item"></component>
              </el-icon>
            </div>
            <div class="text-container">{{ item }}</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import * as ElIcons from "@element-plus/icons-vue";

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

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .border-container {
    width: 20%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    padding: 5% 0;
    cursor: pointer;

    &:hover {
      background: linear-gradient(#a1ffce, #faffd1);
      color: mediumpurple;
    }

    .icon-text-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .text-container {
        font-size: 14px;
      }
    }
  }

}
</style>
