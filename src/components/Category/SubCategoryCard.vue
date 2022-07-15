<template>
    <div class="w-72 h-72 bg-white rounded-lg border border-secondary-300 shadow-md">
        <a href="#">
            <img class="rounded-lg w-72 h-36" :src="img" alt="" />
        </a>
        <div class="p-2 text-center">
            <h3 class="font-semibold">{{ SubCategory.title }}</h3>

            <div class="grid grid-cols-2">
                <p> {{ SubCategory.description }} </p>
                <p class="text-gray-400"> {{SubCategory.res}} Res </p>
            </div>
        </div>
    </div>
</template>

<script>
import getSubCategory from '../../composables/getSubCategory';

export default {
    component: {},
    setup() {
        const { SubCategory, error, load } = getSubCategory();

        load()
        return { SubCategory, error }
    },
};
</script>
