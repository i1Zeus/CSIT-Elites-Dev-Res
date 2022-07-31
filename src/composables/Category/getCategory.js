import { ref } from "vue";
import axios from "axios";

export default function useCategory() {
  const categories = ref([]);
  // const category = ref([]);

  const getCategory = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/categories/");
    categories.value = response.data;
  };

  const destroyCategory = async (ids) => {
    await axios.post("http://127.0.0.1:8000/api/categories/delete/" + ids);
  };

  return {
    categories,
    getCategory,
    destroyCategory,
  };
}
