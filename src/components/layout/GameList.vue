<template>
  <div class="playstation-container">
    <!-- <h3>{{ category }}</h3> -->
    <div class="nav flex-column">
      <a class="nav-link" href="#" v-for="(game, index) in gamelist" :key="index">
        {{ game.name }}
        <!-- <span>{{ game.releaseDate }}</span> -->
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameListVue",
  data() {
    return {
      categories: ["PlayStation", "Xbox", "Switch", "Steam"],

      gamelist: [
        { name: "Good N Dead", releaseDate: "" },
        { name: "Metamorphosis", releaseDate: "Aug 12, 2020 (11 hours ago)" },
        { name: "Dark Prospect", releaseDate: "Aug 11, 2020 (a day ago)" },
        { name: "Hyper Scape", releaseDate: "Aug 11, 2020 (a day ago)" },
        { name: "duplicate Fast & Furious Crossroads", releaseDate: "" },
        {
          name: "Game of Thrones: Tale of Crows",
          releaseDate: "Aug 07, 2020 (5 days ago)",
        },
        { name: "Swimsanity!", releaseDate: "Aug 07, 2020 (5 days ago)" },
        {
          name: "The Henry Stickmin Collection",
          releaseDate: "Aug 07, 2020 (5 days ago)",
        },
        {
          name: "Fast & Furious: Crossroads",
          releaseDate: "Aug 07, 2020 (5 days ago)",
        },
        { name: "Kitty Rainbow", releaseDate: "Aug 06, 2020 (6 days ago)" },
      ],
    };
  },
  //   props: {
  //     category: String,
  //   },
});
</script>
