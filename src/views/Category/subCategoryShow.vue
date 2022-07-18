<template>
  <div>
    <div>
      <GoBack class="absolute ml-10" />
      <h2 class="mt-8 text-center font-bold text-4xl text-primary-600">
        CHOSE YOUR PATH & LET'S START
      </h2>
      <div class="grid grid-cols-2 mx-10">
        <h1 class="text-left font-semibold mt-5 text-2xl">Sub Category</h1>
      </div>

      <div
        class="grid grid-cols-4 mt-2 mx-10 place-items-center bg-gray-100 py-5"
      >
        <div v-for="subcategory in subcategories.data" :key="subcategory.id">
          <SubCategoryCard
            :name="subcategory.name"
            :image="subcategory.image"
            :res="subcategory.res"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubCategoryCard from "@/components/Category/SubCategoryCard.vue";
import getSubCategory from "../../composables/Category/getSubCategory";
import GoBack from "../../components/button/GoBack.vue";

export default {
  components: { SubCategoryCard, GoBack },
  props: [],
  setup() {
    const { subcategories, error, load } = getSubCategory();

    load();

    return { subcategories, error };
  },
};
</script>
