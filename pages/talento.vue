<template>
    <div>
        <div class="bg-[#FF9900] h-60 flex justify-center text-center items-center text-white">
            <div class="w-2/5">

                <p class="text-2xl font-light">TALENTO</p>
                <p class="text-xl font-light">Para la productividad guatapense</p>
            </div>

        </div>
        <div class="bg-[url('@/static/foto-directorio-comercial.png')] bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center items-center" >
            <div class="w-1/2 flex gap-12">

                <router-link to="/email" class="bg-[#FF9900] w-1/2 p-6 rounded-2xl cursor-pointer hover:scale-105 duration-100 ease-out">
                    <img src="@/static/flecha.png" class="w-32 mx-auto" alt="">
                    <p class="text-center text-white">Ofrece tu talento</p>
                </router-link> 
                <router-link to="/categorias" class="bg-[#FF9900] w-1/2 p-6 rounded-2xl cursor-pointer hover:scale-105 duration-100 ease-out">
                    <img src="@/static/lupa.png" class="w-24 my-2 mx-auto" alt="">
                    <p class="text-center text-white">Encuentra talento local</p>
                </router-link> 
            </div>
        </div>
    </div>
</template>