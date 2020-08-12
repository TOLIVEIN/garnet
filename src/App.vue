<template>
  <div id="app">
    <h1>Garnet</h1>
    <home-vue message="Vue 3 + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeVue from './components/Home.vue';
export default defineComponent({
  name: 'App',
  components: {
    HomeVue
  }
});
</script>

