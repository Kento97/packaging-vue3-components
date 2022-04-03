<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" height="125" src="@/assets/logo.svg" width="125"/>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>

</template>

<style>
@import '@/assets/base.css';
svg{
  width: 1em;
  height: 1em;
}
</style>
