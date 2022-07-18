import { ref } from "vue";

const getLogin = () => {
  const Login = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://127.0.0.1:8000/api/auth/login");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        Login.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { Login, error, load };
};
export default getLogin;
