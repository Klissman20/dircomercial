<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <SpeedInsights />
    <NavBar />
    <ClientOnly>
      <IndexSearch></IndexSearch>
    </ClientOnly>
    <NuxtPage />
    <PageFooter />
  </div>
</template>
