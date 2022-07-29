<template>
  <div class="h-screen flex items-center bg-gray-200 p-16">
    <div class="bg-white p-4 rounded-lg">
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="flex flex-col">
            <p class="font-semibold text-4xl ml-16 mt-10 text-primary-500">
              {{ resources.name }}
            </p>
            <div class="mr-20">
              <!-- <p class="text-primary-500 text-lg font-semibold ml-16">{{latestR.name}}</p> -->
              <p class="mt-4 ml-16 text-lg">{{ resources.description }}</p>
              <p class="mt-5 text-right mr-4">{{ resources.updated_time }}</p>
            </div>
            <div class="flex flex-col">
              <ul
                v-for="link in resources.links"
                :key="link.id"
                class="list-disc mt-10 ml-16 text-lg"
              >
                <li>
                  <a href=""> {{ link.url }} </a>
                </li>
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
          <GoBack class="mt-9 ml-16" />
        </div>
        <div class="col-span-1 flex gap-10 mt-10 ml-10 md:ml-28">
          <div class="flex">
            <!-- <router-link :to="{ name: 'EditResource', params: { id: resources.id } }>
              <editButton ></editButton>
            </router-link> -->
            
            <deleteButton
              @click="deleteRes(resources.id)"
              class="ml-5"
            ></deleteButton>

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
import { ref } from "vue";
import { onMounted } from "vue";

export default {
  components: {
    GoBack,
    deleteButton,
    editButton,
  },
  props: ["id"],
  setup(props) {
    const links = ref([]);
    const link = ref("");

    const { resources, fetchResource, destroyResource } = getLatestR(props.id);

    const deleteRes = async (ids) => {
      if (!window.confirm("are you sure you wanna delete it ?")) return;
      await destroyResource(ids);
      await fetchResource();
    };
    onMounted(fetchResource);

    //   const addLink = () => {
    //   if (!links.value.includes(link.value)) {
    //     link.value = link.value.replace(/\s/, "");
    //     links.value.unshift(link.value);
    //   }
    //     link.value = "";
    // };

    // const deleteLink = (link) => {
    //   links.value = links.value.filter((item) => {
    //     return link !== item;
    //   });
    // };
    // const saveRes = async () => {
    //   await updateResource(props.id);
    // };
    return { resources, deleteRes, };
  },
};
</script>
