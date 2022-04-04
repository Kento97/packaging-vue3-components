import type {App} from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";


const components = [
    chooseArea,
    chooseIcon
];

export default {
    install(app: App) {
        components.forEach((item) => {
            app.use(item);
        });
    }
};
