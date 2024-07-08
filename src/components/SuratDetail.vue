<template>
    <div class="container mx-auto mt-28 text-white">
      <div class="bg-green-500 p-6 rounded-lg shadow-lg text-center mb-10">
        <h1 class="text-4xl font-bold mb-2">{{ suratDetail.namaLatin }}</h1>
        <p class="text-xl mb-2 italic">{{ suratDetail.arti }}</p>
        <p class="text-md mb-4">{{ suratDetail.tempatTurun }} - {{ suratDetail.jumlahAyat }} Ayat</p>
        <div class="flex justify-center items-center space-x-4">
          <button class="text-white bg-green-700 hover:bg-green-600 rounded-full w-12 h-12 flex items-center justify-center">
            <i class="fas fa-step-backward"></i>
          </button>
          <button class="text-white bg-green-700 hover:bg-green-600 rounded-full w-12 h-12 flex items-center justify-center">
            <i class="fas fa-play"></i>
          </button>
          <button class="text-white bg-green-700 hover:bg-green-600 rounded-full w-12 h-12 flex items-center justify-center">
            <i class="fas fa-step-forward"></i>
          </button>
        </div>
      </div>
      
      <div v-for="ayat in suratDetail.ayat" :key="ayat.nomorAyat" class="mb-6 p-6 bg-gray-900 rounded-lg shadow-md flex items-center">
        <!-- <div class="bg-yellow-400 text-black font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4">
          {{ ayat.nomorAyat }}
        </div> -->
        <div class="flex-1">
          <div class="text-right text-2xl mb-3">
          {{ ayat.teksArab }}  | ({{ ayat.nomorAyat }}) 
          </div>
          <p class="text-lg mb-1">{{ ayat.teksLatin }} ({{ ayat.nomorAyat }})</p>
          <p class="text-md mb-2">{{ ayat.teksIndonesia }}</p>
          <!-- <audio controls :src="ayat.audio['01']" class="mt-2 w-full"></audio> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import initAPI from '../axios';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const suratDetail = ref({});
  
      const fetchSuratDetail = async () => {
        try {
          const response = await initAPI(`surat/${route.params.id}`);
          suratDetail.value = response.data;
        } catch (error) {
          console.error("Error fetching surat detail:", error);
        }
      };
  
      onMounted(() => {
        fetchSuratDetail();
      });
  
      return { suratDetail };
    }
  };
  </script>
  
  <style scoped>
  .text-right {
    direction: rtl;
  }
  </style>
  