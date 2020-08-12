<template>
  <div class="switch-container">
    <h3>{{ category }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitchVue',
  props: {
    category: String,
  },
});
</script>
