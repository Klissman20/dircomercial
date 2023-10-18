<template>
  <div>
    <Modal v-model="modal" :persistent="true">
      <SendEmail @close="loadForm"></SendEmail>
    </Modal>
    <FormComercio :comercio="comercio"></FormComercio>
  </div>
</template>
<script lang="ts" setup>
import { Comercio } from "~/models/models";

const { getDataComercioByEmail } = useSupabaseDatasource();
// Data
const modal = ref(true);
const route = useRoute();

const comercio = ref({} as Comercio);

const loadForm = (com: Comercio) => {
  modal.value = false;
  comercio.value = com;
};

// Methods
onMounted(async () => {
  const { email } = route.query;
  //comercio.value = await getDataComercioByEmail(email as string);
});
</script>
