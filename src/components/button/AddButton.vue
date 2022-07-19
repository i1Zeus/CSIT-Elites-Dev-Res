<template>
  <button
    type="button"
    class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  >
    + {{ name }}
  </button>
</template>
<script>
export default {
  props: ["name"],
};
</script>
