<script setup>
import { fineArtsService } from "@/services/FineArtsService.js";
import Pop from "@/utils/Pop.js";
import { onMounted } from "vue";

onMounted(() => {
  getFineArts()
})


async function getFineArts() {
  try {
    await fineArtsService.getFineArts()
  }
  catch (error){
    Pop.error(error);
  }
}

</script>


<template>
<main>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <div class="text-center">
          <h1>CodeWorks Institute of Fine Arts</h1>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-3">
        <img src="/src/assets/img/astronautOnMars.jpg" alt="image of astronaut on mars" class="img-fluid">
      </div>
    </section>
  </div>
</main>
</template>


<style lang="scss" scoped>

</style>