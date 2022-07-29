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
          <GoBack class="mt-9 ml-16" />
        </div>
        <div class="col-span-1 flex gap-10 mt-10 ml-10 md:ml-28">
          <div class="flex">
            <editButton @click="toogleModal = !toogleModal"></editButton>
            <deleteButton
              @click="deleteRes(resources.id)"
              class="ml-5"
            ></deleteButton>

            <!-- the model -->

            <div
              v-if="toogleModal"
              id="authentication-modal"
              tabindex="-1"
              aria-modal="true"
              role="dialog"
              class="bg-gray-200 py-6 flex flex-col justify-center sm:py-12  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full items-center"
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
                        <p
                          class="text-sm text-gray-500 font-normal leading-relaxed"
                        >
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
                            v-model="resources.link"
                            type="text"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Add a Link"
                          />
                        </div>
                        <div
                          v-for="link in links"
                          :key="link"
                          class="flex flex-row-reverse items-center justify-between"
                        >
                          <button
                            class="font-bold text-gray-500 hover:text-red-500"
                            @click="deleteLink(link)"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-xmark"
                              size="lg"
                              class="px-1"
                            />
                          </button>
                          <a :href="link" target="_blank">
                            <p class="bg-gray-100 px-5 rounded-lg">
                              {{ link.substring(0, 40) + "..." }}
                            </p>
                          </a>
                        </div>
                        <div class="flex gap-14">
                          <div class="flex flex-col gap-1">
                            <label class="leading-loose">Tags</label>
                            <input
                              @keydown.enter.prevent="addTags"
                              v-model="resources.tags[1]"
                              type="text"
                              class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="Add Tags"
                            />
                            <div
                              v-for="resources in tags"
                              :key="resources.tags"
                              class="flex flex-row items-center justify-between"
                            >
                              <p
                                class="w-full items-baseline bg-gray-100 px-2 rounded-lg"
                              >
                                #{{ tag }}
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
                                v-model="category"
                                class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              >
                                <option>Front-End</option>
                                <option>Back-End</option>
                                <option>Mobile Application</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose"
                            >Resource Description</label
                          >
                          <textarea
                            required
                            v-model="description"
                            type="text"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Remember to add a description"
                          ></textarea>
                        </div>
                      </div>
                      <div class="pt-4 flex items-center space-x-4">
                          <button @click="toogleModal = false"
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
                        <div
                          v-if="
                            !(
                              title &&
                              category &&
                              tags.length &&
                              links.length &&
                              description
                            )
                          "
                          class="bg-gray-400 focus:ring-2 focus:outline-none justify-center items-center text-center w-full text-white px-4 py-3 rounded-lg"
                        >
                          Create
                        </div>
                        <button
                          v-else
                          @click="add()"
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
    const toogleModal = ref(false);
    const { resources, fetchResource, destroyResource } = getLatestR(props.id);

    const deleteRes = async (ids) => {
      if (!window.confirm("are you sure you wanna delete it ?")) return;
      await destroyResource(ids);
      await fetchResource();
    };

    onMounted(fetchResource);
    return { resources, deleteRes, toogleModal };
  },
};
</script>
