import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";

const store = createPinia();

// create app that joins everything together
createApp(App).use(router).use(store).mount("#app");
