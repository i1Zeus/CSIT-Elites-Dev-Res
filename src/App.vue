<template>
  <TheNavigation />
  <div id="app" class="font-poppins">
    <router-view />
  </div>
</template>
<script>
import TheNavigation from "./components/Home/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>
