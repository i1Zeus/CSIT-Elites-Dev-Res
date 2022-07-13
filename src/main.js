import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* Here We Add FontAwsome Icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* Remember to mention the newest icon in the Library */
library.add(faUserSecret);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
