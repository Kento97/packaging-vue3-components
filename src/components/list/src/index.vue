<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item,index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div v-for="(item1,index1) in item.content" :key="index1" class="container" @click="clickItem(item1,index1)">
            <div v-if="item1.avatar" class="avatar">
              <el-avatar :src="item1.avatar" alt="avatar" size="default" @error="errorHandler">
                <img
                    alt="loadFailedImg"
                    src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" :type="item1.tagType" size="small">{{ item1.tag }}</el-tag>
              </div>
              <div v-if="item1.time">{{ item1.time }}</div>
              <div v-if="item1.desc">{{ item1.desc }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions">
          <div v-for="(action,i) in actions" :key="i" class="a-item" @click="clickAction(action,i)">
            <div class="a-icon">
              <component :is="action.icon"/>
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang='ts' setup>
import type {ListItem, ListOptions, ActionOptions} from "./type";


interface IProps {
  list: ListOptions[],
  actions?: ActionOptions[],
}

interface IEmits {
  (e: string, value: Record<string, number | ListItem | ActionOptions>): void
}

const {list, actions} = defineProps<IProps>();
const emits = defineEmits<IEmits>();
const errorHandler = () => true;
const clickItem = (item: ListItem, index: number) => {
  emits('clickItem', {item, index});
};
const clickAction = (action: ActionOptions, i: number) => {
  emits('clickAction', {action, i});
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background-color: #EBEEF5;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .avatar {
    flex: 1;
    margin: 10px auto;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    flex: 3;
    cursor: pointer;
  }
}

.actions {
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--el-border-color);
  margin-top: 10px;

  .a-item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: #2983bb;
    }

    .a-icon {
      width: 15px;
      height: 15px;
    }

    .a-text {
      margin-left: 5px;
    }
  }
}
</style>
