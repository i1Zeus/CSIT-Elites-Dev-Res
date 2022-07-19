<template>
  <button
    type="button"
    class="text-white hover:text-primary-700 border border-primary-700 hover:bg-white bg-primary-700 focus:ring-1 focus:outline-none focus:ring-primary-700 rounded-lg text-sm font-semibold px-4 py-2 text-center mr-2 mb-2"
  >
    <i class="fa-solid fa-plus"></i> {{ name }}
  </button>
</template>
<script>
export default {
  props: ["name"],
};
</script>
