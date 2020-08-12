<template>
  <div class="xbox-container">
    <h3>{{ category }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'XboxVue',
  props: {
    category: String,
  },
});
</script>
