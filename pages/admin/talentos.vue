<template>
  <div>
    <div class="bg-[#89C4E2]">
      <div class="block md:flex pt-6">
        <div class="w-full md:w-1/2 flex justify-center">
          <h3 class="text-2xl font-bold text-white">Administrador Talentos</h3>
        </div>
        <div class="flex w-full mt-4 md:w-1/2 gap-4 justify-center">
          <NuxtLink
            to="/admin/comercios"
            class="border border-white text-white rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out flex"
          >
            Comercios
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 ml-2 mt-0.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>
          </NuxtLink>

          <NuxtLink
            to="/admin"
            class="border border-white text-white rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out flex"
          >
            Salir <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 ml-2 mt-0.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/></svg>
          </NuxtLink>
        </div>
      </div>

      <hr class="border-orange-300 mt-4 w-2/3 mx-auto" />
      <div class="block md:flex mx-6 md:mx-2 justify-around pt-6 pb-10">
        <form action="" @submit.prevent="getTalentos" class="w-full md:w-1/2 flex">
        
        
        
        
        
        
          <div class="relative w-full">
            <input
            v-model="search"
            type="text"
            placeholder="Buscar Talento"
            class="border border-[#707070] w-full rounded-xl p-2 px-6"
            />
            <button
            v-if="search.length > 0"
              @click="doClear"
              class="absolute rounded-full top-1 right-1 p-0.5 mt-1 mr-2 text-[#707070]"
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
                  d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          <button
            type="submit"
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
        </form>
        <div class="mt-4 md:mt-0 flex justify-center">
          <button
            @click="addTalento"
            class="border border-white text-white rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out flex"
          >
            Añadir Talento
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6 ml-2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-6xl pt-4 pl-10 md:pl-4 mx-auto">Resultados: {{ total }}</div>

    <div
      class="px-6 py-2 bg-gray-100 mx-10 rounded-xl mt-4 border border-gray-300"
    >
      <div
        v-for="(item, i) in talentos"
        :key="i"
        class="block md:flex border-b border-gray-300 pt-2 justify-between"
      >
        <div class="w-full font-bold">{{ item.nombre }}</div>
        <div class="w-full">{{ item.objetivo }}</div>
        <div class="w-full">{{ item.email }}</div>
        <div class="flex justify-end pb-2 gap-3 pr-2">
          <button
            type="button"
            class="hover:scale-105 duration-75"
            @click="editTalento(item)"
          >
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
          <button
            type="button"
            class="hover:scale-105 duration-75"
            v-if="item.id"
            @click="deleteTalento(item.id)"
          >
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
        <button class="hover:scale-125" @click="setPage(1)">
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
        <template v-for="p in pages">
          <button
            v-if="page <= p + 3 && page >= p - 3"
            :key="p"
            :class="page === p ? 'bg-[#707070] text-white' : ''"
            class="border border-[#707070] px-2 rounded-lg text-[#707070] focus:scale-125"
            @click="setPage(p)"
          >
            {{ p }}
          </button>
        </template>
        <button class="hover:scale-125" @click="setPage(pages)">
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

    <Loading v-model="loading"></Loading>

    <Modal v-model="modal" @close="modal = false">
      
      <div class="px-1 py-2 rounded-xl bg-gray-300">
        <div class="flex ">

          <VisibleOculto class="w-full pb-2" v-if="authenticate" v-model="talento.visible" />
          <button @click="modal = !modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8 mr-2 stroke-[#707070]" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg></button>
        </div>
        <div class="h-[75vh] bg-white px-1 rounded-md overflow-y-auto ">
          <FormHojadevida :talento="talento"></FormHojadevida>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { Talento } from "~/models/talento_model";
const authenticate = useState("authenticate");
const { getAllData, countAllData, deleteDataTalento } =
  useTalentoSBDatasource();

const loading = ref(false);
const modal = ref(false);
const talentos = ref<Talento[]>();
const talento = ref({} as Talento);
const search = ref("");
const total = ref(0);
const page = ref(1);

// Computed
const pages = computed(() => Math.ceil(total.value / 20));
const start = computed(() => (page.value === 1 ? 0 : (page.value - 1) * 20));
const end = computed(() => page.value * 20 - 1);

// Methods
const addTalento = () => {
  talento.value = {} as Talento;
  modal.value = true;
};

const editTalento = (item: Talento) => {
  talento.value = { ...item };
  modal.value = true;
};

const deleteTalento = async (id: number) => {
  const del = confirm("¿Esta seguro que desea eliminar el comercio?");
  if (del) {
    await deleteDataTalento(id);
    getTalentos();
  }
};

const getTalentos = async () => {
  const query = search.value;
  loading.value = true;
  const data = await getAllData(start.value, end.value, query);
  const count = await countAllData(query);
  loading.value = false;
  if (!data) console.log(data);
  talentos.value = data;
  total.value = count ?? 0;
};

const setPage = (pag: number) => {
  page.value = pag;
  getTalentos();
};
const doClear = () => {
  search.value = "";
  page.value = 1;
  getTalentos();
};

// Mounted
onMounted(() => {
  if (!authenticate.value) {
    navigateTo("/admin");
  }
  getTalentos();
});
</script>
