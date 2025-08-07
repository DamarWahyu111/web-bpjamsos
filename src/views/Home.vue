<template>
  <div>
    <!-- Hero Section -->
    <section id="hero" class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              Melindungi <span class="text-yellow-300">Pekerja Indonesia</span>
            </h1>
            <p class="text-xl mb-8 text-blue-100">
              BPJS Ketenagakerjaan memberikan perlindungan sosial komprehensif untuk seluruh pekerja Indonesia melalui program jaminan sosial ketenagakerjaan.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-yellow-400 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-250 transition-colors">
                Daftar Sekarang
              </button>
              <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
          <div class="text-center">
            <img src="../assets/bpjsprotect.jpg?height=400&width=500" alt="BPJS Protection" class="w-full max-w-md mx-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Fitur Section -->
    <section id="fitur" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Program Jaminan Sosial</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Empat program utama yang memberikan perlindungan menyeluruh bagi pekerja Indonesia
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Jaminan Hari Tua (JHT)</h3>
            <p class="text-gray-600">Memberikan uang tunai ketika peserta memasuki usia pensiun, meninggal dunia, atau mengalami cacat total tetap.</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Jaminan Kecelakaan Kerja (JKK)</h3>
            <p class="text-gray-600">Memberikan perlindungan atas risiko kecelakaan yang terjadi dalam hubungan kerja.</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Jaminan Kematian (JKM)</h3>
            <p class="text-gray-600">Memberikan santunan berupa uang tunai kepada ahli waris ketika peserta meninggal dunia.</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Jaminan Pensiun (JP)</h3>
            <p class="text-gray-600">Memberikan penghasilan bulanan ketika peserta memasuki usia pensiun, mengalami cacat total tetap, atau meninggal dunia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tentang Kami Section -->
    <section id="tentang" class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="../assets/bpjbuilding.jpg?height=400&width=500" alt="BPJS Building" class="w-full rounded-lg shadow-lg">
          </div>
          <div>
            <h2 class="text-4xl font-bold text-gray-800 mb-6">Tentang BPJS Ketenagakerjaan</h2>
            <p class="text-lg text-gray-600 mb-8">
              BPJS Ketenagakerjaan adalah badan hukum publik yang dibentuk untuk menyelenggarakan program jaminan sosial ketenagakerjaan bagi seluruh pekerja Indonesia, baik yang bekerja di sektor formal maupun informal.
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Visi</h3>
                <p class="text-gray-600">Menjadi badan penyelenggara jaminan sosial ketenagakerjaan terpercaya untuk seluruh pekerja Indonesia.</p>
              </div>

              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Misi</h3>
                <ul class="text-gray-600 space-y-2">
                  <li>• Memberikan perlindungan menyeluruh dan berkualitas</li>
                  <li>• Memberikan pelayanan prima kepada peserta</li>
                  <li>• Mengelola dana secara profesional dan transparan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistik Section -->
    <section id="statistik" class="py-20 bg-blue-600 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Statistik Kepesertaan</h2>
          <p class="text-xl text-blue-100">Data terkini peserta BPJS Ketenagakerjaan di seluruh Indonesia</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold text-yellow-300 mb-2">34.5M</div>
            <div class="text-lg text-blue-100">Total Peserta Aktif</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-yellow-300 mb-2">2.1M</div>
            <div class="text-lg text-blue-100">Perusahaan Terdaftar</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-yellow-300 mb-2">98.7%</div>
            <div class="text-lg text-blue-100">Tingkat Kepuasan</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-yellow-300 mb-2">24/7</div>
            <div class="text-lg text-blue-100">Layanan Call Center</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimoni Section -->
    <section id="testimoni" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Testimoni Peserta</h2>
          <p class="text-xl text-gray-600">Pengalaman nyata dari peserta BPJS Ketenagakerjaan</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="flex items-center mb-6">
              <img src="../assets/testimoni1.jpg?height=60&width=60" alt="Testimoni 1" class="w-15 h-15 rounded-full mr-4">
              <div>
                <h4 class="font-bold text-gray-800">Sobi Rafi</h4>
                <p class="text-gray-600">Karyawan Swasta</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Alhamdulillah, ketika saya mengalami kecelakaan kerja, BPJS Ketenagakerjaan langsung membantu dengan pelayanan yang cepat dan profesional. Sangat terbantu sekali."
            </p>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="flex items-center mb-6">
              <img src="../assets/testimoni 3.jpg?height=60&width=60" alt="Testimoni 2" class="w-15 h-15 rounded-full mr-4">
              <div>
                <h4 class="font-bold text-gray-800">Ahmad Rizki</h4>
                <p class="text-gray-600">Pekerja Konstruksi</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Sebagai pekerja konstruksi, JKK sangat penting bagi saya. Proses klaim mudah dan cepat. Terima kasih BPJS Ketenagakerjaan!"
            </p>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="flex items-center mb-6">
              <img src="../assets/logoBPJAMSOSTEK.png ?height=60&width=60" alt="Testimoni 3" class="w-15 h-15 rounded-full mr-4">
              <div>
                <h4 class="font-bold text-gray-800">Maya Sari</h4>
                <p class="text-gray-600">Pengusaha UMKM</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Daftar BPJS Ketenagakerjaan untuk karyawan saya sangat mudah. Pelayanan online yang praktis dan customer service yang ramah."
            </p>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue'
</script>
