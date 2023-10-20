<template>
  <div class="max-w-4xl my-8 mx-auto pt-3 bg-[rgba(0,0,0,0.4)] p-8 rounded-2xl">
    <h1 class="text-2xl text-white font-semibold py-2">
      Formulario de Hoja de Vida
    </h1>
    <form @submit.prevent="enviarHojaDeVida">
      <!-- Campos de información básica -->
      <div class="mb-4">
        <label for="nombre" class="block text-sm font-medium text-white py-1"
          >Nombre</label
        >
        <input
          type="text"
          required
          id="nombre"
          v-model="talento.nombre"
          class="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div class="mb-4 md:flex gap-2 items-center">
        <div class="w-full">
          <label for="email" class="block text-sm font-medium text-white py-1"
            >Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            v-model="talento.email"
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div class="w-full">
          <label
            for="telefono"
          
            class="block text-sm font-medium text-white py-1"
            >Teléfono
          </label>
          <input
            type="number"
            placeholder="3133550123"
            max="9999999999"
            id="telefono"
            v-model="talento.telefono"
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>

      <!-- Campos adicionales en una hoja de vida -->

      <div class="mb-4">
        <label for="objetivo" class="block text-sm font-medium text-white py-1"
          >Objetivo Profesional</label
        >
        <textarea
          id="objetivo"
          v-model="talento.objetivo"
          class="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="educacion" class="block text-sm font-medium text-white py-1"
          >Educación</label
        >
        <textarea
          id="educacion"
          v-model="talento.educacion"
          class="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>

      <div class="mb-4">
        <label
          for="experiencia"
          class="block text-sm font-medium text-white py-1"
          >Experiencia Laboral</label
        >
        <textarea
          id="experiencia"
          v-model="talento.experiencia"
          class="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>

      <div class="mb-4">
        <label
          for="habilidades"
          class="block text-sm font-medium text-white py-1"
          >Habilidades</label
        >
        <textarea
          id="habilidades"
          v-model="talento.habilidades"
          class="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="idiomas" class="block text-sm font-medium text-white py-1"
          >Idiomas</label
        >
        <textarea
          id="idiomas"
          v-model="talento.idiomas"
          class="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>

      <div class="mb-4">
        <label
          for="certificaciones"
          class="block text-sm font-medium text-white py-1"
          >Certificaciones</label
        >
        <textarea
          id="certificaciones"
          v-model="talento.certificaciones"
          class="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>

      <div class="text-center py-3 flex justify-center">
        <input type="checkbox" required id="checkbox" class="p-2" />
        <label for="checkbox"  class="ml-2 text-white"
          >
           Acepto los <NuxtLink to="/terminos" class="underline">Terminos y Condiciones</NuxtLink> 
        </label>
      </div>

      <!-- Botón de envío -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-[#FF9900] hover:scale-105 duration-100 ease-out text-white py-2 px-4 rounded-md"
        >
          Enviar Hoja de Vida
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { Talento } from "~/models/talento_model";
const { saveDataTalento } = useTalentoSBDatasource();

const props = defineProps({
  talento: { type: Object as PropType<Talento>, required: true },
});

const msg = ref("");

const enviarHojaDeVida = async () => {
  const data = await saveDataTalento(props.talento);
  msg.value = "Los datos se han guardado";
};
</script>
