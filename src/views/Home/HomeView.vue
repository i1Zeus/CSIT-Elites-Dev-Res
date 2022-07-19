<template>
  <div>
    <MainComp />
    <div class="mx-10 mt-5 md:mx-14 lg:mx-32">
      <CategoryShow />
      <LatestRes />
    </div>
  </div>
</template>

<script>
import MainComp from "../../components/Home/MainComp.vue";
import LatestRes from "@/components/Resource/LatestRes.vue";
import CategoryShow from "../../components/Category/CategoryShow.vue";

export default {
  components: { MainComp, LatestRes, CategoryShow },
};
</script>
