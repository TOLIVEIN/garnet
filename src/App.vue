<template>
  <!-- <div id="app"> -->
  <div class="row">
    <header class="col">
      <nav-bar-vue />
    </header>
  </div>
  <div class="row">
    <aside class="col-2">
      <aside-vue />
    </aside>
    <main class="col-8">
      <router-view></router-view>
    </main>
  </div>
  <div class="row">
    <footer class="col">Footer...</footer>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AsideVue from "./components/layout/Aside.vue";
import NavBarVue from "./components/layout/NavBar.vue";
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
    NavBarVue,
  },
});
</script>

<style lang="scss" scoped>
aside {
  // position: fixed;
  // left: 0;
  // top: 0;
  height: 90vh;
}
</style>