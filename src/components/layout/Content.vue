<template>
  <div class="content-container">
    <div class="row">
      <div class="col">
        <p>最新推出</p>
        <game-list-vue />
      </div>
      <div class="col">
        <p>即将推出</p>
        <game-list-vue />
      </div>
      <div class="col">
        <p>最近流行</p>
        <game-list-vue />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameListVue from "./GameList.vue";
export default defineComponent({
  name: "ContentVue",
  data() {
    return {
      //   categories: ["PlayStation", "Xbox", "Switch", "Steam"],
    };
  },
  //   props: {
  //     category: String,
  //   },
  components: {
    GameListVue,
  },
});
</script>


<style lang="scss" scoped>
.navbar {
  background-color: #d1e7f6;
}
</style>