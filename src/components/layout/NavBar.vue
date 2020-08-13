<template>
  <nav class="navbar navbar-light navbar-expand-lg">
    <div class="container">
    <a class="navbar-brand" href="/">Garnet</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/home">主页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/game">游戏</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/platform">平台</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="输入搜索内容" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBarlVue",
  data() {
    return {
      //   categories: ["PlayStation", "Xbox", "Switch", "Steam"],
    };
  },
  //   props: {
  //     category: String,
  //   },
});
</script>


<style lang="scss" scoped>
.navbar {
  background-color: #d1e7f6;
}
</style>