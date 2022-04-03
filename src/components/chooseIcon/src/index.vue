<template>
  <div>
    <el-button :type="type" @click="changeVisible">
      <slot>选择图标</slot>
    </el-button>
    <div class="choose-icon-dialog-body-style">
      <el-dialog :model-value="visible" :title="title" @closed="handleClosed">
        <div class="container">
          <div v-for="(item,index) in Object.keys(ElIcons)" :key="index" :title="item"
               class="border-container" @click="handleCopy(item)">
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
  </div>
</template>

<script lang='ts' setup>
import * as ElIcons from "@element-plus/icons-vue";
import {useClipboard} from '@vueuse/core'
import {toLine} from "@/utils";
import {ElMessage} from 'element-plus'

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
//复制功能
const {isSupported, copy} = useClipboard()
const handleCopy = (content: string) => {
  if (!isSupported) {
    ElMessage({
      type: 'error',
      message: "Your browser does not support Clipboard API",
      center: true,
      duration: 1500
    })
    return;
  }
  const preCopiedStr = `<el-icon><${toLine(content)} /></el-icon>`
  copy(preCopiedStr).then(() => {
    ElMessage({
      type: 'success',
      message: "复制成功",
      center: true,
      duration: 1000
    })
  })
}
</script>

<style lang="scss" scoped>
//以下深度选择器也可以实现修改组件样式，本次采取命名空间来实现
//:deep(.el-dialog__body) {
//  height: 550px;
//  overflow-y: scroll;
//
//  &::-webkit-scrollbar {
//    width: 10px;
//    height: 10px;
//    /**/
//  }
//
//  &::-webkit-scrollbar-track {
//    background: rgb(239, 239, 239);
//    border-radius: 2px;
//  }
//
//  &::-webkit-scrollbar-thumb {
//    background: #bfbfbf;
//    border-radius: 10px;
//  }
//
//  &::-webkit-scrollbar-thumb:hover {
//    background: #333;
//  }
//
//  &::-webkit-scrollbar-corner {
//    background: #179a16;
//  }
//
//}

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
