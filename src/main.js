import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/styles.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
