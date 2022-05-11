import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-toast-notification/dist/theme-sugar.css';

import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Profile from './views/Profile.vue'
import Dashboard from './views/Dashboard.vue'
import VueToast from 'vue-toast-notification';
Vue.config.productionTip = false

Vue.use(VueToast);
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

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
      path: "/home/:id",
      component: Home,
      name: 'Home'
    },
    {
      path: "/profile",
      component: Profile,
      name: 'Profile'
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: 'Dashboard'
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
