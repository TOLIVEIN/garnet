<template>
  <div class="aside-container row">
    <!-- <h3>{{ category }}</h3> -->
    <ul class="nav flex-column nav-pills col-8">
      <li class="nav-item" v-for="(category, index) in categories" :key="index">
        <a class="nav-link" href="#" data-toggle="pill">{{ category }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsideVue",
  data() {
    return {
      categories: ["PlayStation", "Xbox", "Switch", "Steam"],
    };
  },
  //   props: {
  //     category: String,
  //   },
});
</script>
