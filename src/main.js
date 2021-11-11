import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// npm i -D sass sass-loader
import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'

// npm install swiper vue-awesome-swiper --save
// npm install vue-awesome-swiper@3.1.3 --save
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// import Swiper, {Navigation, Pagination} from 'vue-awesome-swiper'
// Swiper.use([Navigation, Pagination])

import Card from './components/Card.vue'
Vue.component('m-card', Card)
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
