<template>
    <div class="bg-gray-100 py-3 px-6 md:flex justify-between items-center">
        <div class="flex items-center font-bold">
            <span class="text-primary-700 text-3xl ml-10">
                CSIT Elites Dev Resources
            </span>
        </div>

        <ul class="md:flex md:items-center">
            <li class="md:mx-4" v-for="link in links" :key="link.name">
                <a :href="link.link" class="text-xl hover:text-primary-600"> {{ link.name }} </a>
            </li>
            <router-link to="/login">
            <li class="text-white hover:text-primary-700 border border-primary-700 hover:bg-white bg-primary-700 focus:ring-1 focus:outline-none focus:ring-primary-700 rounded-lg text-md font-semibold px-4 py-2 text-center">Login</li>
            </router-link>
            
        </ul>
    </div>
</template>

<script>
export default {
    setup() {
        let links = [
            { name: "Home", link: "/" },
            { name: "Category", link: "/category/:id" },
            { name: "Resources", link: "/sub-section/:id" },
        ]

        return {
            links
        }
    }
}
</script>