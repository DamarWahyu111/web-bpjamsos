<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Form Pengaduan</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
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
          <label for="nik" class="block text-sm font-medium text-gray-700 mb-1">NIK</label>
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

        <div>
          <label for="complainType" class="block text-sm font-medium text-gray-700 mb-1">Jenis Pengaduan</label>
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
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Pesan Pengaduan</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Jelaskan pengaduan Anda secara detail..."
          ></textarea>
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon (Opsional)</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nomor telepon"
          >
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {{ loading ? 'Mengirim...' : 'Kirim Pengaduan' }}
        </button>
      </form>

      <div class="mt-4 p-3 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-800">
          <strong>Catatan:</strong> Pengaduan Anda akan diproses dalam 1x24 jam. Untuk pengaduan mendesak, silakan hubungi call center 175.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { submitComplaint } from '../api.js'

const emit = defineEmits(['close'])

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
    alert('Pengaduan berhasil dikirim! Terima kasih atas laporan Anda.')
    emit('close')
  } catch (error) {
    console.error('Failed to submit complaint:', error)
    alert('Gagal mengirim pengaduan. Silakan coba lagi.')
  } finally {
    loading.value = false
  }
}
</script>
