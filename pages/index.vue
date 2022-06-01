<script setup>
import { ChatIcon } from '@heroicons/vue/outline'
</script>

<template>
  <section class="px-4 pt-10 pb-4">
    <img
      src="../assets/images/wallpaper.jpg"
      alt="Wallpaper"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div
      class="absolute inset-x-2 bottom-2 flex justify-between gap-4 rounded-3xl bg-white/30 p-3 backdrop-blur-sm"
    >
      <NuxtLink
        to="chat-list"
        class="block rounded-xl bg-gradient-to-br from-green-400 via-green-600 to-green-500 p-2 text-white shadow-md"
      >
        <ChatIcon class="h-10 w-10" />
      </NuxtLink>
    </div>
  </section>
</template>
