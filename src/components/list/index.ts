import list from "./src/index.vue";
import type {App} from "vue";

export default {
    install(app: App) {
        app.component('my-list', list);
    }
};
