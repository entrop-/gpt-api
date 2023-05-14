<template>
  <div v-text="answer">
  </div>
</template>

<script>
export default {
  name: 'BotAnswer',
  data: () => ({
    answer: 'Hello, world!',
  }),
};
</script>
