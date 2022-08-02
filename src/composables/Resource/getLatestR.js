import axios from "axios";
import { ref } from "vue";

export default function useResource(id) {
  const resources = ref([]);
  const fetchResource = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/resources/getResourceById/" + id
    );
    resources.value = response.data;
  };
  //delete resource
  const destroyResource = async (ids) => {
    await axios.post("http://127.0.0.1:8000/api/resources/delete/" + ids);
  };

  // Update function
  const updateResource = async (id) => {
    await axios.post("http://127.0.0.1:8000/api/resources/update/" + id);
  };

  return { resources, fetchResource, destroyResource, updateResource };
}
