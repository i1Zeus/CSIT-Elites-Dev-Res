import { ref } from "vue";
import axios from "axios";
// import { useRouter } from "vue-router";

export default function useCategory() {
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

  return {
    categories,
    getCategory,
    destroyCategory,
    addCategory,
  };
}
