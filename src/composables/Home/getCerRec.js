import { ref } from "vue";
// ======> GET 12 Certified Resources <=====
const getCerRec = () => {
  const CerRec = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //  Suggest to change the url to get the data from the server to => http://127.0.0.1:8000/api/resources/getTwelveResources
      let data = await fetch(
        "http://127.0.0.1:8000/api/resources/getResourcesWithTags"
      );
      if (!data.ok) {
        throw Error("no data here");
      } else {
        CerRec.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { CerRec, error, load };
};
export default getCerRec;
