<template>
  <div class="bg-gray-200 p-10 flex items-center justify-center">
    <div class="p-8 rounded shadow-md max-w-3xl w-full bg-[#FF9900]">
      <h2 class="text-3xl font-semibold text-white mb-4">
        Formulario de Contacto
      </h2>
      <h3 class="text-2xl font-medium text-white">
        ¡Gracias por ponerte en contacto con nosotros!
      </h3>
      <p class="text-white">
        Estamos aquí para ayudarte. Por favor, completa el siguiente formulario
        y estaremos en contacto contigo en breve. ¡Esperamos saber de ti pronto!
      </p>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-white"
            >Nombre</label
          >
          <input
            v-model="formData.nombre"
            type="text"
            required
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
            class="border rounded w-full py-2 px-3 focus:outline-none focus:ring mt-2 focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-white"
            >Correo Electrónico</label
          >
          <input
            v-model="formData.email"
            required
            type="email"
            id="email"
            placeholder="Escribe tu correo electrónico"
            name="email"
            class="border rounded w-full py-2 px-3 focus:outline-none focus:ring mt-2 focus:border-blue-300"
          />
          <div
            v-if="errorEmail"
            class="text-red-500 mt-2 p-1 text-center rounded text-sm border bg-red-200 w-fit mx-auto border-red-500"
          >
            Formato de correo incorrecto
          </div>
        </div>
        <div class="mb-4">
          <label for="mensaje" class="block text-sm font-medium text-white"
            >Mensaje</label
          >
          <textarea
            v-model="formData.mensaje"
            id="mensaje"
            required
            placeholder="Escribe tu mensaje"
            name="mensaje"
            rows="4"
            class="border rounded w-full py-2 px-3 focus:outline-none focus:ring mt-2 focus:border-blue-300"
          ></textarea>
        </div>
        <div
          v-if="success"
          class="text-green-700 mb-2 p-1 text-center rounded text-sm border bg-green-200 px-10 w-fit mx-auto border-green-500"
        >
          ¡El mensaje ha sido enviado!
        </div>
        <button
          type="submit"
          :disabled="success"
          :class="{
            'opacity-50 cursor-not-allowed': success,
          }"
          class="bg-[#FF9900] border w-full mx-auto border-white text-white px-4 py-2 rounded hover:scale-105 duration-100 ease-out"
        >
          Enviar
        </button>
      </form>
      <Loading v-model="loading"></Loading>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const formData = ref({
  nombre: "",
  email: "",
  mensaje: "",
});
const errorEmail = ref(false);
const success = ref(false);
const loading = ref(false);
const submitForm = async () => {
  loading.value = true;
  if (validateEmail(formData.value.email)) {
    await useFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData.value),
    });
    loading.value = false;
    errorEmail.value = false;
    success.value = true;
  } else {
    errorEmail.value = true;
  }
};

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
/* export default {
  data() {
    return {
      formData: {
        nombre: "",
        email: "",
        mensaje: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes manejar el envío de datos del formulario, por ejemplo, hacer una solicitud HTTP.
      // En este ejemplo, solo mostramos los datos en la consola.
      console.log("Datos del formulario:", this.formData);
    },
  },
}; */
</script>
