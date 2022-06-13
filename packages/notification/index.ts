import notification from "./src/index.vue";
import type {App} from "vue";

export default {
    install(app: App) {
        app.component('my-notification', notification);
    }
};
