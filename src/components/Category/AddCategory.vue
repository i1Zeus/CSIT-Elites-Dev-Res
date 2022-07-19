<template>
    <div>
        <AddButton @click="toogleModal = !toogleModal" name="Add Category" />
    </div>

    <div v-if="toogleModal">
        <div id="addcategory-modal" tabindex="-1"
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
            aria-modal="true" role="dialog">
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">

                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button @click="toogleModal = false" type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="addcategory-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="py-6 px-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Add Category</h3>
                        <form class="space-y-6" action="#">
                            <div>
                                <label class="leading-loose">Category Name</label>
                                <input required v-model="name" type="text"
                                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Category name" />
                            </div>

                            <div>
                                <input type="file" @change="onFileSelected" placeholder="Image"
                                    class="bg-primary-200 duration-200 flex flex-shrink-0 justify-center items-center text-red-400 font-mono">
                            </div>

                            <AddButton v-on:click="add()" name="Add" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import AddButton from "../button/AddButton.vue";
import { ref } from "vue";

export default {
    components: { AddButton },
    setup() {
        const name = ref("");
        const toogleModal = ref(false);

        const add = () => {
            const data = {
                name: name.value,
            };

            fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        }

        return {
            name: name,
            toogleModal: toogleModal,
            add
        }
    },
}
</script>