<template>
  <button
    type="button"
    class="text-white hover:text-green-700 border border-green-700 hover:bg-white bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm font-semibold px-4 py-2 text-center mr-2 mb-2"
  >
    <i class="fa-solid fa-plus"></i> {{ name }}
  </button>
</template>
<script>
export default {
  props: ["name"],
};
</script>
