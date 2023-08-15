<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
</script>
<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg bg-dark  navbar-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand fs-3" href="#">
           Megumi Exclusive</a>  
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link"  :class="{ active: $route.path === '/' }"><h5>Home</h5></router-link>
            <router-link to ="/movie" class="nav-link"  :class="{ active: $route.path === '/movie' }"><h5>Movies</h5></router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

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
