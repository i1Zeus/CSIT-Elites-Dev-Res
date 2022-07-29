import { ref } from "vue";
// ======> GET 12 Certified Resources <=====
const getAllRes = () => {
  const allRes = ref([]);
  const errorAll = ref(null);

  const loadRes = async () => {
    try {
      //  Suggest to change the url to get the data from the server to => http://127.0.0.1:8000/api/resources/getTwelveResources
      let data = await fetch("http://127.0.0.1:8000/api/resources/getAllResources"
      );
      if (!data.ok) {
        throw Error("no data here");
      } else {
        allRes.value = await data.json();
      }
    } catch (err) {
      errorAll.value = err.message;
      console.log(errorAll.value);
    }
  };
  return { allRes, errorAll, loadRes };
};
export default getAllRes;
