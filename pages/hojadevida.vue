<template>
  <div>
    <Modal v-model="modal" :persistent="true">
      <SendEmailTalento @close="loadForm"></SendEmailTalento>
    </Modal>
    <div
      class="bg-[url('@/static/foto-directorio-comercial.png')] bg-cover bg-center bg-no-repeat py-12"
    >
      <FormHojadevida :talento="talento"></FormHojadevida>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Talento } from '~/models/talento_model';

const talento = ref({} as Talento);
const modal = ref(true);
const loadForm = (tal: Talento) => {
  modal.value = false;
  talento.value = tal;
};
</script>
