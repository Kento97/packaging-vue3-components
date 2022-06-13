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
          <el-select
              v-model="selectValue"
              :filter-method="filterMethod"
              filterable
              no-match-text="没有相关信息"
              placeholder="请搜索城市"
              @change="chooseSelectItem"
          >
            <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.id"
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
                       @click="clickProvinceItem(item2)">
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
import {onMounted, ref} from "vue";
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
  (e: string, value: ICityItem | string): void
}

const emits = defineEmits<IEmits>();
const result = ref("请选择");
const visible = ref(false);
const radioVal = ref<'按省份' | '按城市'>("按城市");
const selectValue = ref("");
const citiesRef = ref<CitiesType>(cities.cities);
const provinceWithCitiesRef = ref<province_city_type>(provinceWithCities);
const rotateDeg = ref<"0deg" | "180deg">("0deg");
const options = ref<ICityItem[]>();
let value: ICityItem[] = [];
onMounted(() => {
  //获取下拉框待过滤的城市数据，非ref
  value = getSelectOptions();
});


function chooseSelectItem(val: number) {
  const targetCityName = value.find((item) => {
    return item.id === val;
  });
  if (targetCityName) result.value = targetCityName.name;
  togglePopover();
  if (radioVal.value === "按城市" && targetCityName) {
    emits('changeCity', targetCityName);
  } else {
    targetCityName && emits('changeCity', targetCityName.name);
  }
}

function filterMethod(val: string) {
  if (!val) {
    getSelectOptions();
  } else {
    if (radioVal.value === "按城市") {
      //中文和拼音一起过滤
      options.value = value?.filter((item) => item.name.includes(val) || item.spell.includes(val));
    } else {
      //中文过滤
      options.value = value?.filter((item) => item.name.includes(val));
    }
  }
}

function getSelectOptions() {
  options.value = Object.values(cities.cities).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []);
  return options.value;
}

function clickChar(char: string) {
  document.getElementById(char)?.scrollIntoView();
}

function clickItem(item: ICityItem) {
  result.value = item.name;
  togglePopover();
  emits("changeCity", item);
}

function clickProvinceItem(item: string) {
  result.value = item;
  togglePopover();
  emits("changeProvince", item);
}

function togglePopover() {
  visible.value = !visible.value;
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
