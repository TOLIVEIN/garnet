<template>
  <div class="game-container">
    <h3>游戏页面</h3>
    <router-link to="/">Home</router-link>
    <!-- <div>{{games}}</div> -->

    <div class="card-columns">
      <div class="card" v-for="(game, index) in games" :key="index">
        <!-- <div class="row">
        <div class="col-4">-->
        <img src="../assets/DarkSouls.jpg" class="card-img-top" alt />
        <!-- </div> -->
        <!-- <div class="col-8"> -->
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5>
          <p class="card-text">发售日期: {{ dateFormatter(game.first_release_date) }}</p>
        </div>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- <h3>{{ category }}</h3> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { fetchGames, fetchCover } from '../api/game';
import { dateFormatter } from "../utils/date";

export default defineComponent({
  name: "GameVue",
  setup() {
    const games = ref([]);
    const getGames = () => {
      fetchGames().then((res) => (games.value = res.data));
      // .then(() => {
      //   games.value.forEach((game: any) => {
      //     fetchCover(game.id).then((res) => (game.cover = res.data));
      //   });
      // });
    };

    // const getCover = () => {
    //   games.value.forEach((game: any) => {
    //     fetchCover(game.id).then((res) => (game.cover = res.data));
    //   });
    // };

    onMounted(getGames);
    // onMounted(getCover);

    return {
      games,
      getGames,
    };
  },
  data() {
    return {
      //   games: [''],
    };
  },
  mounted() {
    // GetGame()?.then((res) => {
    //   this.games = res.data;
    //   console.log(`games: ${this.games}`);
    // });
    // this.getGames();
    // console.log(`games: ${this.games}`);
  },
  props: {
    // category: String,
  },
  methods: {
    dateFormatter,
    fetchCover,
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