<template>
  <div
    class="relative duration-500 overflow-hidden"
    :style="`height: ${open ? 600 : 0}px;`"
  >
    <img src="@/static/foto-directorio-comercial.png" class="bg-cover" alt="" />
    <div
      class="absolute inset-0 flex justify-center text-center text-white items-center"
    >
      <div class="w-2/5">
        <p class="text-4xl font-light">Directorio Comercial</p>
        <p class="text-6xl font-light mt-2">Guatapé</p>
        <div class="flex gap-2">
          <div class="w-full pt-3">
            <input
              v-model="search"
              placeholder="Escribe una palabra de busqueda"
              type="text"
              @keyup.enter="$router.push('/directorio')"
              class="w-full p-2 pl-4 bg-opacity-50 text-black focus:ring mt-2 focus:border-[#FF9900] bg-white border focus:outline-none rounded-2xl"
            />
          </div>
          <NuxtLink
            to="/directorio"
            class="pt-5 cursor-pointer hover:scale-125 duration-100"
          >
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </NuxtLink>
        </div>
        <div
          class="duration-300 overflow-hidden"
          :class="{ 'opacity-0': !open }"
          :style="`height: ${open ? 200 : 0}px;`"
        >
          <p class="text-xl font-light pt-20 pb-2">
            Toda la oferta comercial de Guatapé en un solo lugar.
          </p>
          <NuxtLink
            to="/directorio"
            class="text-xl hover:text-white hover:drop-shadow-xl hover:border font-light text-[#FF9900] p-1 rounded-sm px-6 transition-all bg-opacity-30 bg-black hover:underline duration-100 text-shadow hover:font-semibold"
          >
            Encuentra Aquí todo lo que buscas
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const open = computed(() => route.name === "index");
const search = useState<string>("search", () => "");
</script>
