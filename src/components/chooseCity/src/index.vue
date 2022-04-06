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
      <template v-if="radioVal==='按城市'">
        <div class="city">
          <!--字母区域-->
          <div v-for="(item) in Object.keys(citiesRef)" :key="item" class="city-item" @click="clickChar(item)">
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <div v-for="(value,key) in citiesRef" :key="key">
            <el-row :id="key" style="margin-bottom: 10px;">
              <el-col :span="2">
                {{ key }}:
              </el-col>
              <el-col :span="22" class="city-name">
                <div v-for="(item) in value" :key="item.id" class="city-name-item" @click="clickItem(item)">
                  {{ item.name }}
                </div>
              </el-col>
            </el-row>
          </div>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div v-for="(item) in Object.keys(provinceWithCitiesRef)" :key="item" class="province-item"
               @click="clickChar(item)">
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <div v-for="(item,index) in Object.values(provinceWithCitiesRef)" :key="index">
            <div v-for="(item1,index1) in item" :key="index1">
              <el-row :id="item1.id" style="margin-bottom: 10px;">
                <el-col :span="3">
                  {{ item1.name }}:
                </el-col>
                <el-col :span="21" class="province-name">
                  <div v-for="(item2,index2) in item1.data" :key="index2" class="province-name-item"
                       @click="clickProvinceItem(item1)">
                    {{ item2 }}
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang='ts' setup>
import {ref} from "vue";
import cities from "../lib/city";
import provinceWithCities from "../lib/province-city";

import type {CitiesType, province_city_type} from "../lib/citiesType";

interface ICityItem {
  id: number,
  spell: string,
  name: string
}

interface IProvince {
  name: string,
  data: string[]
  id?: string
}

interface IEmits {
  (e: string, value: ICityItem | IProvince): void
}

const emits = defineEmits<IEmits>();
// interface IProps {
//
// }
//
// const props = defineProps<IProps>();

const result = ref("请选择");
const visible = ref(false);
const radioVal = ref("按省份");
const selectValue = ref("");
const citiesRef = ref<CitiesType>(cities.cities);
const provinceWithCitiesRef = ref<province_city_type>(provinceWithCities);
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

function clickChar(char: string) {
  document.getElementById(char)?.scrollIntoView();
}

function clickItem(item: ICityItem) {
  result.value = item.name;
  visible.value = false;
  toggleRotateDeg();
  emits("changeCity", item);
}

function clickProvinceItem(item: IProvince) {
  result.value = item.name;
  visible.value = false;
  toggleRotateDeg();
  emits("changeProvince", item);
}

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
      background-color: lightpink;
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
    cursor: pointer;
  }
}

.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

  .province-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: lightpink;
    }
  }
}

.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .province-name-item {
    width: fit-content;
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>
