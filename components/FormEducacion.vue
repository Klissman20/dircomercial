<template>
  <div>
    <div class="border bg-gray-300 rounded-md">
      <div
        v-for="({ grado, ubicacion, institucion, fechas }, i) in educacion"
        :key="i"
        class="w-full px-3 py-2 grid grid-cols-2 border-b"
      >
        <div>
          <strong>Título del Grado o Certificado</strong><br />
          <p>{{ grado }}</p>
        </div>
        <div>
          <button
            type="button"
            @click="deleteEducacion(i)"
            class="float-right text-xs px-1 bg-slate-100 rounded-sm ml-1"
          >
            Eliminar
          </button>
          <button
            type="button"
            @click="editEducacion(i)"
            class="float-right text-xs px-1 bg-slate-100 rounded-sm mr-1"
          >
            Editar
          </button>
          <strong>Ubicación</strong><br />
          <p>{{ ubicacion }}</p>
        </div>
        <div>
          <strong>Nombre de la Institución Educativa</strong><br />
          <p>{{ institucion }}</p>
        </div>
        <div>
          <strong>Fechas de Asistencia</strong><br />
          <p>{{ fechas }}</p>
        </div>
      </div>
    </div>

    <div
      class="mx-2 rounded overflow-hidden border mt-4 duration-75"
      :style="'height: ' + (open ? 210 : 0) + 'px'"
    >
      <div class="gap-2 grid grid-cols-2 p-3">
        <div>
          <label for="titulo" class="text-sm font-medium text-white py-1"
            >Título del Grado o Certificado</label
          >
          <input
            type="text"
            v-model="itemEducacion.grado"
            placeholder="Licenciatura en Economía"
            id="titulo"
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label for="ubicacion" class="text-sm font-medium text-white py-1"
            >Ubicación</label
          >
          <br />
          <input
            type="text"
            v-model="itemEducacion.ubicacion"
            placeholder="Guatapé - Antioquia, Colombia"
            id="ubicacion"
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label for="institucion" class="text-sm font-medium text-white py-1"
            >Nombre de la Institución Educativa</label
          >
          <br />
          <input
            type="text"
            placeholder="Universidad ABC"
            v-model="itemEducacion.institucion"
            id="institucion"
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label for="fechas" class="text-sm font-medium text-white py-1"
            >Fechas de Asistencia</label
          >
          <input
            id="fechas"
            type="text"
            v-model="itemEducacion.fechas"
            placeholder="Agosto 2015 - Mayo 2019"
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      <div class="w-full justify-evenly gap-3 flex pb-2">
        <button
          :disabled="disabled"
          class="rounded-md px-4 py-2 text-sm text-white duration-100 hover:shadow"
          :class="
            disabled
              ? 'bg-[#707070] cursor-not-allowed'
              : 'bg-[#89C4E2] hover:scale-110'
          "
          type="button"
          @click="addEducacion"
        >
          {{ id ? "Editar" : "Añadir" }}
        </button>
        <button
          @click="open = !open"
          class="bg-[#c33333] text-sm rounded-md px-4 py-2 text-white duration-100 hover:shadow"
          type="button"
        >
          Cerrar
        </button>
      </div>
    </div>
    <div v-if="!open" class="w-full text-center pt-3">
      <button
        type="button"
        @click="newEducacion"
        class="bg-gray-300 text-sm rounded-md px-4 py-2 duration-100 hover:shadow"
      >
        Añadir Educación
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
export interface Educacion {
  grado: string;
  ubicacion: string;
  institucion: string;
  fechas: string;
}

const educacion = useState<Educacion[]>("educacion");

const item = {
  grado: "",
  ubicacion: "",
  institucion: "",
  fechas: "",
};

const open = ref(false);
const id = ref<number>(0);
//const educacion = ref<Educacion[]>([]);
const itemEducacion = ref<Educacion>({ ...item });

const newEducacion = () => {
  itemEducacion.value = { ...item };
  id.value = 0;
  open.value = true;
};

const addEducacion = () => {
  if (id.value) educacion.value[id.value - 1] = itemEducacion.value;
  else educacion.value.push(itemEducacion.value);
  itemEducacion.value = { ...item };
  open.value = false;
};

const editEducacion = (i: number) => {
  itemEducacion.value = { ...educacion.value[i] };
  id.value = i + 1;
  open.value = true;
};

const deleteEducacion = (i: number) => {
  educacion.value.splice(i, 1);
  open.value = false;
};

const disabled = computed(
  () =>
    !itemEducacion.value.grado ||
    !itemEducacion.value.ubicacion ||
    !itemEducacion.value.institucion ||
    !itemEducacion.value.fechas
);

</script>
