<script setup>
import { ChevronLeftIcon } from '@heroicons/vue/outline'

const topBarClasses = useState('topBarClasses')
topBarClasses.value = 'text-white'

defineProps({
  search: { type: String, default: '' },
})
</script>

<template>
  <header
    class="bg-gradient-to-br from-violet-800 to-fuchsia-800 px-4 pt-6 shadow-md"
  >
    <div class="flex items-center gap-2 py-6">
      <NuxtLink to="/" class="text-white">
        <ChevronLeftIcon class="h-5 w-5" />
      </NuxtLink>
      <input
        type="text"
        placeholder="Search..."
        class="w-full rounded-full border border-violet-700 border-opacity-50 bg-transparent py-2 pl-4 text-violet-300 shadow-lg transition focus:border-opacity-100 focus:outline-none"
        :value="search"
        @input="$emit('update:search', $event.target.value)"
      />
    </div>
  </header>
</template>
