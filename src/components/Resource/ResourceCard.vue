<template>
  <!-- card -->

  <div class="bg-gray-50 rounded-lg border border-gray-200 shadow-md m-10 p-3">
    <div>
      <img
        class="rounded-t-lg bg-cover"
        src="https://www.aspfaqs.com/wp-content/uploads/2021/10/pankaj-patel-_SgRNwAVNKw-unsplash-1.jpg"
        alt=""
      />
    </div>

    <div class="p-3">
      <h5 class=" text-2xl font-bold text-gray-900">
        {{ title }}
      </h5>
    </div>
    <div class="flex justify-between h-20 mb-2">
      <div class="grid ml-3 text-primary-500 font-semibold">
        <div v-for="tag in tags" :key="tag">
          <span class=""> {{ tag }} </span>
        </div>
      </div>

      <div class="flex gap-1 justify-end mt-14">
        <!-- <span class="">Published in </span> -->
        <span class="">{{ publishDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "tags", "publishDate"],
};
</script>
