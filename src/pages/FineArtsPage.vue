<script setup>
import { AppState } from "@/AppState.js";
import { FineArt } from "@/models/FineArt.js";
import { fineArtsService } from "@/services/FineArtsService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";


const fineArts = computed(() => AppState.finearts)
const currentPage = computed(() => AppState.page)
const totalPages = computed(() => AppState.pages)

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
        <div class="text-center my-2">
          <h1>CodeWorks Institute of Fine Arts</h1>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <div class="d-flex gap-3 align-items-center justify-content-between my-2">
          <button>Previous</button>
          <span class="pageNumbers">Page {{ currentPage }} of {{ totalPages }}</span>
          <button>Next</button>
        </div>

      </div>
    </section>
    <section class="row">
      <div v-for="fineArt in fineArts" :key="fineArt.id" class="col-3">
        <img :src="fineArt.regularImgUrl" alt="Fine Art on display" class="img-fluid rounded" >
      </div>
    </section>
  </div>
</main>
</template>


<style lang="scss" scoped>
button {
  color: #0cbc87;
  background-color: #212529;
  border-radius: 25px;
  border-color: #212529;
  width: 150px;
  padding: .5em;
  margin-bottom: .5em;
  font-size: large;
  font-weight:bold;
}
img {
  margin-bottom: .5em;
  box-shadow: 1px 1px 8px black;
}

.pageNumbers {
  font-size:large;
  font-weight:600;
}
</style>