<template>
  <div class="aside-container row">
    <button
      type="button"
      role="button"
      class="btn btn-outline-light sidebar-button"
      data-toggle="collapse"
      data-trigger="hover"
      data-target="#sidebar-menu"
    >></button>
    <ul class="nav flex-column nav-pills collapse" id="sidebar-menu">
      <li class="nav-item" v-for="(category, index) in categories" :key="index">
        <a
          class="nav-link"
          :class="{active: index === 0}"
          href="#"
          data-toggle="pill"
        >{{ category }}</a>
      </li>

      <div class="dropdown-divider"></div>
      <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="pill">更多平台</a>
      </li>
    </ul>

    <!-- <div class="dropdown-menu col-8">
      <a
        class="dropdown-item"
        href="#"
        v-for="(category, index) in categories"
        :key="index"
      >{{ category }}</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">更多平台</a>
    </div>-->
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


<style lang="scss" scoped>
.sidebar-button {
  font-size: 2rem;
  margin-left: 2rem;
  height: 90vh;

  &:hover {
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)
  }
}
</style>