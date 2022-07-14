<template>
  <div class="mx-10">
    <h1>Home</h1>
    <MainComp />
    <CategoryShow />
    <LatestRes/>

  </div>
  
</template>

<script>
import MainComp from "../components/Home/MainComp.vue";
import LatestRes from '@/components/Home/LatestRes.vue';
import CategoryShow from '@/components/Category/CategoryShow.vue';

export default {
  components: { MainComp, LatestRes, CategoryShow },
};
</script>