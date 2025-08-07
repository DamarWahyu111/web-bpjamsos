<template>
  <div id="app">
    <Navbar />
    <router-view />
    <LoginModal v-if="showLoginModal" @close="showLoginModal = false" />
    <RegisterModal v-if="showRegisterModal" @close="showRegisterModal = false" />
    <PengaduanModal v-if="showPengaduanModal" @close="showPengaduanModal = false" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import LoginModal from './components/LoginModal.vue'
import RegisterModal from './components/RegisterModal.vue'
import PengaduanModal from './components/PengaduanModal.vue'

const showLoginModal = ref(false)
const showRegisterModal = ref(false)
const showPengaduanModal = ref(false)

const openLoginModal = () => {
  showLoginModal.value = true
  showRegisterModal.value = false
}

const openRegisterModal = () => {
  showRegisterModal.value = true
  showLoginModal.value = false
}

const openPengaduanModal = () => {
  showPengaduanModal.value = true
}

// Provide modal functions to child components
provide('openLoginModal', openLoginModal)
provide('openRegisterModal', openRegisterModal)
provide('openPengaduanModal', openPengaduanModal)
</script>
