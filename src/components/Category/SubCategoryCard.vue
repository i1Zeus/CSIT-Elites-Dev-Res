<template>
  <!-- <div class="w-72 bg-white rounded-lg border border-secondary-300 shadow-md">
        <a href="#">
            <img class="rounded-t-lg w-72 h-36" :src="img" alt="" />
        </a>
        <div class="p-2 text-center grid grid-cols-2">
            <h3 class="font-semibold">{{ title }}</h3>
            <p class="text-gray-400"> {{ res }} Res </p>
        </div>

        <div class="flex gap-3">
            <span class="mt-2 text-red-500 hover:text-red-700 text-lg cursor-pointer">
                <i class="fa-solid fa-trash"></i>
            </span>

            <span class="mt-2 text-blue-500 hover:text-blue-700 text-lg cursor-pointer">
                <i class="fa-solid fa-pencil"></i>
            </span>
        </div>
    </div> -->

  <div
    class="relative w-72 h-48 bg-white rounded-xl border border-secondary-300 shadow-md group"
  >
    <a href="">
      <img :src="image" alt="" class="rounded-lg h-48 ease-in duration-200" />
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

      <div class="flex gap-2 rounded-xl absolute top-0 right-0">
        <!-- <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /> -->
        <editButton />
        <deleteButton />
      </div>
    </a>
  </div>
</template>

<script>
import editButton from "@/components/button/editButton.vue";
import deleteButton from "@/components/button/deleteButton.vue";
export default {
  components: { editButton, deleteButton },
  props: ["name", "res", "image"],
};
</script>
