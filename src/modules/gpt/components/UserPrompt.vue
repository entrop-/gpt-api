<template>
  <div class="w-full flex">
    <form class="w-full" @submit.prevent="onEnter">
    <textarea
        class="w-full h-full"
        v-model="text"
         />
      <button type="submit">Enter</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getMessage } from '@/modules/gpt/api/get-message';

const text = ref('');

const onEnter = () => {
  console.log(text.value);
  getMessage(text.value);
};
</script>
