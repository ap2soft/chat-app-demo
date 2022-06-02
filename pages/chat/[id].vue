<script setup>
import ChatHeader from '~~/components/chat/ChatHeader'
import { getChat } from '~~/utils/chat-list-manager'

useHead({ title: 'Chat' })

const route = useRoute()
const chat = ref(getChat(route.params.id))
</script>

<template>
  <div class="">
    <ChatHeader :chat="chat" />
    <main class="mt-4 px-4">Chat Data</main>
  </div>
</template>
