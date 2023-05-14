<template>
  <div class="w-full flex">
    <form class="w-full" @submit.prevent="onEnter">
      <TextBox name="prompt" label="ChatPrompt" v-model="text" />
      <button type="submit">{{ $t('button.submit') }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref }        from 'vue';
import { getMessage } from '@/modules/gpt/api/get-message';
import TextBox        from '@/components/TextBox.vue';

const text = ref('');

const onEnter = () => {
  getMessage(text.value);
};
</script>
