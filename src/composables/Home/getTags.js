import { ref } from "vue";
// ======> GET 12 Tags <=====
const getTags = () => {
  const Tags = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://127.0.0.1:8000/api/tags/getTwelveTags");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        Tags.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { Tags, error, load };
};
export default getTags;
