<template>
  <div style="width: 100%">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-select v-model="province" clearable placeholder="请选择省份" style="width: 100%" @change="changeProvince">
          <el-option v-for="(item) in pcaData" :key="item.code" :label="item.name" :value="item.code"/>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select v-model="city" :disabled="!province" placeholder="请选择城市" style="width: 100%" @change="changeCity">
          <el-option v-for="(item) in selectCities" :key="item.code" :label="item.name" :value="item.code"/>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select v-model="area" :disabled="!city" placeholder="请选择区域" style="width: 100%">
          <el-option v-for="(item) in selectAreas" :key="item.code" :label="item.name" :value="item.code"/>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>
import {computed, ref, watchEffect} from "vue";
import allAreas from "../lib/pca-code.json";
import type {pcaDataType} from "../lib/pca-type";

interface IResult {
  code: string,
  name: string
}

//下拉框选择省份的值
const province = ref<string>('');
//下拉框选择城市的值
const city = ref<string>('');
//下拉框选择区域的值
const area = ref<string>('');
//中国所有三级行政地区数据
const pcaData = ref<pcaDataType>(allAreas);
//抛出事件
const emit = defineEmits<{
  (e: 'change', value: Record<string, IResult>): void
}>();
//城市下拉框的所有的值
const selectCities = computed(() => {
  if (!province.value) {
    return [];
  } else {
    let cities = pcaData.value.find((item) => item.code === province.value)?.children;
    return cities ?? [];
  }
});
//区域下拉框的所有值
const selectAreas = computed(() => {
  if (!city.value) {
    return [];
  } else {
    let areas = selectCities.value.find((item) => item.code === city.value)?.children;
    return areas ?? [];
  }
});
const changeProvince = () => {
  city.value = '';
  area.value = '';
};
const changeCity = () => {
  area.value = '';
};
watchEffect(() => {
  if (area.value) {
    let provinceData: IResult = {
      code: province.value,
      name: pcaData.value.find((item) => item.code === province.value)?.name ?? ""
    };
    let cityData: IResult = {
      code: city.value,
      name: selectCities.value.find((item) => item.code === city.value)?.name ?? ''
    };
    let areaData: IResult = {
      code: area.value,
      name: selectAreas.value.find((item) => item.code === area.value)?.name ?? ''
    };
    emit("change", {
      province: provinceData,
      city: cityData,
      area: areaData
    });
  }

});
</script>

<style lang="scss" scoped>

</style>
