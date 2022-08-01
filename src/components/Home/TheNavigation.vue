<template>
  <div
    class="fixed w-full z-50 bg-gray-100 md:py-3 px-6 md:flex justify-between items-center"
  >
    <div class="flex items-center invisible md:visible font-bold">
      <span class="text-primary-700 text-xl md:text-3xl lg:text-4xl ml-10">
        CSIT Elite Dev Resources
      </span>
    </div>

    <ul class="flex justify-between md:items-center">
      <li class="md:mx-4" v-for="link in links" :key="link.name">
        <a :href="link.link" class="text-xl hover:text-primary-600">
          {{ link.name }}
        </a>
      </li>
      <router-link class="mb-3 ml-1" to="/login">
        <button 
          v-if="!loggedIn"
          class="text-white hover:text-primary-700 border border-primary-700 hover:bg-white bg-primary-700 focus:ring-1 focus:outline-none focus:ring-primary-700 rounded-lg text-md font-semibold px-7 py-2 text-center"
        >
          <p>Login</p>
        </button>
        <LogOut v-else />
      </router-link>
    </ul>
  </div>
</template>

<script>
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
    let links = [
      { name: "Home", link: "/" },
      { name: "Category", link: "/category/:id" },
      { name: "Resources", link: "/sub-section/:id" },
      // { name: "Add Resource", link: "/add-rec" },
    ];

    return {
      links,
    };
  },
};
</script>
