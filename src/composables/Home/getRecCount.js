import { ref } from "vue";
// =====> GET Resources Count <=====
const getRecCou = () => {
  const RecCou = ref('');
  const error1 = ref(null);

  const load1 = async () => {
    try {
      // await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      // });

      let data = await fetch("http://127.0.0.1:8000/api/resources");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        RecCou.value = await data.json();
      }
    } catch (err) {
      error1.value = err.message;
      console.log(error1.value);
    }
  };
  return { RecCou, error1, load1 };
};
export default getRecCou;
