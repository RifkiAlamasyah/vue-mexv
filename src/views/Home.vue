<script setup>
import {ref, onMounted, onUnmounted} from 'vue';


const data = ref({product: []});

const loadData = async () =>{
  try{
    const response = await fetch('../data/mexv.json');
    data.value = await response.json();
    console.log(data)
  }catch(error){
    console.error(error)
  }
};

function getFullImageUrl(gambar) {
      return '/img/products/' + gambar;
    };

onMounted(loadData)




</script>

<template lang="">
  <div class="container">
    <h1 class="text-5xl text-blue-900 font-bold">Products</h1>
    <div class="row">
      <div v-if="data.product.length">
        <div class="col-lg-3" v-for="item in data.product" >
        <div class="card" style="width: 18rem">
          <img :src="getFullImageUrl(item.gambar[0])" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.type }}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      </div>
   
    </div>
  </div>
</template>

<style lang=""></style>

<!-- saat mengambil data di  template tidak perlu menambahkan value, langsung aja ke objek. kecuali di luar template -->