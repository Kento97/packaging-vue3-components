<template>
  <el-popover
      v-model:visible="visible"
      :width="500"
      placement="bottom-start"
  >
    <template #reference>
      <div class="result" @click="togglePopover">
        <div>{{ result }}</div>
        <div class="icon__class rotate">
          <el-icon :size="20">
            <arrow-down/>
          </el-icon>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioVal" size="default">
            <el-radio-button label="按城市"/>
            <el-radio-button label="按省份"/>
          </el-radio-group>
        </el-col>
        <el-col :offset="2" :span="14">
          <el-select v-model="selectValue" filterable no-match-text="没有相关信息" placeholder="请选择城市">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <div class="city">
        <div v-for="(item) in Object.keys(citiesRef)" :key="item" class="city-item">
          {{ item }}
        </div>
      </div>
      <el-scrollbar max-height="300px">
        <div v-for="(value,key) in citiesRef" :key="key">
          <el-row style="margin-bottom: 10px;">
            <el-col :span="2">
              {{ key }}:
            </el-col>
            <el-col :span="22" class="city-name">
              <div v-for="(item) in value" :key="item.id" class="city-name-item">
                {{ item.name }}
              </div>
            </el-col>
          </el-row>
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script lang='ts' setup>
import {ref} from "vue";
import cities from "../lib/city";
import type {CitiesType} from "../lib/citiesType";

// interface IProps {
//
// }
//
// const props = defineProps<IProps>();

const result = ref("请选择");
const visible = ref(false);
const radioVal = ref("按城市");
const selectValue = ref("");
const citiesRef = ref<CitiesType>(cities.cities);
const options = ref([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]);
const rotateDeg = ref<"0deg" | "180deg">("0deg");

function togglePopover() {
  visible.value = !visible.value;
  toggleRotateDeg();
}

function toggleRotateDeg() {
  rotateDeg.value === '0deg' ? rotateDeg.value = '180deg' : rotateDeg.value = '0deg';
}
</script>

<style lang="scss" scoped>
$rotateDeg: v-bind('rotateDeg');
.rotate {
  transform: rotate($rotateDeg);
}

.result {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-left: 10%;
  cursor: pointer;

  .icon__class {
    display: flex;
    align-items: center;
    transition: all 0.25s linear;
  }
}

.container {
  padding: 6px;
}

.city {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

  .city-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: lightskyblue;
    }
  }
}

.city-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .city-name-item {
    width: fit-content;
    margin-right: 6px;
    margin-bottom: 6px;
  }
}
</style>
