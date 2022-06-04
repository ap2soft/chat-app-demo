<script setup lang="ts">
import * as timeago from 'timeago.js'
import { Direction } from '~/utils/types'

const { message } = defineProps(['message'])

const directionClasses = computed((): string => {
  if (message.direction === Direction.In) {
    return 'bg-white rounded-bl-none text-gray-800'
  } else if (message.direction === Direction.Out) {
    return 'bg-gradient-to-br from-violet-800 to-fuchsia-800 text-white self-end rounded-br-none'
  }
})
</script>

<template>
  <div
    class="flex w-10/12 flex-col gap-2 rounded-lg px-4 py-2 shadow-md"
    :class="directionClasses"
  >
    <div class="whitespace-pre-line" v-text="message.body"></div>
    <time class="self-end text-xs text-gray-400" :datetime="message.date">
      {{ timeago.format(message.date) }}
    </time>
  </div>
</template>
