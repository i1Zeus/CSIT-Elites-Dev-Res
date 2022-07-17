import { ref } from "vue";

const getLogininfo = () => {
  const Logininfo = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/Logininfo");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        Logininfo.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { Logininfo, error, load };
};
export default getLogininfo;
