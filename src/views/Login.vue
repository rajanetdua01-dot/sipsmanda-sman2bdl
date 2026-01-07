<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Header -->
      <div class="login-header mb-20">
        <div class="school-logo">
          <div class="logo-icon"></div>
          <div class="logo-text">
            <h1>SMAN 2</h1>
            <p class="text-sm text-muted">BANDAR LAMPUNG</p>
          </div>
        </div>
        <p class="text-center text-muted mt-10">Sistem Informasi Pembelajaran</p>
      </div>

      <!-- Demo Banner (Minimal) -->
      <div class="demo-notice mb-15">
        <span class="demo-badge">DEMO</span>
        <span class="text-sm text-muted">Versi demonstrasi - Gunakan akun demo di bawah</span>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="error-message mb-15">
        <div class="error-icon">!</div>
        <div>{{ error }}</div>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label class="form-label">Email Sekolah</label>
          <div class="input-group">
            <input 
              v-model="email"
              type="email" 
              class="form-control" 
              placeholder="anda@smandabdl.sch.id"
              required
            >
            <div class="input-helper">
              <span class="text-xs text-muted">@smandabdl.sch.id</span>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Password</label>
          <div class="input-group">
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="form-control" 
              placeholder="••••••••"
              required
            >
            <button 
              type="button" 
              class="password-toggle"
              @click="togglePassword"
              :title="showPassword ? 'Sembunyikan password' : 'Tampilkan password'"
            >
              <span class="toggle-icon">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
            </button>
          </div>
        </div>

        <button type="submit" class="btn-login" :disabled="loading">
          <span v-if="loading" class="login-loading">
            <span class="spinner"></span>
            <span>Memproses...</span>
          </span>
          <span v-else>Masuk ke Sistem</span>
        </button>
      </form>

      <!-- Quick Login (Demo Accounts) -->
      <div class="quick-login mt-20">
        <p class="text-center text-muted mb-10">Login cepat dengan akun demo:</p>
        
        <div class="demo-accounts">
          <button 
            v-for="account in demoAccounts" 
            :key="account.role"
            @click="fillDemo(account)"
            class="demo-account-btn"
            :class="`role-${account.role}`"
          >
            <div class="demo-account-icon">{{ account.icon }}</div>
            <div class="demo-account-info">
              <div class="demo-account-role">{{ account.roleLabel }}</div>
              <div class="demo-account-email">{{ account.email }}</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div class="login-footer mt-20">
        <p class="text-xs text-center text-muted">
          &copy; 2026 SMAN 2 Bandar Lampung. Sistem demonstrasi pembelajaran digital.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')
const loading = ref(false)

const demoAccounts = [
  {
    role: 'siswa',
    roleLabel: 'Siswa',
    email: 'siswa@smandabdl.sch.id',
    password: 'siswa123',
  },
  {
    role: 'guru',
    roleLabel: 'Guru',
    email: 'guru.matematika@smandabdl.sch.id',
    password: 'guru123',
  },
  {
    role: 'admin',
    roleLabel: 'Administrator',
    email: 'admin@smandabdl.sch.id',
    password: 'admin123',
  }
]

function fillDemo(account) {
  email.value = account.email
  password.value = account.password
  error.value = ''
  // Auto submit setelah 500ms
  setTimeout(() => {
    if (email.value && password.value) {
      handleLogin()
    }
  }, 500)
}

function togglePassword() {
  showPassword.value = !showPassword.value
}

async function handleLogin() {
  error.value = ''
  loading.value = true
  
  // Validasi domain email
  if (!email.value.toLowerCase().endsWith('@smandabdl.sch.id')) {
    error.value = 'Harus menggunakan email sekolah (@smandabdl.sch.id)'
    loading.value = false
    return
  }
  
  // Simulasi loading
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const result = authStore.login(email.value, password.value)
  
  if (result.success) {
    router.push('/')
  } else {
    error.value = result.error
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 40px;
  width: 100%;
  max-width: 420px;
  border: 1px solid var(--border);
}

/* Header */
.login-header {
  text-align: center;
}

.school-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.logo-icon {
  font-size: 48px;
  color: var(--primary);
}

.logo-text h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--dark);
}

/* Demo Notice */
.demo-notice {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.demo-badge {
  background-color: var(--primary);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Error Message */
.error-message {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #991b1b;
  font-size: 14px;
}

.error-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ef4444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
}

/* Form Styles */
.login-form {
  margin-top: 30px;
}

.input-group {
  position: relative;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 15px;
  font-family: var(--font-main);
  transition: all 0.2s;
  background-color: white;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input-helper {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--secondary);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-toggle:hover {
  color: var(--primary);
}

.toggle-icon {
  font-family: 'Material Icons';
  font-size: 20px;
}

/* Login Button */
.btn-login {
  width: 100%;
  padding: 14px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;
}

.btn-login:hover:not(:disabled) {
  background-color: var(--primary-dark);
}

.btn-login:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Quick Login */
.quick-login {
  border-top: 1px solid var(--border);
  padding-top: 20px;
}

.demo-accounts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-account-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  width: 100%;
}

.demo-account-btn:hover {
  border-color: var(--primary);
  background-color: #f8fafc;
}

.demo-account-btn.role-siswa:hover {
  border-color: var(--primary);
}

.demo-account-btn.role-guru:hover {
  border-color: var(--success);
}

.demo-account-btn.role-admin:hover {
  border-color: var(--warning);
}

.demo-account-icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-account-info {
  flex: 1;
}

.demo-account-role {
  font-weight: 600;
  font-size: 14px;
  color: var(--dark);
}

.demo-account-email {
  font-size: 12px;
  color: var(--secondary);
  font-family: var(--font-mono);
}

/* Footer */
.login-footer {
  border-top: 1px solid var(--border);
  padding-top: 20px;
}

/* Responsive */
@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }
  
  .school-logo {
    flex-direction: column;
    text-align: center;
  }
  
  .logo-icon {
    font-size: 40px;
  }
  
  .logo-text h1 {
    font-size: 24px;
  }
}

/* Material Icons font (fallback) */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
</style>

<!-- Fallback CSS untuk material icons jika font tidak load -->
<style>
.toggle-icon {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 18px;
}

.toggle-icon::before {
  content: '👁️';
}

.toggle-icon[style*="visibility_off"]::before {
  content: '🙈';
}
</style>