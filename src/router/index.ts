import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PortfolioForClient from '../pages/PortfolioForClient.vue'
import settingsAccount from "../pages/settingsAccount.vue"
import PortfolioForMaster from "../pages/PortfolioForMaster.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/PortfolioForClient/:rid',
      name: 'PortfolioForClient',
      component: PortfolioForClient
    },
    {
      path: '/settingsAccount',
      name: 'settingsAccount',
      component: settingsAccount
    },
    {
      path: '/PortfolioForMaster',
      name: 'PortfolioForMaster',
      component: PortfolioForMaster
    },
    
  ]
})

export default router
