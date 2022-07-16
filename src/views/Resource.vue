<template>
  <div class="h-screen w-screen bg-gray-300 p-16">
    <div class="bg-white rounded-lg">
      <p class="text-primary-500 text-4xl font-semibold text-center p-10">
        <u>Front-End Resources</u>
      </p>
      <div class="grid grid-cols-3">
        <!-- card -->

        <div v-for="resources in resource" :key="resources.id">
        <router-link :to="{ name: 'ResShow', params: { id: resources.id } }">
        <div class="bg-gray-50 rounded-lg border border-gray-200 shadow-md m-10 p-3">
            <div>
            <img
            class="rounded-t-lg bg-cover"
            src="https://www.aspfaqs.com/wp-content/uploads/2021/10/pankaj-patel-_SgRNwAVNKw-unsplash-1.jpg"
            alt=""
          />
          </div>
          
          <div class="p-3">
            <h5 class="mb-2 text-2xl font-bold text-gray-900">
              {{ resources.title }}
            </h5>
          </div>
          <div class="flex justify-between">
            <button
              class="bg-primary-500 flex justify-center font-medium h-10 w-20 text-white hover:border rounded-lg"
            >
              <span class="mt-2">visit</span>
            </button>

            <div class="mt-1 mr-3">
              <span class="text-sm">Published in </span>
              <span class="">{{ resources.publishDate }}</span>
            </div>
          </div>
        </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getResource from "../composables/getResource";

export default {
  component: {},
  setup() {
    const { resource, error, load } = getResource();

    load();
    return { resource, error };
  },
};
</script>
