<template>
  <div class="w-72 bg-white rounded-lg border border-secondary-300 shadow-md">
    <a href="#">
      <img class="rounded-lg w-full h-52" :src="image" alt="" />
    </a>
    <div class="p-2 text-center">
      <h3 class="font-semibold">{{ name }}</h3>

      <div class="grid grid-cols-2">
        <p class="text-gray-400 grid-col-1">{{ subsections_count }} Sub.</p>
        <p class="text-gray-400 grid-col-1">{{ resources_count }} Res.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "subsections_count", "resources_count", "image", "id"],
};
</script>