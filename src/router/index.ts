import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PortfolioForClient from '../pages/PortfolioForClient.vue'
import settingsAccount from "../pages/settingsAccount.vue"
import PortfolioForMaster from "../pages/PortfolioForMaster.vue"
import HistoryOfOrders from '../pages/HistoryOfOrders.vue'
import settingsAccountIsp from '../pages/settingsAccountIsp.vue'

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
    {
      path: '/HistoryOfOrders',
      name: 'HistoryOfOrders',
      component: HistoryOfOrders
    },
    {
      path: '/settingsAccountIsp',
      name: 'settingsAccountIsp',
      component: settingsAccountIsp
    },
    
  ]
})

export default router
