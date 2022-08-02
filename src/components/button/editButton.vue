<template>
  <button
    type="button"
    class="pt-1 text-blue-500 hover:text-blue-700 bg-gray-100 rounded-full w-8 h-8 text-lg text-center cursor-pointer"
  >
    <i class="fa-solid fa-pencil"></i> {{ name }}
  </button>
</template>
<script>
export default {
  props: ["name"],
};
</script>