import { createRouter, createWebHashHistory } from 'vue-router'
import CeoView from "../views/CeoView.vue"
import LoginView from "../views/LoginView.vue"
import MainView from "../views/MainView.vue"
import NpcView from "../views/NpcView.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
  },
    {
        path: "/company/:id",
        name: "company",
        component: CeoView
    },
    
    {
        path: "/user",
        name: "user",
        component: NpcView
    }
    
]
})

export default router
