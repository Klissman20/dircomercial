<template>
  <div
    class="relative duration-300 ease-linear overflow-hidden fondo"
    :style="`height: ${open ? 600 : 0}px; background-position-y: ${
      scrollPercentage * -4.5
    }px`"
  >
    <div
      class="text-center text-white flex flex-col max-w-3xl pt-14 md:pt-20 px-6 mx-auto items-stretch"
    >
      <p class="text-2xl md:text-4xl font-light pt-8">Directorio Comercial</p>
      <p class="text-5xl md:text-6xl font-bold py-2">Guatapé</p>
      <div class="flex gap-2 pt-5">
        <div class="w-full pt-3">
          <input
            v-model="search"
            placeholder="Escribe una palabra de busqueda"
            type="text"
            @keyup.enter="$router.push('/directorio')"
            class="w-full p-2 pl-4 bg-opacity-50 text-white placeholder:text-white focus:ring mt-2 focus:border-[#89C4E2] bg-white border focus:outline-none rounded-2xl"
          />
        </div>
        <NuxtLink
          to="/directorio"
          class="h-10 px-2 mt-5 cursor-pointer hover:scale-125 duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6 mt-2"
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
        class="duration-300 overflow-hidden px-4 md:px-0"
        :class="{ 'opacity-0': !open }"
        :style="`height: ${open ? 200 : 0}px;`"
      >
        <p class="text-xl font-light pt-16 md:pt-20 pb-2">
          Toda la oferta comercial de Guatapé en un solo lugar.
        </p>
        <NuxtLink
          to="/directorio"
          class="text-xl hover:text-white hover:drop-shadow-xl font-light text-[#89C4E2] p-1 rounded-sm transition-all bg-opacity-30 bg-transparent underline underline-offset-4 md:no-underline md:bg-black hover:underline duration-100 text-shadow hover:font-semibold"
        >
          Encuentra Aquí <br> todo lo que buscas
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style>
.fondo {
  background-image: url("~/static/foto-directorio-comercial.png");
}
</style>
<script lang="ts" setup>
const route = useRoute();
const open = computed(() => route.name === "index");
const search = useState<string>("search", () => "");

const scrollPercentage = ref(0);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  scrollPercentage.value = (scrollTop / scrollHeight) * 100;
});
</script>
