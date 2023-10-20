<template>
  <div>
    <div class="flex bg-[#FF9900] p-4 rounded-t-3xl">
      <p class="text-2xl py-1 text-white w-full drop-shadow-md text-center">
        {{ info.nombre }} {{ info.apellido }}
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
    <div class="pt-5 border border-[#707070] bg-white rounded-b-3xl border-t-0">
      <div class="flex">
        <div class="w-full md:w-2/3 p-4">
          <div
            class="bg-contain bg-no-repeat bg-center bg-slate-300 border-[#707070] text-[#707070] h-56 flex justify-center items-center"
          ></div>
        </div>
        <div class="w-full p-3 leading-7">
          <p class="">Nombre: {{ info.nombre }}</p>
          <p class="">Apellido: {{ info.apellido }}</p>
          <p class="">Email: {{ info.email }}</p>
          <p class="">Teléfono: {{ info.telefono }}</p>
          <p class="">Objetivo: {{ info.objetivo }}</p>
          <p class="">Habilidades: {{ info.habilidades }}</p>
          <p class="">Idiomas: {{ info.idiomas }}</p>
          <p class="">Experiencia: {{ info.experiencia }}</p>
          <p class="">Certificaciones: {{ info.certificaciones }}</p>
        </div>
      </div>
      <div class="px-3 font-semibold">Educación:</div>
      <div class="m-2 bg-gray-200 rounded-2xl text-sm">
        <div
          v-for="({ grado, ubicacion, institucion, fechas }, i) in educacion"
          :key="i"
          class="w-full px-3 py-2 grid grid-cols-2"
        >
          <div>
            <strong>Título del Grado o Certificado</strong><br />
            <p>{{ grado }}</p>
          </div>
          <div>
            <strong>Ubicación</strong><br />
            <p>{{ ubicacion }}</p>
          </div>
          <div>
            <strong>Nombre de la Institución Educativa</strong><br />
            <p>{{ institucion }}</p>
          </div>
          <div>
            <strong>Fechas de Asistencia</strong><br />
            <p>{{ fechas }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Talento } from "~/models/talento_model";
const props = defineProps({
  info: {
    type: Object as () => Talento,
    default: () => ({}),
  },
});

const educacion = computed(() => {
  return JSON.parse(props.info.educacion || "[]");
});
</script>
