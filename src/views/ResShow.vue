<template>
  <!-- .center the items  -->
  <div class="h-screen flex items-center bg-gray-600 p-16">
    <div class="grid grid-cols-12 bg-white p-8 rounded-lg">
      <div class="col-span-6">
        <div class="flex flex-col">
          <p class="font-semibold text-4xl ml-16 mt-10 text-primary-500">
            {{ latestR.title }}
          </p>
          <div class="mr-20">
            <p class="text-green-500 ml-16">Jawi & Manar</p>

            <p class="mt-4 ml-16 text-lg">{{ latestR.discription }}</p>
          </div>
          <div class="flex flex-col">
            <ul class="list-disc mt-10 ml-16 text-lg">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
        <GoBack class="ml-10 mt-14" />
      </div>

      <div class="col-span-6 h-auto">
        <div >
          <img class="relative rounded-md" :src="latestR.img" />
        </div>

        <div class="flex gap-5 mt-14 ">
          <button class="bg-red-600 flex justify-center h-10 w-20 text-white hover:border hover:border-red-700 hover:bg-red-700 rounded-lg">
            <span class="mt-2">Delete</span>
          </button>

          <button class="bg-blue-500 flex justify-center h-10 w-20 text-white hover:border hover:border-blue-600 hover:bg-blue-600 rounded-lg">
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