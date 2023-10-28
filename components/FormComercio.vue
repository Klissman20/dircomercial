<template>
  <div class="max-w-4xl mx-auto bg-[rgba(0,0,0,0.4)] px-8 rounded-2xl">
    <h2 class="text-4xl pt-8 font-bold text-white">Formulario</h2>
    <hr class="my-6" />

    <form @submit.prevent="saveComercio">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div>
          <label for="nombre" class="w-1/3 text-white">Nombre:</label>
          <input
            id="nombre"
            v-model="comercio.nombre"
            name="nombre"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>

        <div class="mt-5 md:mt-0">
          <label for="razon_social" class="w-1/3 text-white"
            >Razón Social:</label
          >
          <input
            id="razon_social"
            v-model="comercio.razon_social"
            name="razon_social"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
      </div>
      <div>
        <div class="mt-5 w-full">
          <label for="actividad" class="w-1/3 text-white"> Actividad:</label>
          <textarea
            id="actividad"
            v-model="comercio.actividad"
            rows="3" max="600"
            name="actividad"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          ></textarea>
        </div>
      </div>
      <div class="gap-x-8 grid grid-cols-1">
        <div class="pt-4">
          <label for="direccion" class="w-1/3 text-white">Dirección:</label>
          <input
            id="direccion"
            v-model="comercio.direccion"
            name="direccion"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
      </div>

      <div class="gap-x-8 grid grid-cols-1 md:grid-cols-2">
        <div class="pt-6">
          <label for="matricula" class="w-1/3 text-white">Matrícula:</label>
          <input
            id="matricula"
            v-model="comercio.matricula"
            name="matricula"
            disabled
            type="text"
            class="border bg-white rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
        <div class="pt-6">
          <label for="email" class="w-1/3 text-white"
            >Correo Electrónico:</label
          >
          <input
            id="email"
            v-model="comercio.email"
            name="email"
            type="email"
            required
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
      </div>
      <div class="gap-x-8 grid grid-cols-1 md:grid-cols-3">
        <div class="pt-6">
          <label for="fecha_matricula" class="w-1/3 text-white"
            >Fecha Matrícula:</label
          >
          <input
            id="fecha_matricula"
            v-model="comercio.fecha_matricula"
            disabled
            name="fecha_matricula"
            type="text"
            class="border bg-white rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
        <div class="pt-6">
          <label for="fecha_renovacion" class="w-1/3 text-white"
            >Fecha Renovación:</label
          >
          <input
            id="fecha_renovacion"
            v-model="comercio.fecha_renovacion"
            disabled
            name="fecha_renovacion"
            type="text"
            class="border bg-white rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
        <div class="pt-6">
          <label for="ano" class="w-1/3 text-white">Año:</label>
          <input
            id="ano"
            v-model="comercio.ano"
            disabled
            name="ano"
            type="number"
            class="border bg-white rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
      </div>

      <div class="gap-x-8 grid grid-cols-1 md:grid-cols-2">
        <div class="pt-4">
          <label for="nit" class="w-1/3 text-white">NIT:</label>
          <input
            id="nit"
            v-model="comercio.nit"
            disabled
            name="nit"
            type="number"
            class="border bg-white rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>

        <div class="pt-4">
          <FileUplodad v-if="comercio.id" :id="comercio.id"></FileUplodad>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8">
        <div class="pt-6">
          <label for="telefono1" class="w-1/3 text-white">Teléfono 1:</label>
          <input
            id="telefono1"
            v-model="comercio.telefono1"
            name="telefono1"
            type="number"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>

        <div class="pt-6">
          <label for="telefono2" class="w-1/3 text-white">Teléfono 2:</label>
          <input
            id="telefono2"
            v-model="comercio.telefono2"
            name="telefono2"
            type="number"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>

        <div class="pt-6">
          <label for="telefono3" class="w-1/3 text-white">Teléfono 3:</label>
          <input
            id="telefono3"
            v-model="comercio.telefono3"
            name="telefono3"
            type="number"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          />
        </div>
      </div>

      <div>
        <div class="pt-6">
          <label for="ciiu1" class="w-1/3 text-white">Ciiu 1:</label>
          <textarea
            id="ciiu1"
            v-model="comercio.ciiu1"
            rows="3"
            name="ciiu1"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          ></textarea>
        </div>

        <div class="pt-6">
          <label for="ciiu2" class="w-1/3 text-white">Ciiu 2:</label>
          <textarea
            id="ciiu2"
            v-model="comercio.ciiu2"
            rows="3"
            name="ciiu2"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          ></textarea>
        </div>

        <div class="pt-6">
          <label for="ciiu3" class="w-1/3 text-white">Ciiu 3:</label>
          <textarea
            id="ciiu3"
            v-model="comercio.ciiu3"
            rows="3"
            name="ciiu3"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          ></textarea>
        </div>

        <div class="pt-6">
          <label for="ciiu4" class="w-1/3 text-white">Ciiu 4:</label>
          <textarea
            id="ciiu4"
            v-model="comercio.ciiu4"
            rows="3"
            name="ciiu4"
            type="text"
            class="border rounded w-full p-1 mt-2 focus:outline-none text-[#707070]"
          ></textarea>
        </div>
      </div>
      <hr class="mt-10" />
      <div class="block md:flex justify-end gap-4">
        <div
          :class="{ 'scale-0': !msg }"
          class="p-2 border h-12 border-green-600 duration-100 rounded w-full text-green-600 bg-green-200 mt-2 flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6 mx-2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <p class="ml-4">{{ msg }}</p>
        </div>
        <button
          class="hover:scale-105 duration-100 w-full md:w-1/3 ease-out text-white border border-white p-2.5 px-6 mb-4 md:mt-4  rounded"
          type="submit"
        >
          Confirmar Datos
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { Comercio } from "~/models/comercio_model";
const { saveDataComercio } = useSupabaseDatasource();

const props = defineProps({
  comercio: {
    type: Object as PropType<Comercio>,
    required: true,
  },
});

const msg = ref("");

const saveComercio = async () => {
  const data = await saveDataComercio(props.comercio);
  msg.value = "Los datos se han guardado";
};
</script>
