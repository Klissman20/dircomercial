<template>
  <div>
    <div class="flex bg-[#FF9900] p-4 rounded-t-3xl">
      <p class="text-2xl py-1 text-white w-full drop-shadow-md text-center">
        {{ info.razon_social }}
      </p>
      <button
        class="hover:scale-110 ease-in duration-100"
        @click="$emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="w-8 h-8 text-white"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
          />
        </svg>
      </button>
    </div>
    <div class="sm:flex pt-5 border border-[#707070] bg-white rounded-b-3xl border-t-0">
      <div class="w-full md:w-2/3 pb-10">
          <div
            class="bg-contain bg-no-repeat bg-center border-[#707070] text-[#707070] h-56 flex justify-center items-center"
            :style="`background-image: url('https://sbnpljpwdvevewdhzkwv.supabase.co/storage/v1/object/public/images/${info.id}.jpg');`"
          ></div>
      </div>
      <div class="w-full p-3">
        <p class="">Nombre: {{ info.nombre }}</p>
        <p class="">NIT: {{ info.nit }}</p>
        <p class="">Actividad: {{ info.actividad }}</p>
        <p class="">Dirección: {{ info.direccion }}</p>
        <p class="">Contacto: {{ info.telefono1 }}</p>
        <p class="">Email: {{ info.email }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Comercio } from "~/models/models";
defineProps({
  info: {
    type: Object as () => Comercio,
    default: () => ({}),
  },
});
</script>
