<template>
  <div class="min-h-screen">
    <!-- <div class="flex max-w-3xl mx-auto gap-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
        <h2 class="text-4xl py-5 font-semibold">Ayuda</h2>
    </div> -->
    <div class="bg-[#FF9900] pt-6 pl-6 md:pl-20 pb-4 border border-y-[#707070]">
      <p class="font-extrabold text-white text-xl md:text-2xl">Instrucciones</p>
      <p class="text-white font-thin text-sm md:text-md">
        para subir la <span class="font-extrabold">foto</span> o
        <span class="font-bold"> logo </span>de tu establecimiento a el
      </p>
      <p class="text-white font-bold text-2xl md:text-3xl">
        Directorio Comercial Guatapé
      </p>
    </div>

    <div class="w-full md:w-3/4 mx-4 md:mx-auto flex mt-8 md:mt-6 pl-4 md:pl-0">
      <div
        class="border border-[#707070] bg-white z-20 flex items-center justify-center rounded-full w-24 h-24"
      >
        <p class="text-[#FF9900] text-4xl font-extrabold">1</p>
      </div>
      <div
        class="border absolute ml-10 border-[#707070] mt-5 w-3/4 md:w-3/5 h-14 rounded-xl bg-[#FF9900]"
      >
        <p class="text-white text-lg ml-16 mt-3">Ingresa a este link</p>
      </div>
    </div>

    <div class="w-full md:w-3/4 justify-end pr-10 md:pr-0 flex mt-6 md:mt-2">
      <div
        class="border ml-10 border-[#707070] mt-2 w-full md:w-4/5 lg:w-3/5 h-20 rounded-xl mr-10 bg-white"
      >
        <p class="text-[#707070] text-xs sm:text-sm ml-6 mr-20 mt-2 md:mt-3">
          Ingresa el correo electrónico de tu empresa o establecimiento y luego
          hacer clic en "Enviar". Debe ser el que tienes registrado en la cámara
          de comercio.
        </p>
      </div>
      <div
        class="border border-[#707070] bg-[#FF9900] z-20 flex absolute items-center justify-center rounded-full w-24 h-24"
      >
        <p class="text-white text-4xl font-extrabold">2</p>
      </div>
    </div>
    <div class="mt-10 md:mt-6 px-5 md:px-0">
      <img
        src="@/static/ayuda-1.jpg"
        class="h-82 w-full md:w-1/3 mx-auto"
        alt=""
      />
    </div>

    <div class="w-full md:w-3/4 mx-auto flex mt-8 md:mt-2 pl-6 md:pl-0">
      <div
        class="border border-[#707070] bg-white z-20 flex items-center justify-center rounded-full w-24 h-24"
      >
        <p class="text-[#FF9900] text-4xl font-extrabold">3</p>
      </div>
      <div
        class="border absolute ml-10 border-[#707070] mt-4 w-4/5 lg:w-2/5 md:w-3/5 h-16 rounded-xl bg-[#FF9900]"
      >
        <p
          class="text-white md:text-md sm:text-sm text-xs ml-16 mr-10 md:mr-0 mt-2"
        >
          Recibiras un token o codigo de letras y números a la bandeja de
          entrada de este correo.
        </p>
      </div>
    </div>

    <div class="w-full md:w-3/4 justify-end flex pr-10 md:pr-0">
      <div
        class="border ml-10 border-[#707070] mt-5 w-full md:w-4/5 lg:w-2/4 h-14 rounded-xl mr-10 bg-white"
      >
        <p class="text-[#707070] text-sm ml-6 mr-20 mt-2">
          Copia y pega en la casilla "Token" y luego hacer clic en "Obtener
          Datos"
        </p>
      </div>
      <div
        class="border border-[#707070] bg-[#FF9900] z-20 flex absolute items-center justify-center rounded-full w-24 h-24"
      >
        <p class="text-white text-4xl font-extrabold">4</p>
      </div>
    </div>
    <div class="mt-10 md:mt-6 px-5 md:px-0">
      <img
        src="@/static/ayuda-2.jpg"
        class="h-82 w-full md:w-1/3 mx-auto"
        alt=""
      />
    </div>

    <div class="w-full md:w-3/4 mx-auto flex mt-6 md:mt-3 pl-6 md:pl-0">
      <div
        class="border border-[#707070] bg-white z-20 flex items-center justify-center rounded-full w-24 h-24"
      >
        <p class="text-[#FF9900] text-4xl font-extrabold">5</p>
      </div>
      <div
        class="border absolute ml-10 border-[#707070] mt-5 w-4/5 md:w-3/5 lg:w-2/5 h-14 rounded-xl bg-[#FF9900]"
      >
        <p class="text-white text-xs md:text-md sm:text-sm ml-16 mr-4 mt-2">
          Ingresa a Selecciona un archivo" para escoger una foto o logo que
          aparcera con tu información
        </p>
      </div>
    </div>

    <div class="mt-6 pb-20 px-5 md:px-0">
      <img
        src="@/static/ayuda-3.jpg"
        class="h-82 w-full md:w-1/2 mx-auto"
        alt=""
      />
    </div>

    <div
      class="bg-[#FF9900] mx-auto text-center py-4 mb-12 border border-y-[#707070]"
    >
      <p class="text-white font-bold text-md  md:text-2xl">
        Los archivo no deben exceder 1 mb de peso y en <br />
        orientación horizontal
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
