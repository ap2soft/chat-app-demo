<script setup>
// import { User } from '~~/utils/types'
import { ChevronLeftIcon } from '@heroicons/vue/outline'
import Avatar from '~~/components/user/Avatar.vue'

const topBarClasses = useState('topBarClasses')
topBarClasses.value = 'text-gray-800'

defineProps({
  chat: { type: Object },
})
</script>

<template>
  <header class="px-4 pt-6 shadow-md">
    <div class="flex items-center gap-2 py-6">
      <NuxtLink to="/chat-list" class="text-gray-400">
        <ChevronLeftIcon class="h-5 w-5" />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <Avatar :user="chat" />
        <h3 class="font-bold text-gray-800">
          {{ chat.firstName }} {{ chat.lastName }}
        </h3>
      </div>
    </div>
  </header>
</template>
