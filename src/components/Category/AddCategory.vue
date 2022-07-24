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

            <form @submit.prevent="send" class="space-y-6">
              <div>
                <label class="leading-loose">Category Name</label>
                <input
                  required
                  v-model="name"
                  type="text"
                  autocomplete="off"
                  @keyup="validateInput"
                  @blue="validateInput"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Category name"
                />
              </div>

              <!-- @blue => when the user clears all the characters -->

              <div v-if="error">
                {{ error }}
              </div>

              <div class="justify-center">
                <DropZone
                  @drop.prevent="drop"
                  @change="selectedFile"
                  class="bg-[#f1f1f1]"
                />
                <p class="mt-2">File: {{ dropzoneFile.name }}</p>
              </div>

              <AddButton type="submit" name="Add" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddButton from "../button/AddButton.vue";
import DropZone from "../button/DropZone.vue";
import { ref } from "vue";

export default {
  components: { AddButton, DropZone },
  setup() {
    const name = ref("");
    // const file = ref("");
    const error = ref("");
    const dropzoneFile = ref("");

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    const validateInput = () => {
      error.value = name.value === "" ? "Category name is required" : "";
    };
    const toogleModal = ref(false);

    const send = () => {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("name", this.name);
      console.log(formData);

      fetch("http://127.0.0.1:8000/api/categories/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
    };

    return {
      name: name,
      error,
      validateInput,
      toogleModal: toogleModal,
      send,
      dropzoneFile,
      drop,
      selectedFile,
    };
  },
};
</script>
