import { ref } from "vue";

const getLogin = () => {
  const Login = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/Login");
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
