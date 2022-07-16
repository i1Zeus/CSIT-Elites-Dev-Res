import { ref } from "vue";

const getSubCategoryId = (id) => {
  const SubCategoryId = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://localhost:8000/subCategory/" + id);
      if (!data.ok) {
        throw Error("no data here");
      } else {
        SubCategoryId.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { SubCategoryId, error, load };
};
export default getSubCategoryId;
