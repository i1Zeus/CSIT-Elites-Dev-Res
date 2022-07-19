<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-left font-semibold mt-5 text-xl">Category</h1>
      <AddCategory />
    </div>
    <div
      class="grid grid-cols-3 bg-gray-100 rounded-lg mt-2 mx-5 place-items-center py-5"
    >
      <div v-for="category in categories" :key="category.id">
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
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../Category/CategoryCard.vue";
import getCategory from "../../composables/Category/getCategory";
import AddCategory from "../Category/AddCategory.vue";
export default {
  components: { CategoryCard, AddCategory },
  setup() {
    const { categories, error, load } = getCategory();

    load();

    return { categories, error };
  },
};
</script>
