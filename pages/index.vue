<template>
  <div class="bg-[#FF9900]">
    <index-search></index-search>
    <div class="text-center py-12 h-96">
      <img src="@/static/actividades-comerciales.png" width="450" class="mx-auto" alt="" />
      <p class="text-2xl font-light text-white mt-4">
        Talento para la productividad guatapense
      </p>
      <hr class="w-2/3 mx-auto mt-4 mb-8" />
      <router-link to="/talento" class="bg-white text-[#707070] border border-[#707070] px-6 py-2 rounded-full">Ingresa
        aqui</router-link>
      <p class="text-md font-extralight text-white mt-4">
        Ofrece tus servicios o encuentra talento para tu establecimiento comercial
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {},
}
</script>
