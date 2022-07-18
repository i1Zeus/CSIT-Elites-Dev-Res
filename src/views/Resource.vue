<template>
  <div class="bg-gray-300 lg:p-20 md:p-10 p-5">
    <div class="bg-white rounded-lg">
      <p class="text-primary-500 text-4xl font-semibold text-center p-10">
        <u>Front-End Resources</u>
      </p>
      <div class="md:grid md:grid-cols-2 lg:grid-cols-3">
        <!-- card -->

        <div v-for="resources in resource" :key="resources.id">
          <router-link :to="{ name: 'ResShow', params: { id: resources.id } }">
            <ResourceCard 
            :title="resources.name"
            :publishDate="resources.created_time"
            :tags="resources.tags"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResourceCard from "../components/Resource/ResourceCard.vue";
import getResource from "../composables/getResource";

export default {
  components: { ResourceCard },
  setup() {
    const { resource, error, load } = getResource();

    load();
    return { resource, error };
  },
};
</script>
