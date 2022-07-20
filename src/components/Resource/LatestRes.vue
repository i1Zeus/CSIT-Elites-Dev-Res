<template>
  <div class="flex-col">
    <div class="bg-white flex justify-between mt-16 mb-5">
      <div class="text-black text-lg font-semibold">Latest Res.</div>
      <div class="text-green-500 font-semibold">
        <!-- <router-link :to="{ name: 'Resource' }">
          <u><a href="">See more></a></u>
        </router-link> -->
      </div>
    </div>

    <div class="bg-gray-100 rounded-2xl grid md:grid-cols-2 mx-5">
      <div v-for="latestReses in latestRes" :key="latestReses.id">
        <router-link :to="{ name: 'ResShow', params: { id: latestReses.id } }">
          <div class="bg-white rounded-xl grid grid-cols-12 m-4 h-32">
            <div class="col-span-4">
              <img
                class="h-full w-full rounded-2xl object-cover p-3"
                src="https://www.aspfaqs.com/wp-content/uploads/2021/10/pankaj-patel-_SgRNwAVNKw-unsplash-1.jpg"
                alt=""
              />
            </div>
            <div class="col-span-7 mx-3">
              <div>
                <p class="mt-3 mr-3 font-semibold">
                  {{ latestReses.name }}
                </p>
              </div>
              <div class="flex justify-between">
                <div class="mt-14">
                  <p class="text-gray-400">{{ latestReses.created_time }}</p>
                </div>
                <div class="text-xs font-semibold text-primary-500 mr-5">
                  <div v-for="tag in latestReses.tags" :key="tag">
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="col-span-1 text-green-500 mt-14">
                <a href="/Resource">
                  <font-awesome-icon icon="fa-solid fa-angle-right" />
                </a>
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getLatestRes from "../../composables/Resource/getLatestRes";

export default {
  component: {},
  setup() {
    const { latestRes, error, load } = getLatestRes();

    load();
    return { latestRes, error };
  },
};
</script>
