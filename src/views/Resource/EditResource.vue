<template>
  <div
    class="h-screen bg-gray-600 py-6 sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
      >
        <form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="flex flex-col">
                <label class="leading-loose">Title</label>
                <input v-model="name"
                  required
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Edit the title"
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Link</label>
                <input
                  type="text" v-model="Link"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Edit the Link"
                />
              </div>

              <div class="flex flex-col">
                <label class="leading-loose">Description</label>
                <textarea
                  required
                  type="text" v-model="description"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Edit the description"
                ></textarea>
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <router-link to="resource">
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
                class="bg-emerald-600 hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 duration-200 justify-center items-center w-full text-white px-4 py-3 rounded-lg"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['id'],
    setup(props) {
      const name = ref('ruby');
      const description = ref('');

      
      const handleSubmit = () =>{
        name: name.value
        description: description.value
      }
      
      return { name, description, handleSubmit }
    }
}
</script>