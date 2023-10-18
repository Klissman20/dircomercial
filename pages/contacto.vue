<template>
  <div class="bg-gray-200 p-10 flex items-center justify-center">
    <div class="p-8 rounded shadow-md max-w-2xl w-full bg-[#FF9900]">
      <h2 class="text-3xl text-white font-semibold mb-4">
        Formulario de Contacto
      </h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-white"
            >Nombre</label
          >
          <input
            v-model="formData.nombre"
            type="text"
            id="nombre"
            name="nombre"
            class="border rounded w-full py-2 px-3 focus:outline-none focus:ring mt-2 focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-white"
            >Correo Electrónico</label
          >
          <input
            v-model="formData.email"
            type="email"
            id="email"
            name="email"
            class="border rounded w-full py-2 px-3 focus:outline-none focus:ring mt-2 focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="mensaje" class="block text-sm font-medium text-white"
            >Mensaje</label
          >
          <textarea
            v-model="formData.mensaje"
            id="mensaje"
            name="mensaje"
            rows="4"
            class="border rounded w-full py-2 px-3 focus:outline-none focus:ring mt-2 focus:border-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-[#FF9900] border w-full mx-auto border-white text-white px-4 py-2 rounded hover:scale-105 duration-100 ease-out"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>
