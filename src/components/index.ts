import type {App} from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import myNotification from "./notification";


const components = [
    chooseArea,
    chooseIcon,
    trend,
    myNotification,
];

export default {
    install(app: App) {
        components.forEach((item) => {
            app.use(item);
        });
    }
};
