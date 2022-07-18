<template>
  <!-- card -->

  <!-- <div class="bg-gray-50 rounded-lg border border-gray-200 shadow-md m-10 p-3">
    <div>
      <img class="rounded-t-lg bg-cover" src="https://www.aspfaqs.com/wp-content/uploads/2021/10/pankaj-patel-_SgRNwAVNKw-unsplash-1.jpg" alt="" />
    </div>

    <div class="p-3">
      <h5 class="text-2xl font-bold text-gray-900">
        {{ title }}
      </h5>
    </div>
    <div class="flex justify-between h-20 mb-2">
      <div class="grid grid-flow-col ml-3 text-primary-500 font-semibold">
        <div v-for="tag in tags" :key="tag.id">
          <span class=""> {{ tag.name }} </span>
        </div>
      </div>

      <div class="flex gap-1 justify-end mt-14">
        <span class="">{{ publishDate }}</span>
      </div>
    </div>
  </div> -->

  <div class="wrapper bg-whiite antialiased text-gray-900 m-6 rounded">
    <div>
      <img
        src="https://www.aspfaqs.com/wp-content/uploads/2021/10/pankaj-patel-_SgRNwAVNKw-unsplash-1.jpg"
        alt=" random imgee"
        class="w-full object-cover object-center rounded-lg shadow-md"
      />
      <div class="relative px-4 -mt-16">
        <div class="bg-white p-5 rounded-lg shadow-lg">
          <div class="mt-1">
            <div class="text-lg font-semibold text-primary-500">
              who to hack hassan k. in one sec using ja r rWJNJ
            </div>
            <div class="text-end mr-2">
              <span>{{ publishDate }}</span>
            </div>
            <div class="flex gap-2">
              <div v-for="tag in tags" :key="tag.id">
                <span
                  class="inline-block bg-gray-200 rounded-full w-auto h-auto p-2 text-xs font-semibold text-gray-700 "
                >
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "tags", "publishDate", "image"],
};
</script>
