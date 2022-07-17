<template>
  <div>
    <div class="grid grid-cols-2">
      <h1 class="text-left font-semibold mt-5 text-2xl text-primary-500">CATEGORY</h1>
      <!-- <a href="" class="pt-6 text-right mr-3 text-primary-500">
            see more
            <i class="fa-solid fa-angle-right"></i>
        </a> -->
    </div>
    <div
      class="grid grid-cols-3 bg-gray-100 rounded-lg mt-2 mx-5 place-items-center py-5"
    >
      <div v-for="category in categories" :key="category.id">
        <router-link :to="{ name: 'subcategory' }">
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
import CategoryCard from "@/components/Category/CategoryCard.vue";
import getCategory from "../../composables/getCategory";
export default {
  components: { CategoryCard },
  setup() {
    const { categories, error, load } = getCategory();

    load();

    return { categories, error };
  },
};
</script>
