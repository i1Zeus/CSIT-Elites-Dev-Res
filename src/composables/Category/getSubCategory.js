import { ref } from "vue";
import axios from "axios";

export default function useSubCategory(id) {
  const subcategories = ref([]);

  //Fetch||Get Function
  const fetchSubCategory = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/sub-sections/getSubByCategory/` +id 
    );
    subcategories.value = response.data;
  };

  //Delete Function
  const dsetroySubCategory = async () => {
    await axios.delete(`http://127.0.0.1:8000/api/sub-sections/delete/`+id);
  };
  return {
    subcategories,
    fetchSubCategory,
    dsetroySubCategory,
  };
}
