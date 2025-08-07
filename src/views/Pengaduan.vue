<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <img src="../assets/logoBPJAMSOSTEK.png?height=60&width=60" alt="BPJS Logo" class="mx-auto h-15 w-15 mb-4">
        <h1 class="text-3xl font-extrabold text-gray-900">Form Pengaduan</h1>
        <p class="mt-2 text-gray-600">Sampaikan keluhan atau saran Anda kepada kami</p>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="fullName" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
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
              <label for="nik" class="block text-sm font-medium text-gray-700 mb-2">NIK</label>
              <input
                type="text"
                id="nik"
                v-model="form.nik"
                required
                maxlength="16"
                pattern="[0-9]{16}"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan 16 digit NIK"
              >
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="complainType" class="block text-sm font-medium text-gray-700 mb-2">Jenis Pengaduan</label>
              <select
                id="complainType"
                v-model="form.complainType"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih jenis pengaduan</option>
                <option value="jht">Jaminan Hari Tua (JHT)</option>
                <option value="jkk">Jaminan Kecelakaan Kerja (JKK)</option>
                <option value="jkm">Jaminan Kematian (JKM)</option>
                <option value="jp">Jaminan Pensiun (JP)</option>
                <option value="pelayanan">Pelayanan</option>
                <option value="sistem">Sistem/Website</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nomor telepon"
              >
            </div>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Pesan Pengaduan</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jelaskan pengaduan Anda secara detail..."
            ></textarea>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="flex">
              <svg class="w-5 h-5 text-blue-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              <div class="text-sm text-blue-800">
                <p class="font-medium">Catatan Penting:</p>
                <ul class="mt-1 list-disc list-inside space-y-1">
                  <li>Pengaduan akan diproses dalam 1x24 jam</li>
                  <li>Untuk pengaduan mendesak, hubungi call center 175</li>
                  <li>Pastikan data yang diisi sudah benar</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 font-medium"
            >
              {{ loading ? 'Mengirim...' : 'Kirim Pengaduan' }}
            </button>
            <router-link
              to="/"
              class="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium text-center"
            >
              Kembali ke Beranda
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { submitComplaint } from '../api.js'

const router = useRouter()

const form = ref({
  fullName: '',
  nik: '',
  complainType: '',
  message: '',
  phone: ''
})

const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  try {
    const response = await submitComplaint(form.value)
    console.log('Complaint submitted:', response)
    alert('Pengaduan berhasil dikirim! Terima kasih atas laporan Anda. Kami akan menindaklanjuti dalam 1x24 jam.')
    router.push('/')
  } catch (error) {
    console.error('Failed to submit complaint:', error)
    alert('Gagal mengirim pengaduan. Silakan coba lagi atau hubungi call center 175.')
  } finally {
    loading.value = false
  }
}
</script>
