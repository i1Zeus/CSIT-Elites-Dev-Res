import { ref } from "vue";

const getCategory = () => {
  const categories = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/Category");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        categories.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { categories, error, load };
};
export default getCategory;
