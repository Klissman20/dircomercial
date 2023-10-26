<template>
  <div class="bg-[url('@/static/foto-directorio-comercial.png')] py-20">
    <div
      class="w-1/2 mx-auto bg-black bg-opacity-30 text-center py-14 p-4 rounded-3xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        class="w-32 h-32 mx-auto stroke-white"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
        />
      </svg>

      <div class="w-1/2 mx-auto">
        <div class="relative w-full mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6 absolute stroke-gray-500 left-3 top-2.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <input
            v-model="userInput"
            type="text"
            placeholder="Usuario"
            class="placeholder:text-center focus:border-gray-600 focus:outline-none pr-6 w-full pl-10 border border-white p-2 rounded-2xl text-center"
          />
        </div>
      </div>
      <div class="w-1/2 mx-auto">
        <div class="relative w-full mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6 absolute stroke-gray-500 left-3 top-2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z"
            />
          </svg>
          <input
            v-if="showPassword"
            v-model="passInput"
            type="text"
            placeholder="Contraseña"
            class="placeholder:text-center focus:border-gray-600 focus:outline-none pr-6 w-full border pl-10 border-white p-2 rounded-2xl text-center"
          />
          <input v-else type="password" placeholder="Contraseña" class="placeholder:text-center focus:border-gray-600 focus:outline-none pr-6 w-full border pl-10 border-white p-2 rounded-2xl text-center" v-model="passInput" />
          <div class="control">
            <button class="button" @click="toggleShow">
              <span class="icon is-small is-right">
                <i
                  class="fas"
                  :class="{
                    'fa-eye-slash': showPassword,
                    'fa-eye': !showPassword,
                  }"
                ></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <p class="text-center mt-4 text-sm text-red-600">
        {{ msg }}
      </p>
      <button
        @click="logIn"
        class="w-1/2 mt-6 hover:scale-105 duration-100 ease-out mx-auto border border-white p-2 text-white rounded-2xl"
        type="button"
      >
        Ingresar
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const userAdmin = runtimeConfig.public.userAdmin;
const passAdmin = runtimeConfig.public.passAdmin;

const userInput = ref("");
const passInput = ref("");

const showPassword = ref(false);

const msg = ref("");

const router = useRouter();

const authenticate = useState("authenticate", () => false);

const logIn = () => {
  if (userInput.value === userAdmin && passInput.value === passAdmin) {
    router.push("/admin/comercios");
    msg.value = "";
    authenticate.value = true;
  } else {
    msg.value = "Usuario o contraseña incorrectos";
    authenticate.value = false;
  }
};

const toggleShow = () => {
  showPassword.value = !showPassword.value;
};
</script>
