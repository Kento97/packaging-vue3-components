import type {App} from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import myNotification from "./notification";
import myList from "./list";
import myMenu from "./menu";
import myInfiniteMenu from "./menu/src/menu.js";


const components = [
    chooseArea,
    chooseIcon,
    trend,
    myNotification,
    myList,
    myMenu,
];

export default {
    install(app: App) {
        components.forEach((item) => {
            app.use(item);
        });
    }
};
