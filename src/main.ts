import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

//Bootstrap5
import "startbootstrap-sb-admin/src/scss/styles.scss";

//アイコンをライブラリに追加し、DOM経由で参照できるようにする
library.add(fas);
dom.watch();

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
