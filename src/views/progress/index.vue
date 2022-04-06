<template>
  <div>
    <my-progress
        :percentage="50"
        :stroke-width="24"
        :text-inside="true"
        :time="3000"
        isAnimation
        status="success"/>
    <my-progress
        :percentage="100"
        :time="3000"
        isAnimation
        status="success"
        type="circle"
    />
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped>

</style>
