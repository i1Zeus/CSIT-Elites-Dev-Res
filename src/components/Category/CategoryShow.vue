<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-left text-primary-700 text-2xl font-semibold mx-5 mt-5">
        Category
      </h1>
      <div class="mt-3 md:mt-3">
        <AddCategory />
      </div>
    </div>
    <div
      class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 rounded-lg mt-2 lg:mx-3 py-5 justify-center justify-items-center relative"
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

        <div class="flex gap-2 rounded-xl  ml-52">
          <router-link
            :to="{
              name: 'categoryedit',
              params: { id: category.id },
            }"
          >
            <editButton />
          </router-link>
          <!-- <editButton /> -->
          <deleteButton @click="deleteCategory(category.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editButton from "../button/editButton.vue";
import deleteButton from "../button/deleteButton.vue";

import CategoryCard from "../Category/CategoryCard.vue";
import useCategories from "../../composables/Category/getCategory";
import AddCategory from "../Category/AddCategory.vue";
import { onMounted } from "vue";
import swal from "sweetalert";

export default {
  components: { CategoryCard, AddCategory, editButton, deleteButton },
  props: ["id"],
  setup(props) {
    const { categories, getCategory, destroyCategory } = useCategories(
      props.id
    );

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
