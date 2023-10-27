<template>
  <div>
    <div v-if="authenticate">
      <div class="bg-[#FF9900]">
        <div class="flex pt-6">
          <div class="w-1/2 flex justify-center">
            <h3 class="text-2xl font-bold text-white">
              Administrador Comercios
            </h3>
          </div>
          <div class="flex w-1/2 gap-4 justify-center">
            <NuxtLink to="/admin/comercios">
              <p
                class="border border-white text-white rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out"
              >
                Talentos
              </p>
            </NuxtLink>
            <NuxtLink to="/admin">
              <p
                class="border border-white text-white rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out"
              >
                Salir
              </p>
            </NuxtLink>
          </div>
        </div>

        <hr class="border-orange-300 mt-4 w-2/3 mx-auto" />
        <div class="flex justify-around pt-6 pb-10">
          <div class="w-1/2 flex">
            <input
              type="text"
              placeholder="Buscar Comercios"
              class="border border-[#707070] w-full rounded-xl p-2 px-6"
            />
            <button
            
            class="py-1 px-1 ml-2 hover:scale-125 duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="w-6 h-6 stroke-white"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </button>
          </div>
          <div>
            <NuxtLink to="/admin/comercios">
              <p
                class="border border-white text-white rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out"
              >
                Añadir Comercio
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="px-6 py-2 bg-gray-100 mx-10 rounded-xl mt-10 border border-gray-300"
      >
        <div
          v-for="i in 10"
          :key="i"
          class="block md:flex border-b border-gray-300 pt-2 justify-between"
        >
          <div class="">
            <p class="font-bold">Nombre del comercio</p>
          </div>
          <div>
            <p>Correo Electrónico</p>
          </div>
          <div class="flex justify-end pb-2 gap-3 pr-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-6 h-6 stroke-[#707070]"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="w-6 h-6 stroke-[#707070]"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center pb-16 pt-4">
        <div class="mt-4 flex gap-2 m-auto w-3/4 flex-wrap justify-center">
          <button class="hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="w-6 h-6 mr-1 stroke-[#707070]"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
              />
            </svg>
          </button>

          <button
            class="border border-[#707070] px-2 rounded-lg text-[#707070] focus:scale-125"
          >
            1
          </button>
          <button
            class="border border-[#707070] px-2 rounded-lg text-[#707070] focus:scale-125"
          >
            2
          </button>
          <button
            class="border border-[#707070] px-2 rounded-lg text-[#707070] focus:scale-125"
          >
            3
          </button>
          <button class="hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="w-6 h-6 ml-1 stroke-[#707070]"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center text-2xl font-bold mt-20">No has iniciado sesión</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const authenticate = useState("authenticate", () => false);
</script>
