import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true, title: 'Dashboard' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresGuest: true, title: 'Login' }
  },
  {
    path: '/materi',
    name: 'Materi',
    component: () => import('../views/Materi.vue'),
    meta: { requiresAuth: true, title: 'Materi Pembelajaran' }
  },
  {
    path: '/tugas',
    name: 'Tugas',
    component: () => import('../views/Tugas.vue'),
    meta: { requiresAuth: true, title: 'Tugas & Assignment' }
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue'),
    meta: { requiresAuth: true, title: 'Quiz & Ujian' }
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/Forum.vue'),
    meta: { requiresAuth: true, title: 'Forum Diskusi' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true, title: 'Profil Pengguna' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // Set page title
  document.title = to.meta.title 
    ? `${to.meta.title} | SMAN 2 Bandar Lampung` 
    : 'SMAN 2 Bandar Lampung'
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router