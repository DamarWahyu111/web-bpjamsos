<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <img src="../assets/logoBPJAMSOSTEK.png?height=60&width=60" alt="BPJS Logo" class="mx-auto h-15 w-15">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Daftar Akun Baru</h2>
        <p class="mt-2 text-sm text-gray-600">
          Atau 
          <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500">
            login ke akun yang sudah ada
          </router-link>
        </p>
      </div>

      <form @submit.prevent="handleRegister" class="mt-8 space-y-6">
        <div class="space-y-4">
          <div>
            <label for="fullName" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              id="fullName"
              v-model="form.fullName"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan nama lengkap"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan email Anda"
            >
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan password"
            >
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="form.confirmPassword"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Konfirmasi password"
            >
          </div>

          <div v-if="passwordMismatch" class="text-red-500 text-sm">
            Password dan konfirmasi password tidak cocok
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="agree-terms"
            name="agree-terms"
            type="checkbox"
            v-model="form.agreeToTerms"
            required
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          >
          <label for="agree-terms" class="ml-2 block text-sm text-gray-900">
            Saya setuju dengan 
            <a href="#" class="text-blue-600 hover:text-blue-500">syarat dan ketentuan</a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading || passwordMismatch || !form.agreeToTerms"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {{ loading ? 'Loading...' : 'Daftar' }}
          </button>
        </div>

        <div class="text-center">
          <router-link to="/" class="text-sm text-blue-600 hover:text-blue-500">
            ← Kembali ke beranda
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../api.js'

const router = useRouter()

const form = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

const loading = ref(false)

const passwordMismatch = computed(() => {
  return form.value.password !== form.value.confirmPassword && form.value.confirmPassword.length > 0
})

const handleRegister = async () => {
  if (passwordMismatch.value) return
  
  loading.value = true
  try {
    const response = await register(form.value)
    console.log('Registration successful:', response)
    alert('Registrasi berhasil! Silakan login dengan akun Anda.')
    router.push('/login')
  } catch (error) {
    console.error('Registration failed:', error)
    alert('Registrasi gagal. Silakan coba lagi.')
  } finally {
    loading.value = false
  }
}
</script>
