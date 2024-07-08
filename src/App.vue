<!-- src/App.vue -->
<template>
  <div id="app" >
    <div class="max-w-7xl mx-auto flex flex-col relative">
    <header class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80 p-5  ">
      <div class="flex justify-between">
        <span
          class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">Krizae();</span>
        <ul class="flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium md:flex hidden">
        <li>
          <router-link to="/" class="fadein-bot text-gray-700 hover:bg-gray-50
          border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500
          md:p-0">Home</router-link>
        </li>
          <li>
          <router-link to="/surah" class="fadein-bot text-gray-700 hover:bg-gray-50
          border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500
          md:p-0">Surah</router-link>
        </li>
        </ul>
        <img class="w-9 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
          alt="GITHUB">
      </div>
    </header>
    <router-view ></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
