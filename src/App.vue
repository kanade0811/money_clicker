<script setup>
import Field from './components/field.vue'
import Tool from './components/tool.vue'
</script>

<template>
  <div class="app">
    <Tool />
    <Field />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
