<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg max-w-md w-full p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Register</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
          <input
            type="text"
            id="fullName"
            v-model="form.fullName"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama lengkap"
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan email Anda"
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan password"
          >
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Konfirmasi password"
          >
        </div>

        <div v-if="passwordMismatch" class="text-red-500 text-sm">
          Password dan konfirmasi password tidak cocok
        </div>

        <div class="flex items-center">
          <input type="checkbox" id="terms" v-model="form.agreeToTerms" required class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
          <label for="terms" class="ml-2 text-sm text-gray-600">
            Saya setuju dengan <a href="#" class="text-blue-600 hover:text-blue-800">syarat dan ketentuan</a>
          </label>
        </div>

        <button
          type="submit"
          :disabled="loading || passwordMismatch || !form.agreeToTerms"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {{ loading ? 'Loading...' : 'Daftar' }}
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Sudah punya akun? 
          <button @click="switchToLogin" class="text-blue-600 hover:text-blue-800 font-medium">
            Login sekarang
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { register } from '../api.js'

const emit = defineEmits(['close'])
const openLoginModal = inject('openLoginModal')

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
    // Handle successful registration
    emit('close')
  } catch (error) {
    console.error('Registration failed:', error)
    // Handle registration error
  } finally {
    loading.value = false
  }
}

const switchToLogin = () => {
  emit('close')
  openLoginModal()
}
</script>
