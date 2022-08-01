import { ref } from "vue";
import axios from "axios";
// import { useRouter } from "vue-router";

export default function useCategory(id) {
  const category = ref([]);
  const categories = ref([]);
  // const router = useRouter();
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const getCategory = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/categories/");
    categories.value = response.data;
  };

  const addCategory = async (data) => {
    await axios.post("http://127.0.0.1:8000/api/categories/add/", data, config);
    // await router.push({ name: "categories.index" });
  };

  const destroyCategory = async (ids) => {
    await axios.post("http://127.0.0.1:8000/api/categories/delete/" + ids);
  };

  const getCategoryEdit = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/categories/" + id
    );
    category.value = response.data.data;
  };

  const updateCategory = async (id) => {
    await axios.post(
      "http://127.0.0.1:8000/api/categories/edit/" + id,
      category.value
    );
    // router.push({ name: "categories.index" });
  };

  return {
    category,
    categories,
    getCategory,
    destroyCategory,
    addCategory,
    updateCategory,
    getCategoryEdit,
  };
}
