<template>
  <!-- <div id="app"> -->
    <div class="row">
      <header class="col">
        <h1>Garnet</h1>
      </header>
    </div>
    <div class="row">
      <aside class="col-2">
        <aside-vue/>
        <!-- <play-staion-vue category="PlayStation" />
        <xbox-vue category="Xbox"/>
        <switch-vue category="Switch" />
        <steam-vue category="Steam" /> -->
        <!-- <home-vue message="Vue 3 + TypeScript App" /> -->
      </aside>
      <main class="col-8">
        <div class="carousel-container">

        <carousel-vue />
        </div>
        <div class="row">
          <div class="col">
            <p>最新推出</p>
            <game-list-vue/>
          </div>
          <div class="col">
            <p>即将推出</p>
            <game-list-vue/>

          </div>
          <div class="col">
            <p>最近流行</p>
            <game-list-vue/>

          </div>
        </div>
      </main>
    </div>
    <div class="row">
      <footer class="col">Footer...</footer>
    </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AsideVue from './components/layout/Aside.vue';
import GameListVue from './components/layout/GameList.vue';
import CarouselVue from './components/layout/Carousel.vue';
// import HomeVue from "./components/Home.vue";
// import PlayStaionVue from './components/PlayStaion.vue';
// import XboxVue from './components/Xbox.vue';
// import SwitchVue from './components/Switch.vue';
// import SteamVue from './components/Steam.vue';
export default defineComponent({
  name: "App",
  components: {
    // HomeVue,
    // PlayStaionVue,
    // XboxVue,
    // SwitchVue,
    // SteamVue,
    AsideVue,
    GameListVue,
    CarouselVue,
  },
});
</script>

