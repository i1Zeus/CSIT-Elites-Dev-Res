<template>
  <div>
    <TheNavigation />
    <div class="grid grid-cols-2">
      <div class="grid-cols-1">
        <div class="ml-10">
          <h1
            class="text-7xl font-poppins font-semibold mt-40 mb-10 ml-16 text-5xl leading-tight"
          >
            Investing In <br />
            Your Knowledge And
            <h1 class="text-primary-500 font-bold">YOUR FUTURE</h1>
          </h1>
          <div class="flex flex-col w-3/3 gap-10 mx-16">
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
                  v-model="search"
                  type="search"
                  id="default-search"
                  class="block p-5 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search Resources, Courses..."
                  required
                />
                <div v-if="search">
                  <div
                    v-if="filteredData.length"
                    class="overflow-y-auto h-96 py-1 w-full rounded bg-white border border-gray-300 px-4 space-y-1 absolute z-10 mt-1 shadow-2xl"
                  >
                    <router-link
                      v-for="res in filteredData"
                      :key="res.id"
                      :to="{ name: 'ResShow', params: { id: res.id } }"
                    >
                      <div class="cursor-pointer hover:bg-gray-100 p-1 mt-1">
                        {{ res.name }}
                      </div>
                    </router-link>
                  </div>
                </div>

                <div
                  v-if="!search"
                  class="text-white absolute right-2.5 bottom-2.5 bg-gray-400 hover:cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3"
                >
                  Search
                </div>
                <button
                  v-else
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="relative grid-cols-1 mx-16">
        <div class="inset-y-70 right-10 mt-10">
          <img src="../../assets/img/Searching.png" alt="HomeImage" />
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
import getAllRes from "../../composables/Home/getAllRes";
import TheNavigation from "../../components/Home/TheNavigation.vue";
export default {
  component: {
    TheNavigation,
  },
  setup() {
    const tagsshow = ref(true);
    const { Tags, error, load } = getTags();
    const { allRes, loadRes } = getAllRes();
    const { RecCou, load1 } = getRecCou();
    const { CerRec } = getCerRec();
    const search = ref("");

    load();
    load1();
    loadRes();
    const filteredData = computed(() => {
      return allRes.value.filter(({ name }) =>
        [name].some((val) => val.toLowerCase().includes(search.value))
      );
    });

    return { RecCou, CerRec, Tags, error, tagsshow, search, filteredData };
  },
};
</script>
