import { ref } from "vue";
import axios from "axios";

export default function useSubCategory(id) {
  const subcategories = ref([]);
  const subcategory = ref([]);

  //Fetch||Get Function => this must ne subcategories not subcategory
  const fetchSubCategory = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/sub-sections/getSubByCategory/` + id
    );
    subcategories.value = response.data;
  };

  //Get subcategory to edit
  const grapsubcategory = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/sub-sections/getSubSection/` + id
    );
    subcategory.value = response.data.data;
  };

  //Create Function
  const createSubCategory = async (data) => {
    await axios.post("http://127.0.0.1:8000/api/sub-sections/add", data);
  };

  //Delete Function
  const dsetroySubCategory = async (ids) => {
    await axios.post(`http://127.0.0.1:8000/api/sub-sections/delete/` + ids);
  };

  //Update Function
  const updateSubCategory = async (id) => {
    await axios.post(
      "http://127.0.0.1:8000/api/sub-sections/update/" + id,
      subcategory.value
    ); //data.id is the id of the sub-category
  };

  return {
    subcategories,
    fetchSubCategory,
    dsetroySubCategory,
    createSubCategory,
    updateSubCategory,
    grapsubcategory,
    subcategory
  };
}
