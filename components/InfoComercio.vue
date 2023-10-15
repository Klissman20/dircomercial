<template>
  <div>
    <div class="flex bg-[#FF9900] p-4 rounded-t-3xl">
      <p class="text-2xl py-1 text-white w-full text-center">
        {{ razon_social }}
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
    <div class="flex border border-[#707070] bg-white rounded-b-3xl border-t-0">
      <div class="w-1/2 pb-10">
        <div
          class="bg-[#e1e1e1] border border-[#707070] text-[#707070] h-56 m-6 flex justify-center items-center"
        >
          FOTO O LOGO
        </div>
      </div>
      <div class="w-1/2">
        <p class="mt-10">Nombre: {{ info.nombre }}</p>
        <p class="mt-2">NIT: {{ info.nit }}</p>
        <p class="mt-2">Actividad: {{ info.actividad }}</p>
        <p class="mt-2">Dirección: {{ info.direccion }}</p>
        <p class="mt-2">Contacto: {{ info.telefono1 }}</p>
        <p class="mt-2">Email: {{ info.email }}</p>
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
