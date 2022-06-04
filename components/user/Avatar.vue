<script setup>
defineProps({
  user: { type: Object },
})
</script>

<template>
  <img
    :src="user.picture"
    :alt="`${user.firstName} ${user.lastName}'s Avatar`"
    class="h-10 w-10 shrink-0 rounded-full border border-gray-300"
  />
</template>
