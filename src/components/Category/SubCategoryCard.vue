<template>
    <div class="w-72 bg-white rounded-lg border border-secondary-300 shadow-md">
            <a href="#">
                <img class="rounded-t-lg w-72 h-36" :src="img" alt="" />
            </a>
        <div class="p-2 text-center grid grid-cols-2">
            <h3 class="font-semibold">{{ title }}</h3>
            <p class="text-gray-400"> {{ res }} Res </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "res", "img"],
};
</script>
