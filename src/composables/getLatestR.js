import { ref } from "vue";

const getLatestRes = (id) => {
  const latestR = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/Resourse/" + id);
      if (!data.ok) {
        throw Error("no data here");
      } else {
        latestR.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { latestR, error, load };
};
export default getLatestRes;
