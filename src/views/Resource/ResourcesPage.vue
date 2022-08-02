<template>
  <div class="bg-gray-300 lg:p-20 md:p-10 p-5 h-screen">
    <div class="bg-white rounded-lg mt-10">
      <p class="text-primary-500 md:mt-20 lg:mt-0 text-4xl font-semibold text-center p-10">
        <u>Front-End Resources</u>
      </p>

      <div class="md:grid md:grid-cols-2 lg:grid-cols-4">
        <!-- card -->

        <div v-for="resources in resource" :key="resources.id">
          <router-link :to="{ name: 'ResShow', params: { id: resources.id } }">
            <ResourceCard
              :title="resources.name"
              :publishDate="resources.updated_time"
              :tags="resources.tags"
              :image="resources.image"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ResourceCard from "../../components/Resource/ResourceCard.vue";
import getResource from "../../composables/Resource/getResource";
import addSubSectionButton from "../../components/Category/addSubCategoryButton.vue"
export default {
  components: { ResourceCard, addSubSectionButton },
  props: ["id"],
  setup(props) {
    const { resource, error, load } = getResource(props.id);

    load();
    return { resource, error };
  },
};
</script>
