<template>
  <component :is="{ ...layout }">
    <slot />
  </component>
</template>

<script lang="ts">
import AppLayoutDefault from '@/layouts//AppLayoutDefault.vue';

export default {
  name: 'AppLayout',
  data: () => ({
    layout: AppLayoutDefault,
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        if (route.meta.layout) {
          try {
            const component = await import(
              /* @vite-ignore */ `../layouts/${route.meta.layout}.vue`
            );
            this.layout = component?.default;
          } catch (e) {
            this.layout = AppLayoutDefault;
          }
        }
      },
    },
  },
};
</script>
