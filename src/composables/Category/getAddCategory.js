import { ref } from "vue";

const getAddCategory = (id) => {
  const addcategory = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch(
        "" + id
      );
      if (!data.ok) {
        throw Error("no data here");
      } else {
        addcategory.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { addcategory, error, load };
};
export default getAddCategory;