import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)
  const userRole = computed(() => user.value?.role || null)

  // Data dummy users dengan domain @smandabdl.sch.id
  const demoUsers = [
    {
      id: 1,
      email: 'siswa@smandabdl.sch.id',
      password: 'siswa123',
      nama: 'Andi Pratama',
      nis: '202312345',
      kelas: 'XII IPA 1',
      role: 'siswa',
      avatar: 'AP'
    },
    {
      id: 2,
      email: 'guru.matematika@smandabdl.sch.id',
      password: 'guru123',
      nama: 'Budi Santoso, S.Pd',
      nip: '198012345',
      mapel: 'Matematika',
      role: 'guru',
      avatar: 'BS'
    },
    {
      id: 3,
      email: 'guru.ipa@smandabdl.sch.id',
      password: 'guru123',
      nama: 'Siti Rahayu, M.Pd',
      nip: '198512678',
      mapel: 'IPA',
      role: 'guru',
      avatar: 'SR'
    },
    {
      id: 4,
      email: 'admin@smandabdl.sch.id',
      password: 'admin123',
      nama: 'Admin Sekolah',
      role: 'admin',
      avatar: 'AD'
    },
    {
      id: 5,
      email: 'budi.siswa@smandabdl.sch.id',
      password: 'budi123',
      nama: 'Budi Siswanto',
      nis: '202312678',
      kelas: 'XI IPS 2',
      role: 'siswa',
      avatar: 'BS'
    }
  ]

  function login(email, password) {
    // Normalize email (lowercase, trim)
    const normalizedEmail = email.toLowerCase().trim()
    
    // Cari user di data dummy
    const foundUser = demoUsers.find(u => 
      u.email === normalizedEmail && u.password === password
    )
    
    if (foundUser) {
      // Simpan user tanpa password
      const { password: _, ...userData } = foundUser
      user.value = userData
      
      // Simpan ke localStorage untuk persist
      localStorage.setItem('smanda_user', JSON.stringify(userData))
      
      return { success: true, user: userData }
    }
    
    return { success: false, error: 'Email atau password salah' }
  }

  function logout() {
    user.value = null
    localStorage.removeItem('smanda_user')
  }

  function initialize() {
    // Cek apakah ada user di localStorage
    const savedUser = localStorage.getItem('smanda_user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  return {
    user,
    isAuthenticated,
    userRole,
    demoUsers, // Export untuk keperluan demo
    login,
    logout,
    initialize
  }
})