<template>
  <div id="carousel" class="carousel slide carousel-fade my-4 mx-auto col-9" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/DemonsSouls.jpg" class="d-block w-100" alt="0" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Demon's Souls</h5>
          <p>Demon's Souls.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../assets/Bloodborne.jpg" class="d-block w-100" alt="1" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Bloodborne</h5>
          <p>Bloodborne.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../assets/DarkSouls.jpg" class="d-block w-100" alt="2" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Dark Souls</h5>
          <p>Dark Souls.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselVue",
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
</style>