<template>
  <div class="area-container">
    <choose-area @change="changeArea"></choose-area>
  </div>
</template>

<script lang='ts' setup>

interface IResult {
  code: string,
  name: string
}

const changeArea = (val: Record<string, IResult>) => {
  console.log(val);
};
</script>

<style lang="scss" scoped>
.area-container {
  width: 800px;
}
</style>
