<template>
    <!-- <div class="w-72 bg-white rounded-lg border border-secondary-300 shadow-md">
        <a href="#">
            <img class="rounded-t-lg w-72 h-36" :src="img" alt="" />
        </a>
        <div class="p-2 text-center grid grid-cols-2">
            <h3 class="font-semibold">{{ title }}</h3>
            <p class="text-gray-400"> {{ res }} Res </p>
        </div>

        <div class="flex gap-3">
            <span class="mt-2 text-red-500 hover:text-red-700 text-lg cursor-pointer">
                <i class="fa-solid fa-trash"></i>
            </span>

            <span class="mt-2 text-blue-500 hover:text-blue-700 text-lg cursor-pointer">
                <i class="fa-solid fa-pencil"></i>
            </span>
        </div>
    </div> -->

    <div class="relative w-72 h-48 bg-white rounded-xl border border-secondary-300 shadow-md">
        <a href="">
        <img :src="img" alt="" class="brightness-50 rounded-xl h-48 scale-100 hover:scale-105 ease-in duration-300">

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 class="font-semibold text-center text-white text-3xl">{{ title }}</h3>

            <button class="bg-primary-600 hover:bg-primary-500 h-10 w-20 rounded-3xl">
             {{ res }} Res
            </button>
        </div>

        <div class="flex gap-2 rounded-xl absolute bottom-2 right-3">
            <deleteButton />
            <editButton />
        </div>
        </a>
    </div>
</template>

<script>
import editButton from "@/components/button/editButton.vue";
import deleteButton from "@/components/button/deleteButton.vue";
export default {
    components: { editButton, deleteButton },
    props: ["title", "res", "img"],
};
</script>
