<template>
  <div class="w-72 bg-white rounded-lg border border-secondary-300 shadow-md">
    <a href="#">
      <img
        class="rounded-lg w-72 h-36"
        src="https://en.number13.de/content/images/2021/08/photo-1542831371-29b0f74f9713-2.jpg"
        alt=""
      />
    </a>
    <div class="p-2 text-center">
      <h3 class="font-semibold">{{ title }}</h3>

      <div class="grid grid-cols-2">
        <p class="text-gray-400 grid-col-1">{{ sub }}</p>
        <p class="text-gray-400 grid-col-1">{{ res }}</p>

        <!-- <a href="#" class="grid-col-1">
                    <i class="fa-solid fa-angle-right"></i>
                </a> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "sub", "res"],
};
</script>
