<script setup>
import { ref } from 'vue'
import { ChartBarIcon, WifiIcon, ClipboardIcon } from '@heroicons/vue/solid'
import { getTime } from '@/utils/time'

defineProps({
  colorClasses: {
    type: String,
    default: 'text-white',
  },
})

const time = ref(getTime())
setInterval(() => (time.value = getTime()), 30 * 1000)
</script>

<template>
  <div class="absolute inset-x-0 top-0 flex h-6">
    <div
      class="ml-6 mt-1 flex flex-1 justify-start gap-2"
      :class="colorClasses"
    >
      <span class="text-xs">{{ time }}</span>
    </div>
    <div class="w-40 rounded-b-3xl bg-black"></div>
    <div class="mr-6 mt-1 flex flex-1 justify-end gap-2" :class="colorClasses">
      <ChartBarIcon class="h-4 w-4" />
      <WifiIcon class="h-4 w-4" />
      <ClipboardIcon class="h-4 w-4 -rotate-90" />
    </div>
  </div>
</template>
