<template>
  <main class="flex flex-row divider-y h-screen">
    <div class="w-full">
      <UserPrompt />
    </div>
    <div class="w-full">
      <BotAnswer />
    </div>
  </main>
</template>

<script setup lang="ts">
import UserPrompt from '@/modules/gpt/components/UserPrompt.vue';
import BotAnswer  from '@/modules/gpt/components/BotAnswer.vue';

</script>
