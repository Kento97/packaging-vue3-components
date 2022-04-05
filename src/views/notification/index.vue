<template>
  <div>
    <my-notification :size="50" :value="50" iconName="Bell">
      <template #default>
        <my-list :actions="actions" :list="list" @clickAction="clickAction" @clickItem="clickItem"></my-list>
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

<script lang='ts' setup>
import {list, actions} from "./data";
import type {ListItem, ActionOptions} from "@/components/list/src/type";

function clickItem(val: { item: ListItem, index: number }) {
  console.log(val);
}

function clickAction(val: { action: ActionOptions, i: number }) {
  console.log(val);
}
</script>

<style scoped>

</style>
