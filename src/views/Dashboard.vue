<template>
  <div>
    <!-- Header dengan user info -->
    <div class="d-flex justify-between align-center mb-20">
      <div>
        <h1>Dashboard</h1>
        <p class="text-muted">
          Selamat datang, {{ authStore.user?.nama || 'Pengguna' }}
          <span v-if="authStore.user?.kelas" class="badge badge-primary ml-10">
            {{ authStore.user.kelas }}
          </span>
          <span v-if="authStore.user?.mapel" class="badge badge-success ml-10">
            Guru {{ authStore.user.mapel }}
          </span>
          <span v-if="authStore.userRole === 'admin'" class="badge badge-warning ml-10">
            Administrator
          </span>
        </p>
      </div>
      
      <!-- Action buttons berdasarkan role -->
      <div class="d-flex gap-10">
        <div v-if="authStore.userRole === 'guru'" class="d-flex gap-10">
          <button class="btn btn-primary btn-sm" @click="showCreateMaterial = true">
            + Materi
          </button>
          <button class="btn btn-outline btn-sm" @click="showCreateAssignment = true">
            + Tugas
          </button>
        </div>
        
        <div v-if="authStore.userRole === 'admin'" class="d-flex gap-10">
          <button class="btn btn-primary btn-sm">+ User</button>
          <button class="btn btn-outline btn-sm">Report</button>
        </div>
        
        <div class="text-muted text-sm">
          {{ currentDate }}
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="d-flex flex-wrap gap-20 mb-20">
      <div class="card" style="flex: 1; min-width: 200px;">
        <div class="d-flex justify-between align-center mb-10">
          <h4 class="text-muted mb-0">Materi</h4>
          <div class="text-primary" style="font-size: 24px;">📚</div>
        </div>
        <h2>{{ stats.materi }}</h2>
        <p class="text-sm">{{ authStore.userRole === 'guru' ? 'Dibuat' : 'Tersedia' }}</p>
      </div>
      
      <div class="card" style="flex: 1; min-width: 200px;">
        <div class="d-flex justify-between align-center mb-10">
          <h4 class="text-muted mb-0">Tugas</h4>
          <div class="text-danger" style="font-size: 24px;">📝</div>
        </div>
        <h2>{{ stats.tugas }}</h2>
        <p class="text-sm">{{ authStore.userRole === 'guru' ? 'Diberikan' : 'Aktif' }}</p>
      </div>
      
      <div class="card" style="flex: 1; min-width: 200px;">
        <div class="d-flex justify-between align-center mb-10">
          <h4 class="text-muted mb-0">Quiz</h4>
          <div class="text-success" style="font-size: 24px;">🎯</div>
        </div>
        <h2>{{ stats.quiz }}</h2>
        <p class="text-sm">{{ authStore.userRole === 'guru' ? 'Dibuat' : 'Tersedia' }}</p>
      </div>
      
      <div class="card" style="flex: 1; min-width: 200px;">
        <div class="d-flex justify-between align-center mb-10">
          <h4 class="text-muted mb-0">Nilai</h4>
          <div class="text-warning" style="font-size: 24px;">📊</div>
        </div>
        <h2>{{ stats.nilai }}</h2>
        <p class="text-sm">Rata-rata</p>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="d-flex flex-wrap gap-20">
      <!-- Left Column: Activities -->
      <div class="card" style="flex: 2; min-width: 300px;">
        <div class="card-header p-0 mb-10 d-flex justify-between align-center">
          <h3 class="mb-0">Aktivitas Terbaru</h3>
          <select v-model="activityFilter" class="form-control" style="width: auto; padding: 4px 8px;">
            <option value="all">Semua</option>
            <option value="materi">Materi</option>
            <option value="tugas">Tugas</option>
            <option value="quiz">Quiz</option>
          </select>
        </div>
        
        <div>
          <div v-for="activity in filteredActivities" :key="activity.id" 
               class="d-flex justify-between align-center mb-10 p-10 rounded hover-bg">
            <div class="d-flex gap-10 align-center">
              <div :class="`activity-icon ${activity.type}`">
                {{ activity.icon }}
              </div>
              <div>
                <div class="font-medium">{{ activity.title }}</div>
                <div class="text-sm text-muted">{{ activity.description }}</div>
              </div>
            </div>
            <div class="text-sm text-muted">{{ activity.time }}</div>
          </div>
          
          <div v-if="filteredActivities.length === 0" class="text-center p-20 text-muted">
            Tidak ada aktivitas
          </div>
        </div>
      </div>

      <!-- Right Column: Quick Actions & Announcements -->
      <div style="flex: 1; min-width: 250px;">
        <!-- Quick Actions -->
        <div class="card mb-20">
          <div class="card-header p-0 mb-10">
            <h3 class="mb-0">Navigasi Cepat</h3>
          </div>
          <div class="d-flex flex-wrap gap-10">
            <router-link to="/materi" class="btn btn-outline" style="flex: 1; min-width: 100px;">
              📚 Materi
            </router-link>
            <router-link to="/tugas" class="btn btn-outline" style="flex: 1; min-width: 100px;">
              📝 Tugas
            </router-link>
            <router-link to="/quiz" class="btn btn-outline" style="flex: 1; min-width: 100px;">
              🎯 Quiz
            </router-link>
            <router-link to="/forum" class="btn btn-outline" style="flex: 1; min-width: 100px;">
              💬 Forum
            </router-link>
          </div>
        </div>

        <!-- Announcements -->
        <div class="card">
          <div class="card-header p-0 mb-10 d-flex justify-between align-center">
            <h3 class="mb-0">Pengumuman</h3>
            <span class="badge badge-primary">{{ announcements.length }}</span>
          </div>
          
          <div>
            <div v-for="announcement in announcements" :key="announcement.id" 
                 class="mb-15 p-10 rounded bg-light">
              <div class="d-flex justify-between align-center mb-5">
                <strong>{{ announcement.title }}</strong>
                <span class="badge" :class="`badge-${announcement.type}`">
                  {{ announcement.type }}
                </span>
              </div>
              <p class="text-sm mb-5">{{ announcement.message }}</p>
              <div class="text-sm text-muted">{{ announcement.date }}</div>
            </div>
            
            <div v-if="announcements.length === 0" class="text-center p-10 text-muted">
              Tidak ada pengumuman
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals (akan diimplementasikan nanti) -->
    <div v-if="showCreateMaterial" class="modal-overlay">
      <!-- Modal untuk buat materi -->
    </div>
    
    <div v-if="showCreateAssignment" class="modal-overlay">
      <!-- Modal untuk buat tugas -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const activityFilter = ref('all')
