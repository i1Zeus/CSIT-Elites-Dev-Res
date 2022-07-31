<template>
  <div>
    <AddButton @click="toogleModal = !toogleModal" name="Add Category" />
  </div>

  <div v-if="toogleModal">
    <div
      id="addcategory-modal"
      tabindex="-1"
      class="overflow-y-auto bg-black bg-opacity-50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      aria-modal="true"
      role="dialog"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <button
            @click="toogleModal = false"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="addcategory-modal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-semibold text-gray-900">
              Add Category
            </h3>

            <form
              @submit="sendCategory"
              enctype="multipart/form-data"
              class="space-y-6"
            >
              <div>
                <label class="leading-loose">Category Name</label>
                <input
                  required
                  v-model="form.name"
                  type="text"
                  name="title"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Category name"
                />
              </div>

              <div>
                <input type="file" @change="onChange" />
              </div>

              <div class="flex">
                <button
                  @click="toogleModal = false"
                  class="flex justify-center items-center w-full border-2 border-transparent border-b-black hover:border-emerald-600 text-gray-900 px-4 py-3 rounded-t-lg rounded-b-sm focus:outline-none mr-6"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="bg-emerald-600 hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 duration-200 justify-center items-center w-full text-white px-4 py-3 rounded-lg"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddButton from "../button/AddButton.vue";
import useCategories from "../../composables/Category/getCategory";
import { ref } from "vue";

export default {
  components: { AddButton },
  setup() {
    const toogleModal = ref(false);
    const form = ref({
      name: "",
      image: "",
    });

    const { addCategory } = useCategories();

    const onChange = (e) => {
      form.value.image = e.target.files[0];
    };

    const sendCategory = async () => {
      await addCategory({ ...form.value });
    };

    return {
      form,
      sendCategory,
      onChange,
      toogleModal,
    };
  },
};
</script>
