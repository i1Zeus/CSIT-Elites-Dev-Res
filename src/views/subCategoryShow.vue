<template>
  <div>
    <h2 class="text-center font-bold text-4xl text-green-600 mt-10">
      Chose Your Path & Let's Start
    </h2>
    <GoBack class="mx-10" />
    <div class="grid grid-cols-2 mx-10">
      <h1 class="text-left font-semibold mt-5 text-2xl">Sub Category</h1>
    </div>

    <div
      class="grid grid-cols-4 mt-2 mx-10 place-items-center bg-gray-100 py-5"
    >
      <div v-for="subcategory in subcategories" :key="subcategory.id">
        <SubCategoryCard
          :title="subcategory.title"
          :sub="subcategory.sub"
          :img="subcategory.img"
          :res="subcategory.res"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import sourceData from "@/data/db.json";
import SubCategoryCard from "@/components/Category/SubCategoryCard.vue";
import getSubCategory from "../composables/getSubCategory";
import GoBack from "../components/GoBack.vue";

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
