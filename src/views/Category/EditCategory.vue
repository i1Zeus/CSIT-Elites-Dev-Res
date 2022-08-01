<template>
  <div class="bg-gray-200">
    <div>
      <div
        id="addcategory-modal"
        tabindex="-1"
        class="overflow-y-auto bg-black bg-opacity-50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow">
            <div class="py-6 px-6 lg:px-8">
              <h3 class="mb-4 text-xl font-semibold text-gray-900">
                Edit Category
              </h3>

              <form class="space-y-6">
                <div>
                  <label class="leading-loose">Category Name</label>
                  <input
                    required
                    v-model="category.name"
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Category name"
                  />
                </div>

                <!-- <div>
                  <input type="file" v-on="category.image" />
                </div> -->

                <div class="flex">
                  <button
                    :to="{
                      name: 'home',
                    }"
                    class="flex justify-center items-center w-full border-2 border-transparent border-b-black hover:border-emerald-600 text-gray-900 px-4 py-3 rounded-t-lg rounded-b-sm focus:outline-none mr-6"
                  >
                    Cancel
                  </button>
                  <button
                    @click="send()"
                    type="submit"
                    class="bg-emerald-600 hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 duration-200 justify-center items-center w-full text-white px-4 py-3 rounded-lg"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCategory from "../../composables/Category/getCategory";
import { onMounted } from "vue";
export default {
  props: ["id"],
  setup(props) {
    const { category, getCategoryEdit, updateCategory } = getCategory(props.id);
    onMounted(getCategoryEdit(props.id));

    const send = async () => {
      await updateCategory(props.id);
    };

    return {
      category,
      send,
    };
  },
};
</script>
