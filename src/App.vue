<template>
  <div id="app">
    <nav v-if="authStore.isAuthenticated" class="navbar">
      <div class="container d-flex justify-between align-center">
        <router-link to="/" class="nav-brand">SMAN 2 BDL</router-link>
        
        <div class="d-flex gap-10 align-center">
          <router-link to="/" class="nav-link" active-class="active">Dashboard</router-link>
          <router-link to="/materi" class="nav-link" active-class="active">Materi</router-link>
          <router-link to="/tugas" class="nav-link" active-class="active">Tugas</router-link>
          <router-link to="/quiz" class="nav-link" active-class="active">Quiz</router-link>
          <router-link to="/forum" class="nav-link" active-class="active">Forum</router-link>
          
          <div class="d-flex align-center gap-10">
            <router-link to="/profile" class="d-flex align-center gap-5">
              <div class="avatar-sm bg-light rounded" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
                {{ authStore.user?.avatar || '?' }}
              </div>
              <span class="text-sm">{{ authStore.user?.nama.split(' ')[0] }}</span>
            </router-link>
            <button @click="handleLogout" class="btn btn-sm btn-outline">Logout</button>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="container" :class="{ 'mt-20': authStore.isAuthenticated }">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.avatar-sm {
  font-weight: 600;
  font-size: 14px;
}

.gap-5 { gap: 5px; }
</style>