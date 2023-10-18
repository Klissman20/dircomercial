<template>
  <div>
    <div
      class="bg-[#FF9900] h-60 justify-center text-center items-center text-white"
    >
      <div class="w-full pt-10">
        <h1 class="text-4xl font-semibold py-4">TALENTO</h1>
        <h2 class="text-2xl font-light">Para la productividad guatapense</h2>
      </div>
    </div>
    <div
      class="bg-[url('@/static/foto-directorio-comercial.png')] p-20 bg-cover bg-center bg-no-repeat w-full justify-center items-center"
    >
      <div class="max-w-3xl grid grid-cols-2 m-auto text-center gap-10 p-20">
        <NuxtLink class="bg-[#FF9900] p-5 rounded-xl hover:scale-110 duration-100 hover:shadow" to="/hojadevida">
          <div
            class="bg-[url('@/static/lupa.png')] bg-contain m-auto bg-no-repeat bg-center w-20 h-20"
          ></div>
          <p class="text-center text-white">Ofrece tu talento</p>
        </NuxtLink>
        <NuxtLink class="bg-[#FF9900] p-5 rounded-xl hover:scale-110 duration-100 hover:shadow" to="/encuentratalento">
          <div
            class="bg-[url('@/static/flecha.png')] bg-contain m-auto bg-no-repeat bg-center w-20 h-20"
          ></div>
          <p class="text-center text-white">Encuentra talento local</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
