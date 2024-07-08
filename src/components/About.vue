<template>
  <div class="md:mt-24 relative px-4">
    <div class="flex mb-6">
      <input v-model="searchQuery" type="text" placeholder="Search..." class="px-4 py-2 rounded-lg border border-gray-400 focus:outline-none"/>
    </div>
    <div v-for="(surat, index) in paginatedData" :key="index" class="flex items-center space-x-4 mb-6 p-4 bg-gray-800 rounded-lg shadow-lg">
      <div class="bg-yellow-400 text-black font-bold rounded-full h-10 w-10 flex items-center justify-center">
        {{ surat.nomor }}
      </div>
      <div class="flex justify-between w-full">
        <div>
          <router-link :to="{ name: 'SuratDetail', params: { id: surat.nomor } }">
            <h1 class="text-2xl font-semibold text-white">{{ surat.namaLatin }}</h1>
          </router-link>
          <span class="text-white text-sm">{{ surat.tempatTurun }} | {{ surat.jumlahAyat }} Ayat</span>
        </div>
        <h3 class="text-2xl font-semibold text-white mr-5">
          {{ surat.nama }}
        </h3>
      </div>
    </div>
    <div class="flex justify-center my-6">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-2 bg-gray-600 text-white rounded-l-lg mx-3"><i class="fa-solid fa-chevron-left"></i></button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-2 bg-gray-600 text-white rounded-r-lg"><i class="fa-solid fa-angle-right"></i></button>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
import initAPI from '../axios';

export default {
  setup() {
    const dataApi = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = 6;
    const searchQuery = ref('');

    const fetchData = async () => {
      try {
        const response = await initAPI('surat');
        dataApi.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    const filteredData = computed(() => {
      if (!searchQuery.value) {
        return dataApi.value;
      }
      return dataApi.value.filter(surat => 
        surat.namaLatin.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        surat.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage));

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredData.value.slice(start, end);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    };

    return {searchQuery,dataApi,currentPage,totalPages,paginatedData,nextPage,prevPage};
  }
};
</script>
