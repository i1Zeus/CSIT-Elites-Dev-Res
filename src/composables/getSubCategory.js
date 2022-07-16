import { ref } from "vue";

const getSubCategory = () => {
  const subcategories = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/subCategory");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        subcategories.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { subcategories, error, load };
};
export default getSubCategory;