<template>
  <div>
    <div v-if="authenticate" class="flex py-6">
      <div class="w-1/2 flex justify-center">
        <h3 class="text-2xl font-bold">Admin Talentos</h3>
      </div>
      <div class="flex w-1/2 gap-4 justify-center">
        <NuxtLink to="/admin/comercios">
          <p
            class="border border-black rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out"
          >
            Comercios
          </p>
        </NuxtLink>
        <NuxtLink to="/admin">
          <p
            class="border border-black rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out"
          >
            Salir
          </p>
        </NuxtLink>
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
