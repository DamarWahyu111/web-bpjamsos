<template>
  <nav class="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img src="../assets/logoBPJAMSOSTEK.png?height=40&width=40" alt="BPJS Logo" class="h-10 w-10">
          <div class="hidden md:block">
            <h1 class="text-xl font-bold">BPJS Ketenagakerjaan</h1>
            <p class="text-xs text-blue-200">Melindungi Pekerja Indonesia</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="#hero" class="hover:text-blue-200 transition-colors">Beranda</a>
          <a href="#fitur" class="hover:text-blue-200 transition-colors">Program</a>
          <a href="#tentang" class="hover:text-blue-200 transition-colors">Tentang</a>
          <a href="#statistik" class="hover:text-blue-200 transition-colors">Statistik</a>
          <a href="#testimoni" class="hover:text-blue-200 transition-colors">Testimoni</a>
          <button @click="openPengaduanModal" class="hover:text-blue-200 transition-colors">
            Pengaduan
          </button>
        </div>

        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-3">
          <button 
            @click="openLoginModal"
            class="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Login
          </button>
          <button 
            @click="openRegisterModal"
            class="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Register
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-blue-500">
        <div class="flex flex-col space-y-3">
          <a href="#hero" @click="mobileMenuOpen = false" class="hover:text-blue-200">Beranda</a>
          <a href="#fitur" @click="mobileMenuOpen = false" class="hover:text-blue-200">Program</a>
          <a href="#tentang" @click="mobileMenuOpen = false" class="hover:text-blue-200">Tentang</a>
          <a href="#statistik" @click="mobileMenuOpen = false" class="hover:text-blue-200">Statistik</a>
          <a href="#testimoni" @click="mobileMenuOpen = false" class="hover:text-blue-200">Testimoni</a>
          <button @click="openPengaduanModal; mobileMenuOpen = false" class="text-left hover:text-blue-200">
            Pengaduan
          </button>
          <div class="flex space-x-3 pt-3">
            <button 
              @click="openLoginModal; mobileMenuOpen = false"
              class="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Login
            </button>
            <button 
              @click="openRegisterModal; mobileMenuOpen = false"
              class="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject } from 'vue'

const mobileMenuOpen = ref(false)
const openLoginModal = inject('openLoginModal')
const openRegisterModal = inject('openRegisterModal')
const openPengaduanModal = inject('openPengaduanModal')
</script>
