<template>
  <div
    class="min-h-screen bg-gray-600 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
      >
        <form class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <button
              type="file"
              @change="onFileSelected"
              placeholder="Image"
              class="h-16 w-16 bg-green-200 duration-200 rounded-xl flex flex-shrink-0 justify-center items-center text-red-400 text-3xl font-mono"
            >
              i
            </button>
            <div
              class="block pl-2 font-semibold text-xl self-start text-gray-700"
            >
              <h2 class="leading-relaxed">Add a Resource</h2>
              <p class="text-sm text-gray-500 font-normal leading-relaxed">
                this page were made specifically to add a Resource 💕.
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
                  v-model="title"
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
                    {{ link }}
                  </p>
                </a>
              </div>
              <div class="flex gap-14">
                <div class="flex flex-col gap-1">
                  <label class="leading-loose">Tags</label>
                  <input
                    @keydown.enter.prevent="addTags"
                    v-model="tag"
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Add Tags"
                  />
                  <div
                    v-for="tag in tags"
                    :key="tag"
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
                        size="md"
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
                <label class="leading-loose">Resource Description</label>
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
              <router-link to="/">
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
              </router-link>
              <button
                v-on:click="add()"
                type="submit"
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

export default {
  name: "AddRec",
  setup() {
    const title = ref("");
    const link = ref("");
    const links = ref([]);
    const tag = ref("");
    const tags = ref([]);
    const description = ref("");
    const category = ref("");

    const addTags = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const deleteTag = (tag) => {
      tags.value = tags.value.filter((item) => {
        return tag !== item;
      });
    };
    const addLink = () => {
      if (!links.value.includes(link.value)) {
        link.value = link.value.replace(/\s/, "");
        links.value.push(link.value);
      }
      link.value = "";
    };
    const deleteLink = (link) => {
      links.value = links.value.filter((item) => {
        return link !== item;
      });
    };
    const add = () => {
      const data = {
        title: title.value,
        links: links.value,
        tags: tags.value,
        description: description.value,
        category: category.value,
      };
      fetch("http://localhost:8000/AddedRec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    };

    return {
      title: title,
      links: links,
      tags: tags,
      description: description,
      category: category,
      add,
      tag,
      addTags,
      link,
      addLink,
      deleteTag,
      deleteLink,
    };
  },
};
</script>
