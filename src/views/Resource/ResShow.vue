<template>
  <div class="h-screen flex items-center bg-gray-600 p-16">
    <div class="bg-white p-4 rounded-lg">
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="flex flex-col">
            <p class="font-semibold text-4xl ml-16 mt-10 text-primary-500">
              {{ latestR.name }}
            </p>
            <div class="mr-20">
              <!-- <p class="text-primary-500 text-lg font-semibold ml-16">{{latestR.name}}</p> -->
              <p class="mt-4 ml-16 text-lg">{{ latestR.description }}</p>
              <p class="mt-5 text-right mr-4">{{ latestR.updated_time }}</p>
            </div>
            <div class="flex flex-col">
              <ul class="list-disc mt-10 ml-16 text-lg">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="col-span-6 mt-12">
        <img class="rounded-lg" src="" alt="">
      </div> -->

        <div class="col-span-6 h-auto">
          <div>
            <img
              class="relative rounded-lg mt-10 pr-5"
              src="https://www.aspfaqs.com/wp-content/uploads/2021/10/pankaj-patel-_SgRNwAVNKw-unsplash-1.jpg"
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 justify-between mb-10 md:mb-0">
        <div class="col-span-1">
          <GoBack class="mt-10 ml-16" />
        </div>
        <div class="col-span-1 flex gap-10 mt-10 ml-10 md:ml-28">
          <div class="flex">
            <editButton></editButton>
            <deleteButton class="ml-5"></deleteButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getLatestR from "../composables/getLatestR";
import GoBack from "../components/GoBack.vue";
import deleteButton from "../components/button/deleteButton.vue";
import editButton from "../components/button/editButton.vue";
export default {
  components: {
    GoBack,
    deleteButton,
    editButton,
  },
  props: ["id"],
  setup(props) {
    const { latestR, error, load } = getLatestR(props.id);

    load();
    return { latestR, error };
  },
};
</script>
