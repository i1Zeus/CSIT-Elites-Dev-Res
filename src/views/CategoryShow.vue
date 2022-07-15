<template>
    <div>
        <h2 class="text-center font-bold text-4xl text-green-600 mt-10">Chose Your Path & Let's Start </h2>
        <div class="grid grid-cols-2 mx-10">
            <h1 class="text-left font-semibold mt-5 text-2xl">Sub Category</h1>
        </div>

        <div class="grid grid-cols-4 mt-2 mx-10 place-items-center bg-gray-100 py-5"
            v-for="subCategory in categories" :key="subCategory.id">
            <SubCategoryCard />
        </div>
    </div>
</template>

<script>
// import sourceData from "@/data/db.json";
import SubCategoryCard from "@/components/Category/SubCategoryCard.vue";
import getCategory from "../composables/getCategory";
export default {
    components: { SubCategoryCard },
    setup() {
        const { categories, error, load } = getCategory();

        load();

        return { categories, error };
    },
};
</script>