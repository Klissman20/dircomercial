<template>
  <div>
    <Modal v-model="modal" class="w-full h-full">
      <InfoComercio :info="details" @close="modal = false" />
    </Modal>

    <div
      class="bg-[#ff9911] h-60 flex justify-center text-center items-center text-white"
    >
      <div class="w-2/5">
        <p class="text-xl font-light">Directorio Comercial</p>
        <p class="text-4xl font-light">Guatapé</p>
        <div class="flex items-center">
          <input
            v-model="search"
            placeholder="Escribe una palabra de busqueda"
            type="text"
            class="w-full p-2 pl-6 mt-10 rounded-full border border-[#707070] focus:outline-none text-[#707070]"
            @keydown.enter="doSearch"
          />
          <button
            @click="getComercios"
            class="pt-8 pl-3 hover:scale-125 duration-100"
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
          </button>
        </div>
      </div>
    </div>

    <div class="pt-10">
      <p class="text-xl text-[#707070] w-3/4 mx-auto font-light pl-4">
        Resultados: {{ total }}
      </p>
      <div
        class="w-3/4 grid min-h grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto rounded-lg"
      >
        <div
          v-for="(comercio, i) in comercios"
          :key="i"
          class="border bg-[#FF9900] text-white bg-cover bg-center relative hover:font-bold text-sm border-[#707070] m-4 px-4 h-52 md:h-32 text-center flex items-center justify-center rounded-xl cursor-pointer hover:scale-105 hover:drop-shadow-xl ease-in duration-100"
          :style="`background-image: url('https://sbnpljpwdvevewdhzkwv.supabase.co/storage/v1/object/public/images/${comercio.id}'.jpg)`"
          @click="setDetails(comercio)"
        >
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-b from-[#FF9900] to-transparent opacity-60"
          ></div>
          <p class="text-center text-shadow">
            {{ comercio.razon_social }}
          </p>
        </div>
      </div>
      <Loading v-model="loading"></Loading>
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
  </div>
</template>
<script lang="ts" setup>
import { useSupabaseDatasource } from "@/composables/comercios_datasource";
import { Comercio } from "@/models/comercio_model";
// Data
const modal = ref(false);
const loading = ref(false);
const details = ref<Comercio>();
const comercios = ref<Comercio[]>();
const nombre = ref("");
const total = ref(0);
const page = ref(1);

const search = useState<string>("search");
const { getDataComercios, countDataComercios } = useSupabaseDatasource();
// Computed
const pages = computed(() => {
  return Math.ceil(total.value / 12);
});
const start = computed(() => {
  return page.value === 1 ? 0 : (page.value - 1) * 12;
});
const end = computed(() => {
  return page.value * 12 - 1;
});
// Methods
const getComercios = async () => {
  const query = search.value;
  loading.value = true;
  const data = await getDataComercios(start.value, end.value, query);
  const count = await countDataComercios(query);
  loading.value = false;
  if (!data) console.log(data);
  comercios.value = data;
  total.value = count ?? 0;
};
const setPage = (pag: number) => {
  page.value = pag;
  getComercios();
};
const setDetails = (comercio: any) => {
  details.value = comercio;
  modal.value = true;
};
const doSearch = () => {
  page.value = 1;
  getComercios();
};
const clear = () => {
  nombre.value = "";
  page.value = 1;
  getComercios();
};
// Mounted
onMounted(() => {
  getComercios();
});
</script>
