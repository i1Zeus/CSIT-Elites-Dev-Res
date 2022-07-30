<template>
  <div class="h-screen md:flex items-center bg-gray-200 p-6 md:p-16">
    <div class="bg-white md:p-4 rounded-lg">
      <div class="md:grid grid-cols-12">
        <div class="md:col-span-6">
          <div class="flex flex-col">
            <p class="font-semibold text-2xl md:text-4xl ml-8 md:ml-16 mt-10 text-primary-500">
              {{ resources.name }}
            </p>
            <div class="md:mr-20">
              <p class="mt-4 ml-8 md:ml-16 text-xl">{{ resources.description }}</p>
              <p class="mt-5 text-right mr-4 text-lg ml-10">{{ resources.updated_time }}</p>
            </div>
            <div class="flex flex-col">
              <ul
                v-for="link in resources.links"
                :key="link.id"
                class="list-disc mt-5 ml-12 md:ml-20 text-xl"
              >
                <li>
                  <a href="{{link.url}}">{{ link.url }} </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-6 h-auto">
          <div>
            <img
              class="relative rounded-lg ml-24 h-96"
              :src="latestR.image"
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 justify-between mb-10 md:mb-0">
        <div class="col-span-1">
          <GoBack class="mt-9 ml-16" />
        </div>
        <div class="col-span-1 flex gap-10 mb-10 mt-10 ml-10 md:ml-28">
          <div class="flex">
            <editButton />
            <deleteButton class="ml-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getLatestR from "../../composables/Resource/getLatestR";
import GoBack from "../../components/button/GoBack.vue";
import deleteButton from "../../components/button/deleteButton.vue";
import editButton from "../../components/button/editButton.vue";
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
