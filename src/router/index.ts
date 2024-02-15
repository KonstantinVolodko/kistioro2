import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PortfolioForClient from '../pages/PortfolioForClient.vue'
import settingsAccount from "../pages/settingsAccount.vue"
import PortfolioForMaster from "../pages/PortfolioForMaster.vue"
import HistoryOfOrders from '../pages/HistoryOfOrders.vue'
import settingsAccountIsp from '../pages/settingsAccountIsp.vue'
import registerPage from '../pages/RegisterPage.vue'
import RegisterPageSettings from '../pages/RegisterPageSettings.vue'
import OrderFeed from '../pages/OrderFeed.vue'
import FAQ from '../pages/FAQ.vue'
import warningPage from '../pages/404.vue'

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
    {
      path: '/registerPage',
      name: 'registerPage',
      component: registerPage
    },
    {
      path: '/RegisterPageSettings',
      name: 'RegisterPageSettings',
      component: RegisterPageSettings
    },
    {
      path: '/OrderFeed',
      name: 'OrderFeed',
      component: OrderFeed
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/404',
      name: '404',
      component: warningPage
    }

    
  ]
})

export default router
