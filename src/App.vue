<template>
    <div class="bg-[#34495e] border-2 border-[#485563] border-solid p-8 m-auto my-40 w-80 rounded-lg">
        <h4 class="text-white text-lg mb-4 m-auto">CEK KODAM</h4>
        <input v-model="inputNama" type="text" placeholder="Masukkan Nama"
            class="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        <button @click="cekKodam"
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        <p v-if="hasilKodam" class="text-white mt-4">Kodam {{ inputNama }} adalah {{ hasilKodam }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const inputNama = ref('');
        const hasilKodam = ref(null);
        const kodamList = ['Gayung Pecah', 'Pace', 'Tukul Arwana', 'Setang Motor', 'Letkol BIBD', 'Genderuwo Pargoy', 'Kenalpot Bolong', 'Kipas Muter', 'Macan Madura', 'Sate Madura', 'Angsa Kungfu'];

        const getRandomKodam = () => {
            let randomIndex = Math.floor(Math.random() * kodamList.length);
            return kodamList[randomIndex];
        };

        const cekKodam = () => {
            if (inputNama.value.trim() !== '') {
                hasilKodam.value = getRandomKodam();
                speakResult(`Kodam ${inputNama.value} adalah ${hasilKodam.value}`); // Speak the result
                setTimeout(() => {
                    hasilKodam.value = null;
                }, 4000);
            } else {
                hasilKodam.value = null;
            }
        };

        const speakResult = (text) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'id-ID'; // Set language to Indonesian (id-ID)

            // Pilih suara yang sesuai (gunakan fungsi findVoice)
            const indonesianVoice = findVoice('id-ID');
            if (indonesianVoice) {
                utterance.voice = indonesianVoice;
            }

            speechSynthesis.speak(utterance);
        };

        const findVoice = (lang) => {
            const voices = speechSynthesis.getVoices();
            return voices.find(voice => voice.lang === lang);
        };

        return {
            inputNama,
            hasilKodam,
            cekKodam
        };
    }
};

</script>