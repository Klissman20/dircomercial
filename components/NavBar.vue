<template>
  <nav class="flex max-w-7xl m-auto">
    <div class="h-28 flex w-96 pl-6 py-1 items-center">
      <NuxtLink to="/">
        <img src="@/static/logo-guatape.png" width="340" alt="" />
      </NuxtLink>
    </div>
    <div class="w-full items-end justify-center hidden lg:flex">
      <ul class="flex gap-16 pb-2 text-[#707070]">
        <li>
          <NuxtLink
            class="duration-100 p-3 rounded-t-lg hover:bg-[#FF9900] hover:text-white"
            :class="{ 'bg-[#999999] text-white': $route.path === '/' }"
            to="/"
            >Buscar</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="duration-100 p-3 rounded-t-lg hover:bg-[#FF9900] hover:text-white"
            :class="{
              'bg-[#999999] text-white': $route.path === '/directorio',
            }"
            to="/directorio"
            >Directorio</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="duration-100 p-3 rounded-t-lg hover:bg-[#FF9900] hover:text-white"
            :class="{
              'bg-[#999999] text-white': $route.path === '/talento',
            }"
            to="/talento"
            >Talento local</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="duration-100 p-3 rounded-t-lg hover:bg-[#FF9900] hover:text-white"
            :class="{
              'bg-[#999999] text-white': $route.path === '/contacto',
            }"
            to="/contacto"
            >Contacto</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="flex lg:hidden p-8 justify-center ">
      <button @click="modal = !modal" class="h-14  w-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="w-8 h-8 mx-auto"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>

    <div
      :class="{ 'opacity-0 invisible translate-x-2 ': modal }"
      
      class="bg-black bg-opacity-50 flex justify-end h-full fixed duration-300 w-full right-0 z-40"
      
    >
      <div class="p-2 bg-[#FF9900] w-4/5">
        <div class="flex justify-end">
          <button @click="modal = !modal" class="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="w-8 h-8 stroke-white"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="pt-28 px-6">
          <div>
            <NuxtLink
              to="/"
              @click="modal = !modal"
              class="text-white text-2xl flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-6 h-6 mt-1 mr-4"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                />
              </svg>
              Buscar
            </NuxtLink>
          </div>
          <div class="mt-4">
            <NuxtLink
              to="/directorio"
              @click="modal = !modal"
              class="text-white text-2xl flex"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-6 h-6 mt-1 mr-4"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                /></svg
              >Directorio</NuxtLink
            >
          </div>
          <div class="mt-4">
            <NuxtLink
              to="/talento"
              @click="modal = !modal"
              class="text-white text-2xl flex"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-6 h-6 mt-1 mr-4"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
                /></svg
              >Talento local</NuxtLink
            >
          </div>

          <div class="mt-4">
            <NuxtLink
              to="/ayuda"
              @click="modal = !modal"
              class="text-white text-2xl flex"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-6 h-6 mt-1 mr-4"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z"
                /></svg
              >Ayuda</NuxtLink
            >
          </div>
          <div class="mt-4">
            <NuxtLink
              to="/contacto"
              @click="modal = !modal"
              class="text-white text-2xl flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-6 h-6 mt-1 mr-4"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163 2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                /></svg
              >Contacto</NuxtLink
            >
          </div>
          <div class="pt-28">
            <img src="@/static/logo-guatape.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const modal = ref(true);
</script>
