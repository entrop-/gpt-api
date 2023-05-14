<template>
  <div>
    <label
      :for="props.name"
      class="block text-sm font-medium text-gray-700 font-sans"
    >
      {{ props.label }}
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :id="props.name"
        :value="inputValue"
        type="text"
        :name="props.name"
        :autocomplete="props.autocomplete"
        :disabled="props.disabled"
        :placeholder="props.placeholder"
        class="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        @input="updateValue($event)"
        @blur="handleBlur"
      />
      <div
        v-show="errorMessage"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
      </div>
    </div>
    <div class="mt-2">
      <p v-if="errorMessage" id="email-error" class="text-sm text-red-600">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue';
    import { toRef } from 'vue';
  import { useField } from 'vee-validate';

  const props = defineProps({
    modelValue: {
      type: [Number, String, null] as PropType<any>,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    autocomplete: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  function updateValue(event: Event) {
    handleChange(event);
    emit('update:modelValue', (event.target as HTMLInputElement).value);
  }

  const name = toRef(props, 'name');

  const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
  } = useField(name, undefined, {
    initialValue: props.modelValue,
  });
</script>

