import { createApp } from "vue";
import App from "./App.vue";
import store from "./stores/store";
import router from "./router";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



/* =======> Here We Add FontAwsome Icons <======= */
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

/* =======> Remember to mention the newest icon in the Library <======= */
library.add(
  faBookOpenReader,
  faPen,
  faAngleRight,
  faSquareXmark,
  faXmark,
  faEllipsisVertical
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount("#app");
