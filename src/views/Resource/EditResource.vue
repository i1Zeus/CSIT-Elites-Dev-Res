<template>
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
    class="bg-gray-200 py-6 flex flex-col justify-center sm:py-12 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full items-center"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
      >
        <form class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div
              class="h-16 w-16 bg-green-200 duration-200 rounded-xl flex flex-shrink-0 justify-center items-center text-red-400 text-3xl font-mono"
            >
              i
            </div>
            <div
              class="block pl-2 font-semibold text-xl self-start text-gray-700"
            >
              <h2 class="leading-relaxed">Edit a Resource</h2>
              <p class="text-sm text-gray-500 font-normal leading-relaxed">
                this page were made specifically to Edit a Resource 💕.
              </p>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="flex flex-col">
                <label class="leading-loose">Resource Title</label>
                <input
                  required
                  v-model="resources.name"
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Resource title"
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Resource Link</label>
                <input
                  @keydown.enter.prevent="addLink"
                  v-model="link"
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Add a Link"
                />
              </div>
              <div
                v-for="link in resources.links"
                :key="link.id"

                
                class="flex flex-row-reverse items-center justify-between"
              >
                <button
                  @click.prevent="deleteLink(link.url)"
                  class="font-bold text-gray-500 hover:text-red-500"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    size="lg"
                    class="px-1"
                  />
                </button>
                <a :href="link.url" target="_blank">
                  <p class="bg-gray-100 px-5 rounded-lg">
                    {{ link.url.substring(0, 40) + "..." }}
                  </p>
                </a>
              </div>
              <div class="flex gap-14">
                <div class="flex flex-col gap-1">
                  <label class="leading-loose">Tags</label>
                  <input
                    @keydown.enter.prevent="addTags"
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Add Tags"
                  />
                  <div
                    v-for="tag in resources.tags"
                    :key="tag.id"
                    class="flex flex-row items-center justify-between"
                  >
                    <p
                      class="w-full items-baseline bg-gray-100 px-2 rounded-lg"
                    >
                      #{{ tag.name }}
                    </p>
                    <button @click="deleteTag(tag)">
                      <font-awesome-icon
                        icon="fa-solid fa-xmark"
                        class="px-1 font-bold text-gray-500 hover:text-red-500"
                      />
                    </button>
                  </div>
                </div>
                <div class="flex flex-col gap-1">
                  <label class="leading-loose">Category</label>
                  <div class="relative inline-flex">
                    <select
                      required
                      v-model="resources.category_id"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="1">Front-End</option>
                      <option value="2">Back-End</option>
                      <option value="3">Mobile Application</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Resource Description</label>
                <textarea
                  required
                  v-model="resources.description"
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Remember to add a description"
                ></textarea>
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button
                class="flex justify-center items-center w-full border-2 border-transparent border-b-black hover:border-black duration-1000 text-gray-900 px-4 py-3 rounded-t-lg rounded-b-sm focus:outline-none"
              >
                <svg
                  class="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </button>

              <button
                @click="saveResource()"
                type="button"
                class="bg-emerald-600 hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 duration-200 justify-center items-center w-full text-white px-4 py-3 rounded-lg"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
import getLatestR from "../../composables/Resource/getLatestR";
export default {
  components: {},
  props: ["id"],
  setup(props) {
    // const links = ref([]);
    const link = ref("");
    const tag = ref("");
    const { resources, fetchResource } = getLatestR(props.id);

    onMounted(fetchResource);

    const deleteLink = (link) => {
      resources.value.links.url = resources.value.links.url.filter((item) => {
        return link !== item;
      });
    };
    const addLink = () => {
      if (!links.value.includes(link.value)) {
        link.value = link.value.replace(/\s/, "");
        links.value.unshift(link.value);
      }
      link.value = "";
    };

    const saveResource = async () => {
    await updateResource(props.id);
    };
    return {
      resources,
      fetchResource,
       deleteLink,
    //   addLink,
      saveResource,
      tag,
      link,
    };
  },
};
</script>
