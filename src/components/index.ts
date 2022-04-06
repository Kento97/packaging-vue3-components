import type {App} from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import myNotification from "./notification";
import myList from "./list";
import myMenu from "./menu";
import progress from "./progress";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";
import chooseCity from "./chooseCity";


const components = [
    chooseArea,
    chooseIcon,
    trend,
    myNotification,
    myList,
    myMenu,
    progress,
    chooseTime,
    chooseDate,
    chooseCity
];

export default {
    install(app: App) {
        components.forEach((item) => {
            app.use(item);
        });
    }
};
