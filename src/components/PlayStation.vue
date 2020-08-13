<template>
  <div class="playstation-container">
    <h3>PlayStation页面</h3>
    <router-link to="/">Home</router-link>
    <!-- <h3>{{ category }}</h3> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayStationVue',
  props: {
    // category: String,
  },
});
</script>
