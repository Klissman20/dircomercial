<template>
  <nav class="flex max-w-7xl m-auto">
    <div class="h-28 w-96 pl-6 py-1">
      <NuxtLink to="/">
        <img src="@/static/logo-guatape.png" width="340" alt="" />
      </NuxtLink>
    </div>
    <div class="w-full items-end justify-center hidden lg:flex">
      <ul class="flex gap-16 pb-2 text-[#707070]">
        <li><router-link to="/">Buscar</router-link></li>
        <li><router-link to="/directorio">Directorio</router-link></li>
        <li><router-link to="/talento">Talento local</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
    </div>
    <div class="flex justify-end w-1/2 mr-8 lg:hidden">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="w-6 h-6"
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
  </nav>
</template>
<script></script>
