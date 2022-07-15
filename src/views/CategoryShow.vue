<template>
    <div>
        <h2 class="text-center font-bold text-4xl text-green-600 mt-10">Chose Your Path & Let's Start </h2>
        <div class="grid grid-cols-2 mx-10">
            <h1 class="text-left font-semibold mt-5 text-2xl">Sub Category</h1>
            <!-- <a href="" class="pt-6 text-right mr-3 text-primary-500">
            see more
            <i class="fa-solid fa-angle-right"></i>
        </a> -->
        </div>
        <div class="grid grid-cols-4 mt-2 mx-10 place-items-center bg-gray-100 py-5">
            <SubCategoryCard class="grid-cols-1" />
            <SubCategoryCard class="grid-cols-1" />
            <SubCategoryCard class="grid-cols-1" />
            <SubCategoryCard class="grid-cols-1" />

            <!-- <CategoryCard class="grid-cols-1" />
            <CategoryCard class="grid-cols-1" />
            <CategoryCard class="grid-cols-1" /> -->
        </div>
    </div>

</template>

<script>
import SubCategoryCard from '@/components/Category/SubCategoryCard.vue';

export default {
    components: { SubCategoryCard },
};
</script>