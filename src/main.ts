import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import * as Icons from "@element-plus/icons-vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
//全局注册icons
for (const name in Icons) {
    if (Reflect.has(Icons, name)) {
        if (name === "Menu") {
            app.component("IconMenu", Icons[name])
        } else {
            app.component(name, (Icons as never)[name])
        }
    }
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
