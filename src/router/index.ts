import { createWebHistory, createRouter } from 'vue-router'
import InformationView from '@/views/information/InformationView.vue'
import WorkView from '@/views/work/WorkView.vue'
import ProjectsView from '@/views/projects/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'Information',
    component: InformationView
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
