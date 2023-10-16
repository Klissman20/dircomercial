<template>
  <div class="bg-[#707070] rounded">
    <div class="mx-auto p-10 font-light text-lg">
      <h2 class="text-2xl font-bold">Enviar Email</h2>
      <p>Ingresa tu direccion de correo electronico para enviar email</p>
      <div class="p-2">{{ msg }}</div>
      <form @submit.prevent="searchEmail">
        <div class="flex gap-3">
          <label for="email" class="text-right p-2">Email:</label>
          <input
            v-model="email"
            type="email"
            placeholder="usuario@correo.com"
            id="email"
            required
            class="border rounded w-full p-1"
          />
          <button
            type="submit"
            class="bg-[#FF9900] text-white border border-[#575757] py-2 px-10 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
      <hr class="my-4" />
      <form @submit.prevent="validateToken">
        <div class="flex gap-3">
          <label for="token" class="text-right p-2">Token:</label>
          <input
            type="text"
            id="token"
            placeholder="nFnAdvlMwG"
            name="msg"
            required
            class="border rounded w-full p-1"
            v-model="token"
          />
          <button
            type="submit"
            class="bg-white w-full text-[#707070] border border-[#707070] p-2 rounded"
          >
            Obtener Datos
          </button>
        </div>
      </form>
      <Loading v-model="loading"></Loading>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSupabaseDatasource } from "@/composables/supabase_datasource";
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
