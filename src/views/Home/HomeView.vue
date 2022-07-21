<template>
  <div>
    <HomePage />
    <div class="mx-10 mt-10 md:mx-14 lg:mx-32">
      <CategoryShow />
      <LatestRes />
    </div>
  </div>
</template>

<script>
// import MainComp from "../../components/Home/MainComp.vue";
import LatestRes from "@/components/Resource/LatestRes.vue";
import CategoryShow from "../../components/Category/CategoryShow.vue";
import HomePage from "../../components/Home/HomePage.vue";

export default {
  components: { LatestRes, CategoryShow, HomePage },
};
</script>
