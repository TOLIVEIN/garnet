<template>
  <div class="steam-container">
    <h3>{{ category }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SteamVue',
  props: {
    category: String,
  },
});
</script>
