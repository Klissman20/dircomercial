<template>
  <div>
    <Modal v-model="modal" :persistent="true">
      <SendEmail @close="loadForm"></SendEmail>
    </Modal>
    <div
      class="bg-[url('@/static/foto-directorio-comercial.png')] bg-cover bg-center bg-no-repeat py-12"
    >
      <FormHojadevida></FormHojadevida>
    </div>
  </div>
</template>

<script lang="ts" setup>
const modal = ref(false);
const loadForm = () => {};
</script>
