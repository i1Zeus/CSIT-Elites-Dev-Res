<template>
  <GoBack class="absolute ml-10" />
  <div class="mt-10">
    <h2 class="text-center font-bold text-4xl text-primary-600">
      CHOSE YOUR PATH & LET'S START
    </h2>
    <div class="mx-10 justify-between flex">
      <h1 class="text-left font-semibold mt-5 text-2xl">Sub Category</h1>
      <div class="flex justify-end mt-5 mr-10">
        <addSubCategoryButton />
      </div>
    </div>

    <div
      class="grid grid-cols-4 mt-2 mx-10 place-items-center rounded-md bg-gray-200 py-5"
    >
      <div v-for="subcategory in subcategories.data" :key="subcategory.id">
        <RouterLink
          :to="{
            name: 'resource',
            params: { id: subcategory.id },
          }"
        >
          <SubCategoryCard
            :name="subcategory.name"
            :image="subcategory.image"
            :res="subcategory.resources_count"
          />
        </RouterLink>

        <!-- Buttons -->
        <div class="flex gap-2 rounded-xl top-0 right-0">
          <router-link
            :to="{
              name: 'SubEdit',
              params: { id: subcategory.id },
            }"
          >
            <editButton class="p-1.5" />
          </router-link>
          <deleteButton @click="deleteSub(subcategory.id)" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubCategoryCard from "@/components/Category/SubCategoryCard.vue";
import getSubCategory from "../../composables/Category/getSubCategory";
import GoBack from "../../components/button/GoBack.vue";
import addSubCategoryButton from "../../components/Category/addSubCategoryButton.vue";
import editButton from "@/components/button/editButton.vue";
import deleteButton from "@/components/button/deleteButton.vue";
import { onMounted } from "vue";
import swal from "sweetalert";

export default {
  components: {
    SubCategoryCard,
    GoBack,
    addSubCategoryButton,
    editButton,
    deleteButton,
  },
  props: ["id"],
  setup(props) {
    const { subcategories, fetchSubCategory, dsetroySubCategory } =
      getSubCategory(props.id);

    //Delete subcategory
    const deleteSub = async (ids) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this SubCategory!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your SubCategory has been deleted!", {
            icon: "success",
          });
          dsetroySubCategory(ids);
          fetchSubCategory();
        } else {
          swal("Your SubCategory is safe!");
        }
      });
    };

    onMounted(fetchSubCategory);

    return { subcategories, deleteSub };
  },
};
</script>
