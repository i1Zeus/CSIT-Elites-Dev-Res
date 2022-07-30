<template>
  <button
    @click.prevent="preformeLogoutAction()"
    class="text-white hover:text-primary-700 border border-primary-700 hover:bg-white bg-primary-700 focus:ring-1 focus:outline-none focus:ring-primary-700 rounded-lg text-md font-semibold px-7 py-2 text-center"
  >
    <p>Logout</p>
  </button>
</template>

<script>
export default {
  data() {
    return {
      token: null,
    };
  },
  mounted() {
    this.checkUserStatus();
  },
  methods: {
    checkUserStatus() {
      if (localStorage.getItem("token") != null) {
        this.token = localStorage.getItem("token");
      }
    },
    preformeLogoutAction() {
      this.$store
        .dispatch("preformeLogoutAction")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
