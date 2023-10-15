<template>
  <div class="bg-[#707070] rounded">
    <div class="mx-auto p-10 font-light text-lg">
      <h2 class="text-2xl font-bold">Enviar Email</h2>
      <label class="w-1/3 text-right"
        >Ingresa tu direccion de correo electronico para enviar email</label
      >
      <form @submit.prevent="searchEmail">
        <input
          v-model="email"
          type="email"
          required
          class="border rounded w-full p-1"
        />
        <div>Mensaje: {{ msg }}</div>
        <button
          type="submit"
          class="bg-white text-[#707070] border border-[#707070] p-2 rounded"
        >
          Enviar
        </button>
      </form>
      <hr class="my-4" />
      <form @submit.prevent="validateToken">
        <input
          type="text"
          name="msg"
          class="border rounded w-full p-1"
          v-model="token"
        />
        <button
          type="submit"
          class="bg-white text-[#707070] border border-[#707070] p-2 rounded"
        >
          Obtener Datos
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSupabaseDatasource } from "@/composables/supabase_datasource";
// Data
const email = ref("");
const msg = ref("");
const token = ref("");
const { getDataComercioByEmail, saveDataComercio } = useSupabaseDatasource();

const emit = defineEmits(["close"]);

const searchEmail = async () => {
  const comercio = await getDataComercioByEmail(email.value);

  if (!comercio) {
    msg.value = "Email no encontrado";
    return;
  }

  let token: string = generateRandomId(10);
  comercio.token = token;
  if (comercio) {
    const resp = await saveDataComercio(comercio);
    console.log(resp);
  }

  const valid = await sendEmail(token);
  if (valid) msg.value = "Email enviado";

  // body data type must match "Content-Type" header
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
  const comercio = await getDataComercioByEmail(email.value);
  if (!comercio) {
    msg.value = "Email no encontrado";
    return
  } 
  if (comercio.token === token.value) {
    msg.value = "Token valido";
    emit("close", comercio);
    return
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
