<template>
  <!--  =====> Image <====== -->
  <div
    class="bg-[url('../src/assets/img/MainCom.jpg')] h-screen bg-cover bg-center object-cover relative"
  >
    <!-- ======> Buttons <======  -->
    <div class="flex justify-end mr-5">
      <router-link to="/login">
        <button
          class="bg-transparent border-2 border-transparent hover:bg-black border-t-white border-r-white hover:border-white text-white hover:rounded font-semibold mt-3 ml-2 py-1.5 px-8 duration-200"
        >
          <p>login</p>
        </button>
      </router-link>
    </div>
    <div class="flex flex-col gap-14 items-center mt-40">
      <!-- =========> Paragraph  <========= -->
      <div>
        <p class="text-6xl text-white font-semibold">Search,Find & Learn!</p>
      </div>
      <!-- =========> Resources  <========= -->
      <div>
        <p class="text-2xl text-white font-mono">
          {{ RecCou }} Resources
          <font-awesome-icon icon="fa-solid fa-book-open-reader" />
        </p>
      </div>
      <!-- =========> Search Bar and submit button & Table <========= -->
      <div class="flex flex-col w-1/2 gap-10">
        <form>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative">
            <div
              class="flex absolute inset-y-0 left-0 pl-3 pointer-events-none"
            >
              <font-awesome-icon
                icon="fa-solid fa-pen"
                class="mt-5"
                size="xl"
              />
            </div>
            <input
              v-model="searchTerm"
              type="text"
              id="search"
              class="block p-5 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search Resources, Courses..."
              required
            />
            <ul
              v-if="searchResource.length"
              class="w-full rounded bg-white border border-gray-300 px-4 py-2 space-y-1 absolute z-10"
            >
              <li class="px-1 pt-1 pb-2 font-bold border-b border-gray-200">
                Showing {{ searchResource.length }} of
                {{ AllRec.length }} results
              </li>
              <li
                v-for="rec in AllRec"
                :key="rec.name"
                class="cursor-pointer hover:bg-gray-100 p-1"
              >
                {{ rec }}
              </li>
            </ul>
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3"
            >
              Search
            </button>
          </div>
        </form>
        <!--========> Tags/Res Table <======== -->
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <div class="min-w-full text-center bg-white rounded-2xl">
                  <div>
                    <div class="flex gap-2">
                      <button
                        @click="tagsshow = true"
                        scope="col"
                        class="text-sm font-medium border-b-2 border-green-400 text-gray-900 px-6 py-4"
                      >
                        Tags
                      </button>
                      <button
                        @click="tagsshow = false"
                        scope="col"
                        class="text-sm font-medium border-b-2 border-green-400 text-gray-900 px-6 py-4"
                      >
                        Certified Resources
                      </button>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="tagsshow"
                      class="grid grid-cols-4 gap-4 w-full p-2"
                    >
                      <a v-for="tag in Tags.data" :key="tag">#{{ tag.name }}</a>
                    </div>
                    <div
                      v-if="!tagsshow"
                      class="grid grid-cols-4 gap-4 w-full p-2"
                    >
                      <a href="/" v-for="res in CerRec.data" :key="res">
                        {{ res.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import getTags from "../../composables/Home/getTags";
import getRecCou from "../../composables/Home/getRecCount";
import getCerRec from "../../composables/Home/getCerRec";
import getAllRec from "../../composables/Home/getAllRec";

export default {
  name: "MainComp",
  component: {},
  setup() {
    const tagsshow = ref(true);
    const { Tags, error, load } = getTags();
    const { RecCou, load1 } = getRecCou();
    let searchTerm = ref("");
    const { CerRec } = getCerRec();
    const { AllRec, searchload } = getAllRec();

    const searchResource = computed(() => {
      if (searchTerm.value === "") {
        return [];
      }

      let matches = 0;

      return AllRec.filter((rec) => {
        if (
          rec.name.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
          matches < 10
        ) {
          matches++;
          return rec;
        }
      });
    });
    load();
    load1();
    searchload();
    return {
      searchTerm,
      searchResource,
      AllRec,
      RecCou,
      CerRec,
      Tags,
      error,
      tagsshow,
    };
  },
};
</script>
