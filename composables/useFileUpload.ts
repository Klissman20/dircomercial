// composables/useFileUpload.ts
import { ref, watch } from "vue";

export function useFileUpload() {
  const client = useSupabaseClient();
  const fileInput = ref<HTMLInputElement | null>(null);
  const uploading = ref(false);
  const errorMessage = ref("");
  const fileUrl = ref<string | null>(null);

  const uploadFile = async (id: number) => {
    if (fileInput.value?.files?.length) {
      const file = fileInput.value.files[0];
      const maxFileSizeInBytes = 1 * 1024 * 1024;

      if (file.size > maxFileSizeInBytes) {
        errorMessage.value =
          "El archivo es demasiado grande. Por favor, seleccione un archivo de 1 MB o menos.";
        return;
      }
      uploading.value = true;

      try {
        const { data, error } = await client.storage
          .from("images")
          .upload(`${id}.jpg`, file, {
            upsert: true
          });
          //.upload(`${id}.jpg`, file, { upsert: true });

        if (error) {
          errorMessage.value = "Error al cargar el archivo.";
          console.error("Error al cargar el archivo", error);
        } else if (data) {
          fileUrl.value = data.path;
        }
      } catch (error) {
        errorMessage.value = "Error al cargar el archivo.";
        console.error("Error al cargar el archivo", error);
      } finally {
        uploading.value = false;
      }
    } else {
      errorMessage.value = "No se ha seleccionado ningún archivo.";
      console.error("No se ha seleccionado ningún archivo.");
    }
  };

  const clearFileInput = () => {
    if (fileInput.value) {
      fileInput.value.value = "";
      errorMessage.value = "";
    }
  };

  // Monitorea cambios en el archivo seleccionado
  watch(fileInput, () => {
    fileUrl.value = null;
  });

  return {
    fileInput,
    uploading,
    fileUrl,
    uploadFile,
    clearFileInput,
    errorMessage,
  };
}
