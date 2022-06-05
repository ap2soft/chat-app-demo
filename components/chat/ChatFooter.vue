<script setup>
import { PaperAirplaneIcon } from '@heroicons/vue/solid'

const message = ref('')

const onSubmit = () => {
  emit('send', message.value)
  message.value = ''
}

const emit = defineEmits(['send'])
</script>

<template>
  <footer class="px-4 pt-4 pb-6 shadow-md">
    <form @submit.prevent="onSubmit" class="flex items-center gap-2">
      <input
        type="text"
        class="w-full rounded-md border border-fuchsia-200 px-4 py-2 transition hover:border-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400/30"
        v-model="message"
        placeholder="Type something..."
      />
      <button
        class="rounded-md text-fuchsia-500 transition hover:text-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400/30 disabled:cursor-not-allowed disabled:text-fuchsia-100"
        :disabled="!message"
      >
        <PaperAirplaneIcon class="h-6 w-6 rotate-90" />
      </button>
    </form>
  </footer>
</template>
