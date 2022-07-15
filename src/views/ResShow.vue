<template>
  <div class="h-screen flex items-center bg-gray-600 p-16">
    <div class="grid grid-cols-12 bg-white p-8 rounded-lg">
      <div class="col-span-6">
        <div class="flex flex-col">
          <p class="font-semibold text-4xl ml-16 mt-10">Front-End Source</p>
          <div class="mr-20">
            <p class="text-green-500 text-3xl mt-10 ml-16">
              {{ latestR.title }}
            </p>

            <p class="text-green-500 ml-16">Jawi & Manar</p>

            <p class="mt-4 ml-16 text-lg">{{ latestR.discription }}</p>
          </div>
          <div class="flex flex-col">
            <!-- <button class="bg-green-500 ml-16 mt-10 h-8 w-16 rounded hover:bg-green-600 hover:text-white">
            <span class="m-2 ">Visit</span>
          </button> -->
            <ul class="list-disc mt-10 ml-16 text-lg">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>

            <GoBack class="ml-10 mt-4" />
          </div>
        </div>
      </div>
      <div class="col-span-6 h-auto">
        <div class="mr-10 mt-10">
          <img :src="latestR.img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getLatestR from "../composables/getLatestR";

export default {
  props: ["id"],
  setup(props) {
    const { latestR, error, load } = getLatestR(props.id);

    load();
    return { latestR, error };
  },
};
</script>
