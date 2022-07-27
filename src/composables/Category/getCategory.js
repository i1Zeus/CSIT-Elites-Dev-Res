import { ref } from "vue";
import axios from "axios";

// const getCategory = () => {
//   const categories = ref([]);
//   const error = ref(null);

//   const load = async () => {
//     try {
//       // await new Promise((resolve) => {
//       //     setTimeout(resolve, 2000);
//       // });

//       let data = await fetch("http://127.0.0.1:8000/api/categories");
//       if (!data.ok) {
//         throw Error("no data here");
//       } else {
//         categories.value = await data.json();
//       }
//     } catch (err) {
//       error.value = err.message;
//       console.log(error.value);
//     }
//   };

//   return { categories, error, load };
// };
// export default getCategory;


export default function useCategory(id) {
  const categories = ref([]);
  const category = ref([]);

  //Fetch||Get Function => this must ne categories not category
  const fetchCategory = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/categories` + id
    );
    categories.value = response.data;
  };

  //Get category to edit
  const grapcategory = async (id) => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/categories` + id
    );
    category.value = response.data;
  };

  //Create Function
  const createCategory = async (data) => {
    await axios.post("http://127.0.0.1:8000/api/categories/add", data);
  };

  //Delete Function
  const destroyCategory = async (ids) => {
    await axios.post(`http://127.0.0.1:8000/api/categories/delete` + ids);
  };

  //Update Function
  const updateCategory = async (data) => {
    await axios.post(
      "http://127.0.0.1:8000/api/categories/edit" + data.id,
      data
    ); //data.id is the id of the category
  };

  return {
    categories,
    fetchCategory,
    destroyCategory,
    createCategory,
    updateCategory,
    grapcategory,
  };
}
