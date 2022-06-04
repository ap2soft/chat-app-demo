<script setup>
import Avatar from '~~/components/user/Avatar'

defineProps(['chat'])
const emit = defineEmits(['userClicked', 'chatSelected'])
</script>

<template>
  <div class="flex cursor-pointer gap-4 py-4" @click="emit('chatSelected')">
    <Avatar :user="chat.user" />
    <div class="w-full overflow-hidden">
      <h3 class="text-sm font-bold text-gray-800">
        {{ chat.user.firstName }} {{ chat.user.lastName }}
      </h3>
      <div class="truncate text-xs text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti
        unde repudiandae asperiores necessitatibus, inventore vel tempora saepe
        possimus quae quas similique cupiditate sapiente id! Aliquam, vel!
        Deleniti, at modi!
      </div>
    </div>
    <time
      class="flex-shrink-0 text-xs text-gray-300"
      datetime="202-05-25 12:05:00"
    >
      1 day ago
    </time>
  </div>
</template>