const showCreateMaterial = ref(false)
const showCreateAssignment = ref(false)

// Stats berdasarkan role user
const stats = ref({
  materi: authStore.userRole === 'guru' ? 8 : 12,
  tugas: authStore.userRole === 'guru' ? 5 : 3,
  quiz: authStore.userRole === 'guru' ? 3 : 2,
  nilai: authStore.userRole === 'siswa' ? 85 : '-'
})

// Data aktivitas
const activities = ref([
  { id: 1, type: 'materi', icon: '📚', title: 'Matematika - Bab 4', description: 'Kalkulus Dasar', time: '2 jam lalu' },
  { id: 2, type: 'tugas', icon: '📝', title: 'Tugas IPA', description: 'Deadline besok', time: 'Hari ini' },
  { id: 3, type: 'quiz', icon: '🎯', title: 'Quiz Sejarah', description: 'Telah diselesaikan', time: 'Kemarin' },
  { id: 4, type: 'materi', icon: '📚', title: 'Bahasa Indonesia', description: 'Struktur Teks', time: '2 hari lalu' },
  { id: 5, type: 'tugas', icon: '📝', title: 'Makalah Sejarah', description: 'Dikumpulkan', time: '3 hari lalu' }
])

// Data pengumuman
const announcements = ref([
  { id: 1, type: 'info', title: 'Libur Semester', message: 'Libur semester ganjil dimulai 20 Desember 2025', date: '5 Jan 2026' },
  { id: 2, type: 'warning', title: 'Perbaikan Sistem', message: 'Akan ada maintenance sistem hari Sabtu', date: '4 Jan 2026' },
  { id: 3, type: 'success', title: 'Juara Olimpiade', message: 'Siswa SMAN 2 juara olimpiade matematika', date: '3 Jan 2026' }
])

// Filter aktivitas berdasarkan pilihan
const filteredActivities = computed(() => {
  if (activityFilter.value === 'all') {
    return activities.value
  }
  return activities.value.filter(activity => activity.type === activityFilter.value)
})

// Tanggal saat ini
const currentDate = computed(() => {
  const now = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return now.toLocaleDateString('id-ID', options)
})

// Load data berdasarkan role user
onMounted(() => {
  // Jika guru, ubah stats
  if (authStore.userRole === 'guru') {
    activities.value.unshift({
      id: 6,
      type: 'materi',
      icon: '📚',
      title: 'Materi Baru Dibuat',
      description: 'Fisika Kuantum - Bab 1',
      time: 'Baru saja'
    })
  }
  
  // Jika admin, tambah pengumuman
  if (authStore.userRole === 'admin') {
    announcements.value.unshift({
      id: 4,
      type: 'warning',
      title: 'Update Sistem',
      message: 'Harap backup data sebelum update',
      date: 'Hari ini'
    })
  }
})
</script>

<style scoped>
.ml-10 { margin-left: 10px; }
.hover-bg:hover { background-color: var(--light); }

.activity-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.activity-icon.materi { background-color: #dbeafe; color: var(--primary); }
.activity-icon.tugas { background-color: #fee2e2; color: var(--danger); }
.activity-icon.quiz { background-color: #d1fae5; color: var(--success); }

.font-medium { font-weight: 500; }

/* Badge colors */
.badge-info { background-color: #dbeafe; color: var(--primary); }
.badge-warning { background-color: #fef3c7; color: #92400e; }
.badge-success { background-color: #d1fae5; color: #065f46; }

/* Modal overlay (placeholder) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
</style>