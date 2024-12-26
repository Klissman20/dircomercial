<template>
  <NuxtLayout name="404">
    <div
      class="container mx-auto h-[65vh] flex flex-col justify-center items-center"
    >
      <div class="text-4xl p-4">Error 404</div>
      <div>Página no encontrada</div>
      <div class="p-4">
        <button
          class="bg-white hover:font-semibold text-[#707070] border border-[#707070] px-6 py-2 rounded-full duration-100 m-2 hover:px-10 hover:py-3 hover:bg-[#89C4E2] hover:text-white"
          @click="handleError"
        >
          Ir al inicio
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const props = defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>
