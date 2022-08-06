<template>
  <div
    class="flex flex-col h-16 md:h-auto fixed w-full z-50 bg-gray-100 md:py-3 px-6 items-center"
  >
    <div class="flex justify-between w-full">
      <div class="flex order-2 items-center font-bold">
        <span
          class="text-primary-700 text-2xl md:text-3xl lg:text-4xl mt-4 mb-1 md:mt-0 ml-4 md:ml-10"
        >
        
          Dev Resources
        </span>
      </div>
      <div
        @click="showMenu = !showMenu"
        class="flex flex-col order-1 mt-5 md:hidden"
      >
        <button
          type="button"
          class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="flex order-3 mt-4 md:mt-0">
        <ul
          class="md:flex flex-wrap gap-2 font-semibold md:items-center hidden"
        >
          <li class="md:mx-4" v-for="link in links" :key="link.name">
            <a :href="link.link" class="text-xl hover:text-primary-600">
              {{ link.name }}
            </a>
          </li>
        </ul>

        <router-link class="" to="/login">
          <button
            v-if="!loggedIn"
            class="text-white hover:text-primary-700 border border-primary-700 hover:bg-white bg-primary-700 focus:ring-1 focus:outline-none focus:ring-primary-700 rounded-lg text-md font-semibold px-7 py-2 text-center"
          >
            <p>Login</p>
          </button>
          <LogOut class="" v-else />
        </router-link>
      </div>
    </div>

    <div class="flex md:hidden">
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex flex-col mt-5 space-y-4 mb-4 md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li
          class="md:mx-4 font-semibold text-primary-600"
          v-for="link in links"
          :key="link.name"
        >
          <a :href="link.link" class="text-xl hover:text-primary-600">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import LogOut from "../button/LogOut.vue";
export default {
  name: "NavBar",
  comments: {
    LogOut,
  },
  mounted() {
    this.checkUserStatus();
  },
  computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    },
  },
  methods: {
    checkUserStatus() {
      if (localStorage.getItem("token") != null) {
        this.token = localStorage.getItem("token");
      }
    },
  },
  setup() {
    const showMenu = ref(false);
    let links = [
      { name: "Home", link: "/" },
      { name: "Category", link: "/category/:id" },
      { name: "Resources", link: "/sub-section/:id" },
      // { name: "Add Resource", link: "/add-rec" },
    ];

    return {
      links,
      showMenu,
    };
  },
};
</script>
