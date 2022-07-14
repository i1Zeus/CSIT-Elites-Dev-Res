<template>
  <div>
    <MainComp />
    <CategoryCard />
    <LatestRes />
  </div>
</template>

<script>
import MainComp from "@/components/Home/MainComp.vue";
import LatestRes from "@/components/Home/LatestRes.vue";
import CategoryCard from "@/components/Home/CategoryCard.vue";

export default {
  components: { MainComp, LatestRes, CategoryCard },
};
</script>
