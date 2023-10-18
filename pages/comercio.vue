<template>
  <div>
    <Modal v-model="modal" :persistent="true" >
      <SendEmail @close="loadForm"></SendEmail>
    </Modal>
    <div class="bg-[url('@/static/foto-directorio-comercial.png')] bg-cover bg-center bg-no-repeat py-12" >
      <FormComercio :comercio="comercio"></FormComercio>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Comercio } from "~/models/comercio_model";

// Data
const modal = ref(true);

const comercio = ref({} as Comercio);

const loadForm = (com: Comercio) => {
  modal.value = false;
  comercio.value = com;
};
</script>
