import { createApp } from 'vue'
import App from './App.vue'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'

import router from './router'
const app = createApp(App)
app.use(VueCollapsiblePanel)
app.use(router)
app.mount("#app")


