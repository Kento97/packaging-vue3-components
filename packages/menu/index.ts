import menu from "./src/index.vue";
import type {App} from "vue";
import infiniteMenu from './src/menu';

export default {
    install(app: App) {
        app.component('my-menu', menu);
        app.component('my-infinite-menu', infiniteMenu);
    }
};
