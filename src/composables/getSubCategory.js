import { ref } from "vue";

const getSubCategory = () => {
  const subcategories = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://127.0.0.1:8001/api/sub-sections/getSubSection/1");
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