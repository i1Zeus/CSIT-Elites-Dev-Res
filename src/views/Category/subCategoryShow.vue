<template>
  <div>
    <GoBack class="mt-10 ml-10" />
    <h2 class="text-center font-bold text-4xl text-primary-600">
      CHOSE YOUR PATH & LET'S START
    </h2>
    <div class="mx-10 justify-between flex">
      <h1 class="text-left font-semibold mt-5 text-2xl">Sub Category</h1>
      <AddButton name="sub category" />
    </div>

    <div
      class="grid grid-cols-4 mt-2 mx-10 place-items-center bg-gray-100 py-5"
    >
      <RouterLink
        :to="{
          name: 'resource',
          params: { id: subcategory.id },
        }"
        v-for="subcategory in subcategories.data"
        :key="subcategory.id"
      >
        <SubCategoryCard
          :name="subcategory.name"
          :image="subcategory.image"
          :res="subcategory.resources_count"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script>
// import sourceData from "@/data/db.json";
import SubCategoryCard from "@/components/Category/SubCategoryCard.vue";
import getSubCategory from "../../composables/Category/getSubCategory";
import GoBack from "../../components/button/GoBack.vue";
import AddButton from "../../components/button/AddButton.vue";

export default {
  components: { SubCategoryCard, GoBack, AddButton },
  props: ["id"],
  setup(props) {
    const { subcategories, error, load } = getSubCategory(props.id);

    load();

    return { subcategories, error };
  },
};
</script>
