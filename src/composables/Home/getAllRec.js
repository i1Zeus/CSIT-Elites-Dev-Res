import { ref } from "vue";
// ======> The Search Function <=====
const getAllRec = () => {
  const AllRec = ref([]);
  const error = ref(null);

  const searchload = async () => {
    try {
      let data = await fetch(
        "http://127.0.0.1:8000/api/resources/getResourcesWithTags"
      );
      if (!data.ok) {
        throw Error("no data here");
      } else {
        AllRec.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { AllRec, searchload };
};
export default getAllRec;
