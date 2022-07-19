import { ref } from "vue";

const getInfo = () => {
  const Info = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://127.0.0.1:8000/api/tags/");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        Info.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { Info, error, load };
};
export default getInfo;
