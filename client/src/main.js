import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Login,
      name: 'Login'
    },
    {
      path: "/inscription",
      component: Register,
      name: 'Register'
    },
    {
      path: "/home",
      component: Home,
      name: 'Home'
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      name: 'NotFound'
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
