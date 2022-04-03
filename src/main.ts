import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import * as Icons from "@element-plus/icons-vue";
import {toLine} from '@/utils';

const app = createApp(App)
//全局注册icons，使用时候可以直接使用<el-icon-xxx/>,为SVG图标
for (let i in Icons) {
    if (Reflect.ownKeys(Icons).includes(i)) {
        app.component(`el-icon${toLine(i)}`, (Icons as any)[i])
    }
}
app.use(createPinia())
app.use(router)

app.mount('#app')
