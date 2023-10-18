<template>
  <div class="bg-[#FF9900] rounded">
    <div class="mx-auto p-10 font-light text-lg">
      <NuxtLink to="/ayuda" class="float-right hover:scale-110 duration-100 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </NuxtLink>

      <h2 class="text-2xl font-bold text-white">Enviar Email</h2>
      <p class="text-white">
        Ingresa tu direccion de correo electronico para enviar email
      </p>
      <div
        v-if="msg"
        class="p-2 border border-red-600 rounded w-1/3 text-red-600 bg-red-200 mt-2 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="w-6 h-6 mx-2 mt-1"
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
      <form @submit.prevent="searchEmail">
        <div class="mt-2">
          <label for="email" class="text-right font-bold text-white"
            >Email:</label
          >
          <div class="block md:flex w-full gap-3 mt-1">
            <input
              v-model="email"
              type="email"
              placeholder="usuario@correo.com"
              id="email"
              required
              class="border rounded w-full p-2 focus:outline-none"
            />
            <button
              type="submit"
              class="bg-[#FF9900] text-white w-full md:w-1/5 border border-white py-2 px-10 rounded hover:scale-105 duration-100 ease-out mt-4 md:mt-0"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      <hr class="mt-4 mb-2" />
      <form @submit.prevent="validateToken">
        <div>
          <label for="token" class="text-right text-white font-bold"
            >Token:</label
          >
          <div class="block md:flex gap-3 mt-1">
            <input
              type="text"
              id="token"
              placeholder="nFnAdvlMwG"
              name="msg"
              required
              class="border rounded w-full p-2 focus:outline-none"
              v-model="token"
            />
            <button
              type="submit"
              class="bg-white w-full mt-4 md:mt-0 md:w-1/3 text-[#707070] border border-[#707070] hover:scale-105 duration-100 ease-out p-2 rounded"
            >
              Obtener Datos
            </button>
          </div>
        </div>
      </form>
      <Loading v-model="loading"></Loading>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSupabaseDatasource } from "@/composables/comercios_datasource";
// Data
const email = ref("");
const msg = ref("");
const token = ref("");
const loading = ref(false);
const { getDataComercioByEmail, saveDataComercio } = useSupabaseDatasource();

const emit = defineEmits(["close"]);

const searchEmail = async () => {
  loading.value = true;
  const comercio = await getDataComercioByEmail(email.value);

  if (!comercio) {
    msg.value = "Email no encontrado";
    loading.value = false;
    return;
  }

  let token: string = generateRandomId(10);
  comercio.token = token;
  await saveDataComercio(comercio);
  const valid = await sendEmail(token);
  if (valid) msg.value = "Email enviado";
  loading.value = false;
};

const sendEmail = async (token: string) => {
  try {
    const response = await $fetch("/api/send", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        auyhorization: "Bearer " + process.env.RESEND_API_KEY,
      },
      body: JSON.stringify({ email: email.value, token: token }),
    });
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
  }
};

const validateToken = async () => {
  loading.value = true;
  const comercio = await getDataComercioByEmail(email.value);
  loading.value = false;
  if (!comercio) {
    msg.value = "Email no encontrado";
    return;
  }
  if (comercio.token === token.value) {
    msg.value = "Token valido";
    emit("close", comercio);
    return;
  }
  msg.value = "Token invalido";
};

function generateRandomId(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }

  return result;
}
</script>
