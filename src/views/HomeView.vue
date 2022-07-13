<template>
<div>
  <h1>Home1</h1>
  <LatestRes></LatestRes>
</div>
  <MainComp />
</template>

<script>
import MainComp from "../components/Home/MainComp.vue";
import LatestRes from '@/components/Home/LatestRes.vue';

export default {
  components: { MainComp , LatestRes },
};
</script>
