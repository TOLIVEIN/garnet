import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'jquery'
import 'bootstrap/scss/bootstrap.scss'
import './assets/css/stylesheet.scss'
import './assets/css/pure-min.css'
import router from './router/index';

createApp(App).use(router).mount('#app')
