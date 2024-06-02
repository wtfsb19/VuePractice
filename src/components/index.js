import ImageView from './ImageView/index.vue'
import SKU from './SKU/index.vue'

export const componentPlugin = {
    install(app) {
        // 注册组件
        app.component('ImageView', ImageView)
        app.component('SKU', SKU)
    }
}