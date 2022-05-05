import { createRouter, createWebHashHistory } from "vue-router";

import Connection from "@/views/Connection.vue";
import Register from "@/views/Register.vue";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Connection",
    component: Connection,
    meta: {
      title: 'Connexion'
    }
  },
  {
    path: "/inscription",
    name: "Register",
    component: Register,
    meta: {
      title: 'Inscription'
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: 'A propos'
    }
  },
  {
    path: "/home",
    name: "Home",
    props: true,
    component: Home,
    meta: {
      title : 'Accueil'
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
    meta: {
      title: '404'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})

export default router;