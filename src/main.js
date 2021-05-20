import { createApp } from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'


const App = createApp(Index)
App.use(store)
App.use(router)
App.mount("#app")
