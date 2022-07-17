<template>
  <!-- .center the items  -->
  <div class="h-auto flex items-center md:p-16 bg-gray-600">
    <div class="bg-white md:p-4 rounded-lg">
      <div class="md:grid md:grid-cols-12 bg-white p-4">
        <div class="col-span-6">
          <div class="flex flex-col ml-5 md:ml-12">
            <p class="font-semibold text-4xl mt-10 text-primary-500">
              {{ latestR.title }}
            </p>
            <div class="md:mr-20">
              <p class="text-green-500">{{ latestR.name }}</p>

              <p class="mt-4 text-lg">{{ latestR.discription }}</p>
            </div>
            <div class="flex flex-col">
              <ul class="list-disc mt-10 ml-4 text-lg">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-6 h-auto mt-4 ">
          <div>
            <img class="relative rounded-md h-auto p-5 md:p-0" :src="latestR.img" />
          </div>

          <div
            class="grid grid-cols-2 justify-evenly mt-10 font-semibold text-primary-500 gap-10 pl-28"
          >
            <span v-for="tag in latestR.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 justify-between">
        <div class="col-span-1">
          <GoBack class="mt-10 ml-16" />
        </div>
        <div class="col-span-1 flex gap-10 mt-10">
          <button
            class="bg-red-600 flex justify-center h-10 w-20 text-white hover:border hover:border-red-700 hover:bg-red-700 rounded-lg"
          >
            <span class="mt-2">Delete</span>
          </button>

          <button
            class="bg-blue-500 flex justify-center h-10 w-20 text-white hover:border hover:border-blue-600 hover:bg-blue-600 rounded-lg"
          >
            <span class="mt-2">Edit</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getLatestR from "../composables/getLatestR";
import GoBack from "../components/GoBack.vue";
export default {
  components: {
    GoBack,
  },
  props: ["id"],
  setup(props) {
    const { latestR, error, load } = getLatestR(props.id);

    load();
    return { latestR, error };
  },
};
</script>
