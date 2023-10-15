<template>
  <transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-show="modelValue"
      class="justify-center z-10 items-center fixed top-0 left-0 flex w-full h-full items-center"
    >
      <div
        class="bg-black bg-opacity-70 fixed top-0 left-0 h-full ease-in w-full"
        @click="$emit('update:modelValue', false)"
      ></div>
      <div
        class="mx-auto max-w-3xl relative z-20 w-full duration-100"
        :class="{ 'translate-y-10': !modelValue }"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
defineProps({
  modelValue: Boolean,
});
</script>
