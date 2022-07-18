import { ref } from "vue";

const getResource = () => {
  const resource = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/Resourse");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        resource.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { resource, error, load };
};
export default getResource;
