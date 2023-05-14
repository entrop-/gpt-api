<template>
  <div class="bg-black text-green-200">
    <h1>Gpt</h1>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue';
onBeforeMount(() => {
  document.body.className = '';
});
</script>
