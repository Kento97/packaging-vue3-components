<template>
  <div>
    <div class="flex">
      <div>
        <my-trend text="营业额"/>
      </div>
      <div>
        <my-trend text="销售额" type="down"/>
      </div>
    </div>
    <div class="flex">
      <div>
        <my-trend downColor="grey" text="入库" type="down"/>
      </div>
      <div>
        <my-trend upColor="pink">
          出库
        </my-trend>
      </div>
    </div>
    <div class="flex">
      <div>
        <my-trend reverseColor text="销售额"></my-trend>
      </div>
      <div>
        <my-trend reverseColor text="亏损额" type="down"></my-trend>
      </div>
    </div>


  </div>
</template>

<script lang='ts' setup>
</script>

<style lang="scss" scoped>
.flex {
  display: flex;

  div {
    margin-right: 10px;
  }
}
</style>
