<template>

    <div>
        <h2 class="text-center font-bold text-4xl text-green-600 mt-10">Chose Your Path & Let's Start </h2>
        <div class="grid grid-cols-2 mx-10">
            <h1 class="text-left font-semibold mt-5 text-2xl">Sub Category</h1>
        </div>
    
        <div class="grid grid-cols-4 mt-2 mx-10 place-items-center bg-gray-100 py-5"
            v-for="subcategory in subcategories " :key="subcategory.id">
            <a href="/Resource">
                <SubCategoryCard 
                :title="subcategory.title" 
                :description="subcategory.description"
                :res="subcategory.res" 
                :img="subcategory.img" 
                />
            </a>
        </div>
    </div>
</template>

<script>
import SubCategoryCard from "@/components/Category/SubCategoryCard.vue";
import getSubCategory from "../composables/getSubCategory";
export default {
    components: { SubCategoryCard },
    setup() {
        const { subcategories, error, load } = getSubCategory();

        load();

        return { subcategories, error };
    },
};
</script>