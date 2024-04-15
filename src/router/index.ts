import { createRouter, createWebHistory } from 'vue-router'
import FrontEndDev from '@/views/FrontEndDev.vue'
import PersonalInformation from '@/views/PersonalInformation.vue'
import GameDev from '@/views/GameDev.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front',
      component: FrontEndDev
    },
    {
      path: '/game-dev',
      name: 'game',
      component: GameDev
    },
    {
      path: '/personal-information',
      name: 'info',
      component: PersonalInformation
    }
  ]
})

export default router
