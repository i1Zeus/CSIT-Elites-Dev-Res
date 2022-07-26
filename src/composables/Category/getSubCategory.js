import { ref } from "vue";
import axios from "axios";

export default function useSubCategory(id) {
  const subcategories = ref([]);

  //Fetch||Get Function
  const fetchSubCategory = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/sub-sections/getSubByCategory/` + id
    );
    subcategories.value = response.data;
  };

  //Delete Function
  const dsetroySubCategory = async (ids) => {
    await axios.post(`http://127.0.0.1:8000/api/sub-sections/delete/` + ids);
  };

  //Create Function

  return {
    subcategories,
    fetchSubCategory,
    dsetroySubCategory,
  };
}
