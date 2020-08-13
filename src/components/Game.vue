<template>
  <div class="game-container">
    <h3>游戏页面</h3>
    <router-link to="/">Home</router-link>

    <div class="card-columns">
      <div class="card" v-for="n in 20" :key="n">
        <div class="row">
          <div class="col-4">
            <img src="../assets/DarkSouls.jpg" class="card-img-top" alt />
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">Dark Souls</h5>
              <p class="card-text">目前最喜欢的游戏之一.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h3>{{ category }}</h3> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { GetGame } from "../api/game";

export default defineComponent({
  name: "GameVue",
  setup() {
    const games = ref([]);
    // const getGames = async () => {
    //   await GetGame()?.then((res) => {
    //     games.value = res.data;
    //     console.log(`games: ${games.value}`);
    //   });
    // };

    return {
      games,
    //   getGames,
    };
  },
  data() {
    return {
      //   games: [''],
    };
  },
  mounted() {
    GetGame()?.then((res) => {
      this.games = res.data;
      console.log(`games: ${this.games}`);
    });
  },
  props: {
    // category: String,
  },
});
</script>


<style lang="scss" scoped>
.card-columns {
  column-count: 4;
  //   @include media-breakpoint-only(lg) {
  //     column-count: 4;
  //   }
  //   @include media-breakpoint-only(xl) {
  //     column-count: 5;
  //   }
}
</style>