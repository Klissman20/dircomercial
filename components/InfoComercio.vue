<template>
  <div class="mx-3">
    <div class="flex bg-[#FF9900] p-4 rounded-t-3xl">
      <p
        class="text-lg md:text-2xl py-1 text-white w-full drop-shadow-md text-center"
      >
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
    <div
      class="sm:flex md:py-5 border border-[#707070] pb-1 bg-white rounded-b-3xl border-t-0"
    >
      <div class="w-full h-52  md:w-2/3 md:pl-2 p-1 md:pb-10">
        <div
          class="bg-contain bg-no-repeat bg-center border-[#707070] h-full text-[#707070] flex justify-center items-center rounded"
          :style="`background-image: url('image?id=${info.id}'); `"
        >
      </div>
        <div class="flex justify-center mr-6 mt-4">
          <a
            :href="'https://wa.me/' + info.telefono1"
            target="_blank"
            class="flex text-green-500 border border-green-500 px-6 hover:scale-105 duration-100 ease-out py-2 rounded-full"
            >Whatsapp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="border-t overflow-y-auto w-full max-h-[calc(80vh-10rem)] mt-16 md:mt-0">
        <div class="px-5 leading-7 my-4">
          <p><span class="font-bold pr-2">Nombre:</span>{{ info.nombre }}</p>
          <p><span class="font-bold pr-2">NIT:</span>{{ info.nit }}</p>
          <p>
            <span class="font-bold pr-2">Actividad:</span>{{ info.actividad }}
          </p>
          <p>
            <span class="font-bold pr-2">Dirección:</span> {{ info.direccion }}
          </p>
          <p>
            <span class="font-bold pr-2">Teléfono:</span>
            <a
              target="_blank"
              class="underline"
              :href="`tel:${info.telefono1}`"
            >
              {{ info.telefono1 }}
            </a>
            <span v-if="info.telefono2">-</span>
            <a
              target="_blank"
              class="underline"
              :href="`tel:${info.telefono2}`"
            >
              {{ info.telefono2 }}
            </a>
            <span v-if="info.telefono3">-</span>
            <a
              target="_blank"
              class="underline"
              :href="`tel:${info.telefono3}`"
            >
              {{ info.telefono3 }}
            </a>
          </p>
          <p>
            <span class="font-bold pr-2">Email:</span>
            <a target="_blank" class="underline" :href="`mailto:${info.email}`">
              {{ info.email }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Comercio } from "~/models/comercio_model";
defineProps({
  info: {
    type: Object as PropType<Comercio>,
    required: true,
    default: () => ({}),
  },
});
</script>
