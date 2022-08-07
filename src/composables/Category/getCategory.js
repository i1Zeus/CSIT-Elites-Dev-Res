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

  // const data = new FormData();
  // data.append("name", category.value.name);
  // data.append("image", category.value.imageFile);

  // const imageFile = ref("");
  // const imageUrl = ref("");
  // const images = ref([]);
  // const message = ref([]);

  const getCategory = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/categories/");
    categories.value = response.data;
  };

  const addCategory = async (adddata) => {
    await axios.post(
      "http://127.0.0.1:8000/api/categories/add/",
      adddata,
      config
    );
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

  const updateCategory = async () => {
    await axios.post("http://127.0.0.1:8000/api/categories/edit/" + id, config);
    // .then((response) => {
    //   imageUrl.value = "";
    //   imageFile.value = "";
    //   message.value = response.data.message;
    //   images.value = response.data.data.images;
    // });
  };

  // function handleImageSelected(event) {
  //   if (event.target.files.length === 0) {
  //     imageFile.value = "";
  //     imageUrl.value = "";
  //     return;
  //   }

  //   imageFile.value = event.target.files[0];
  // }

  // watch(imageFile, (imageFile) => {
  //   if (!(imageFile instanceof File)) {
  //     return;
  //   }

  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(imageFile);

  //   fileReader.addEventListener("load", () => {
  //     imageUrl.value = fileReader.result;
  //   });
  // });

  return {
    category,
    categories,
    getCategory,
    destroyCategory,
    addCategory,
    updateCategory,
    getCategoryEdit,
    // handleImageSelected,
    // imageUrl,
    // imageFile,
  };
}
