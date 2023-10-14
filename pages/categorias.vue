<template>
  <div>
    <div
      v-if="modal"
      class="justify-center absolute z-10 items-center flex w-full"
    >
      <div
        v-if="modal"
        class="bg-black bg-opacity-70 fixed top-0 left-0 h-full w-full"
        @click="modal = false"
      ></div>
      <div
        class="bg-white mx-5 relative z-20 my-10 md:my-0 w-full sm:w-2/3 md:w-1/2 rounded-3xl"
      >
        <info-comercio :info="details" @close="modal = false" />
      </div>
    </div>
    <div
      class="bg-[#FF9900] h-60 flex justify-center text-center items-center text-white"
    >
      <div class="w-2/5">
        <p class="text-xl font-light">Directorio Comercial</p>
        <p class="text-4xl font-light">Guatapé</p>
        <div class="flex">
          <input
            v-model="nombre"
            placeholder="Escribe una palabra de busqueda"
            type="text"
            class="w-full p-2 pl-6 mt-10 rounded-full border border-[#707070] focus:outline-none text-[#707070]"
            @keydown.enter="search"
          />
          <button @click="getComercios" class="pt-8 pl-3">
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
    <div class="pt-20">
      <p class="text-xl text-[#707070] w-3/4 mx-auto font-light pl-4">
        Resultados
      </p>
      <div
        class="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto rounded-lg"
      >
        <div
          v-for="(comercio, i) in comercios"
          :key="i"
          class="bg-[#FF9900] border text-white text-sm border-[#707070] m-4 px-4 h-52 md:h-32 text-center flex items-center justify-center rounded-xl cursor-pointer hover:scale-105 hover:drop-shadow-xl ease-in duration-100"
          @click="setDetails(comercio)"
        >
          <p>{{ comercio.razon_social }} <br /></p>
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
  </div>
</template>
<script>
export default {
  name: 'Categorias',
  data() {
    return {
      modal: false,
      comercios: [],
      total: 0,
      page: 1,
      nombre: '',
      details: {},
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total / 12)
    },
    start() {
      return this.page === 1 ? 0 : (this.page - 1) * 12
    },
    end() {
      return this.page * 12 - 1
    },
  },
  mounted() {
    this.getComercios()
  },
  methods: {
    async getComercios() {
      this.$nextTick(() => this.$nuxt.$loading.start())
      const search = this.nombre.toUpperCase()
      const { data, error } = await this.$supabase
        .from('comercios')
        .select('*')
        .range(this.start, this.end)
        .like('razon_social', `%${search}%`)
      const { count } = await this.$supabase
        .from('comercios')
        .select('id', { count: 'exact', head: true })
        .like('razon_social', `%${search}%`)
      this.$nuxt.$loading.finish()
      // eslint-disable-next-line no-console
      if (error) return console.error(error)
      this.comercios = data
      this.total = count
    },
    setPage(page) {
      this.page = page
      this.getComercios()
    },
    setDetails(comercio) {
      this.details = comercio
      this.modal = true
    },
    search() {
      this.page = 1
      this.getComercios()
    },
    clear() {
      this.nombre = ''
      this.page = 1
      this.getComercios()
    },
  },
}
</script>
