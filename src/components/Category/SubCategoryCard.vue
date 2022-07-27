<template>
  <div
    class="relative w-72 h-48 bg-white rounded-xl border border-secondary-300 shadow-md group"
  >
    <img
      :src="image"
      alt=""
      class="rounded-lg w-72 h-48 ease-in duration-200"
    />
    <div
      class="absolute top-0 left-0 rounded-lg opacity-75 bg-gradient-to-t from-black group-hover:opacity-50 w-72 h-48 ease-in duration-200"
    ></div>

    <div class="">
      <div
        class="absolute left-0 bottom-0 px-2 mb-2 pr-3 flex items-center justify-between w-full"
      >
        <h3 class="font-semibold text-center text-white text-3xl">
          {{ name }}
        </h3>

        <div class="rounded-full px-2 bg-white text-black">{{ res }} Res</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "res", "image", "ids"],
};
</script>
