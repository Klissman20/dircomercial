<template>
  <div>
    <label for="fileInput" class="block text-white text-sm p-0.5 font-medium"
      >Selecciona un archivo:</label
    >
    <div class="flex gap-2">
      <input
        type="file"
        id="fileInput"
        @change="uploadFile(id)"
        class="mt-1 p-1 border rounded-md text-white"
        ref="fileInput"
        accept="image/png, image/jpeg"
      />

      <button
        type="button"
        :disabled="fileInput === null"
        @click="clearFileInput"
        :class="{ 'bg-red-500': fileUrl !== null }"
        class="text-white rounded-md mt-1 px-3 border border-white"
      >
        Limpiar
      </button>
    </div>

    <div v-if="uploading" class="mt-4">Subiendo archivo...</div>

    <Loading v-model="uploading"></Loading>
    <div class="text-red-800 pt-2 font-medium text-xs" v-if="errorMessage">
      {{ errorMessage }}
    </div>

    <div v-if="fileUrl" class="p-2 w-full text-center text-white">
      Archivo subido correctamente
    </div>
  </div>
</template>

<script lang="ts">
import { useFileUpload } from "~/composables/useFileUpload";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const {
      fileInput,
      uploading,
      fileUrl,
      uploadFile,
      clearFileInput,
      errorMessage,
    } = useFileUpload();

    return {
      fileInput,
      uploading,
      fileUrl,
      uploadFile,
      clearFileInput,
      errorMessage,
    };
  },
};
</script>
