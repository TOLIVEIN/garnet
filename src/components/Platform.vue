<template>
  <div class="platform-container">
    <h3>平台页面</h3>
    <router-link to="/">Home</router-link>
    <!-- <h3>{{ category }}</h3> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlatformVue',
  props: {
    // category: String,
  },
});
</script>
