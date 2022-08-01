<template>
  <div>
    <div class="flex justify-between md:mx-4">
    <div>
      <h1 class="text-left text-primary-700 text-base md:text-2xl font-semibold mx-5 mt-5">
        Category
      </h1>
    </div>
    <div class="mt-4 md:mt-3">
      <AddCategory/>
    </div>
      
      
    </div>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 rounded-lg mt-2 md:mx-3 justify-center justify-items-center py-5 relative"
    >
      <div v-for="category in categories.data" :key="category.id">
        <router-link
          :to="{
            name: 'categories',
            params: { id: category.id },
          }"
        >
          <CategoryCard
            class="grid-cols-1"
            :name="category.name"
            :subsections_count="category.subsections_count"
            :resources_count="category.resources_count"
            :image="category.image"
          />
        </router-link>

        <div class="flex gap-2 rounded-xl absolute top-6 ml-52">
          <editButton />
          <deleteButton @click="deleteCategory(category.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editButton from "@/components/button/editButton.vue";
import deleteButton from "@/components/button/deleteButton.vue";

import CategoryCard from "../Category/CategoryCard.vue";
import useCategories from "../../composables/Category/getCategory";
import AddCategory from "../Category/AddCategory.vue";
import { onMounted } from "vue";
import swal from "sweetalert";

export default {
  components: { CategoryCard, AddCategory, editButton, deleteButton },

  setup() {
    const { categories, getCategory, destroyCategory } = useCategories();

    const deleteCategory = async (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Category!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your Category has been deleted!", {
            icon: "success",
          });

          destroyCategory(id);
          getCategory();
          
        } else {
          swal("Your Category is safe!");
        }
      });
    };

    onMounted(getCategory);
    return {
      categories,
      deleteCategory,
    };
  },
};
</script>
