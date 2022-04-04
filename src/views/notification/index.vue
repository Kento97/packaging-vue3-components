<template>
  <div>
    <my-notification iconName="Bell" :size="50" :value="50">
      <template #default>
        <my-list :list="list" :actions="actions"></my-list>
      </template>
    </my-notification>
    <br>
    <br>
    <!--    <my-notification iconName="Bell" :size="50" :value="50" :max="30"></my-notification>-->
    <!--    <br>-->
    <!--    <br>-->
    <!--    <my-notification iconName="Bell" :size="50" :isDot="true"></my-notification>-->
    <!--    <br>-->
    <!--    <br>-->
    <!--    <my-notification iconName="ChatRound" :size="50" :value="50"></my-notification>-->
  </div>
</template>

<script setup lang='ts'>
import {list, actions} from "./data";

</script>

<style scoped>

</style>
