import { ref } from "vue";

const getInfo = () => {
  const Info = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/info");
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
