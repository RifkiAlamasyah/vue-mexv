<template>
  <nav class="bg-white shadow-lg fixed top-0 w-full z-10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <a href="#" class="flex items-center py-4 px-2">
              <img src="../assets/logo.svg" alt="Logo" class="h-8 w-8 mr-2">
              <span class="font-semibold text-gray-500 text-lg">MEXV</span>
            </a>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            :class="{ 'text-green-500 border-b-4 border-green-500 font-semibold': isActive('home') }"
            @click="setActiveLink('home')">Home</a>
          <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            :class="{ 'text-green-500 border-b-4 border-green-500 font-semibold': isActive('services') }"
            @click="setActiveLink('services')">Services</a>
          <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            :class="{ 'text-green-500 border-b-4 border-green-500 font-semibold': isActive('about') }"
            @click="setActiveLink('about')">About</a>
          <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            :class="{ 'text-green-500 border-b-4 border-green-500 font-semibold': isActive('contact') }"
            @click="setActiveLink('contact')">Contact Us</a>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3 ">
          <a href=""
            class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log
            In</a>
          <a href=""
            class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign
            Up</a>
        </div>

        <!-- Mobile -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button" @click="toggleMenu">
            <svg class="w-6 h-6 text-gray-500 hover:text-green-500" :class="{ 'text-green-500': showMenu }" fill="none"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{ 'hidden': !showMenu }" class="mobile-menu">
      <ul class="">
        <li><a href="#" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          :class="{ 'text-white bg-green-500 font-semibold': isActive('home') }"
          @click="setActiveLink('home')"
          >Home</a></li>
        <li><a href="#" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          :class="{ 'text-white bg-green-500 font-semibold': isActive('services') }"
          @click="setActiveLink('services')"
          >Services</a>
        </li>
        <li><a href="#" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          :class="{ 'text-white bg-green-500 font-semibold': isActive('about') }"
          @click="setActiveLink('about')"
          >About</a></li>
        <li><a href="#" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          :class="{ 'text-white bg-green-500 font-semibold': isActive('contact') }"
          @click="setActiveLink('contact')"
          >Contact Us</a>
        </li>
      </ul>
    </div>
    <!-- end Mobile -->
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
const activeLink = ref('home'); // Set the initially active link

const isActive = (link) => {
  return activeLink.value === link;
};

const setActiveLink = (link) => {
  activeLink.value = link;
};
</script>

<style scoped>
.fade-in-down {
  opacity: 0;
  transform: translateY(-50px);
  animation: fade-in-down .5s ease forwards;
}

@keyframes fade-in-down {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 1000px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar-brand {
    margin-bottom: 10px;
  }

  .navbar-nav {
    display: flex;
    justify-content: center;
  }
}
</style>


<!-- 

// Menyimpan posisi scroll sebelumnya
let prevScrollPos = window.pageYOffset;

function handleScroll() {
  // Mendapatkan posisi scroll saat ini
  const currentScrollPos = window.pageYOffset;

    // jika scroll posisi nya kurang dari 40 px dari header
    if (currentScrollPos < 40) {
    document.querySelector('.navbar').classList.remove('fixed-top')
    document.querySelector('.navbar').classList.remove('fade-in-down');
    return; // hentikan eksekusi
  }
  // Jika posisi scroll saat ini lebih besar dari posisi scroll sebelumnya
  if (currentScrollPos > prevScrollPos) {
    // Menghapus class 'fixed-top' pada elemen navbar
    document.querySelector('.navbar').classList.remove('fixed-top');
    document.querySelector('.navbar').classList.remove('fade-in-down');
  } else {
    // Menambahkan class 'fixed-top' pada elemen navbar
    document.querySelector('.navbar').classList.add('fixed-top');
    document.querySelector('.navbar').classList.add('fade-in-down');
  }

  // Mengupdate nilai posisi scroll sebelumnya dengan posisi scroll saat ini
  prevScrollPos = currentScrollPos;
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


 -->