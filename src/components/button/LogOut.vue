<template>
  <button
    @click.prevent="preformeLogoutAction()"
    class="bg-transparent border-2 border-transparent hover:bg-black border-b-white border-l-white hover:border-white text-white hover:rounded font-semibold mt-3 ml-2 py-1.5 px-8 duration-200"
  >
    <p>logout</p>
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
