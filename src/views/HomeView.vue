<template>
  <div class="mx-10">
    <h1>Home</h1>
    <LatestRes></LatestRes>
    <MainComp />

    <!-- ========================= Category Section ========================= -->
    <div class="grid grid-cols-2">
      <h1 class="text-left font-semibold mt-5 text-xl">Category</h1>
      <a href="" class="pt-6 text-right mr-3 text-primary-500">
        see more
        <i class="fa-solid fa-angle-right"></i>
      </a>
    </div>
    <div class="grid grid-cols-3 bg-gray-100 rounded-lg mt-2 place-items-center py-5">
      <CategoryCard class="grid-cols-1" />
      <CategoryCard class="grid-cols-1" />
      <CategoryCard class="grid-cols-1" />
    </div>
    <!-- ========================= End Category Section ========================= -->

  </div>
</template>

<script>
import MainComp from "../components/Home/MainComp.vue";
import LatestRes from '@/components/Home/LatestRes.vue';
import CategoryCard from '@/components/Home/CategoryCard.vue';

export default {
  components: { MainComp, LatestRes, CategoryCard },
};
</script>
