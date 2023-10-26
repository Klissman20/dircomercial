<template>
  <div>
    <div class="flex py-6">
        <div class="w-1/2 flex justify-center">

            <h3 class="text-2xl font-bold">Admin Comercios</h3>
        </div>
        <div class="flex w-1/2 gap-4 justify-center">

            <NuxtLink to="/admin/talentos">
              <p class="border border-black rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out">Talentos</p>
            </NuxtLink>
            <NuxtLink to="/admin">
              <p class="border border-black rounded-xl p-2 px-6 hover:scale-105 duration-100 ease-out">Salir</p>
            </NuxtLink>
        </div>
    </div>
  </div> 

</template>


