<script setup lang="ts">
import { User } from '~~/utils/types'

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
