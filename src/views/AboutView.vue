<template>
  <div class="about-container">
    <h1>About with SCSS</h1>
    <p>This is the about page with SCSS</p>
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang="scss" scoped>
.about-container {
  h1 {
    color: orange;
    font-size: $font-size-titles;
    font-family: "JetBrains Mono", monospace;
  }

  p {
    color: deepskyblue;
    font-family: "JetBrains Mono", monospace;
  }
}
</style>
