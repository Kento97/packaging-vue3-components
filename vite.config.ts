import {fileURLToPath, URL} from 'url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        eslintPlugin({
            cache: false,
            include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
            exclude:['node_modules']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                /*
                引入var.scss全局预定义变量，
                如果引入多个文件，
                可以使用
                '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
                这种格式
                 */
                additionalData: '@import "@/assets/scss/globalVariable.scss";'
            }
        }
    }
})
