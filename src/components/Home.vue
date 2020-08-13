<template>
  <div class="home-container">
    <!-- <h3>首页</h3> -->
    <!-- <h3>{{ message }}</h3> -->
    <carousel-vue />
    <content-vue />
  </div>
  <router-link to="/playstation">PlayStation</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarouselVue from "./layout/Carousel.vue";
import ContentVue from "./layout/Content.vue";
export default defineComponent({
  name: "HomeVue",
  props: {
    // message: String,
  },
  components: {
    CarouselVue,
    ContentVue,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
} */
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
