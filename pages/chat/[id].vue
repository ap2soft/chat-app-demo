<script setup>
import { nextTick } from 'vue'
import ChatHeader from '~~/components/chat/ChatHeader'
import ChatMessage from '~~/components/chat/ChatMessage.vue'
import ChatFooter from '~~/components/chat/ChatFooter'
import { getChat } from '~~/utils/chat-list-manager'

useHead({ title: 'Chat' })

const route = useRoute()
const chat = ref(getChat(route.params.id))

const bottom = ref(null)
onMounted(() => {
  // TODO: This waits until chat is loaded, should use another approach
  setTimeout(() => bottom.value.scrollIntoView(), 100)
})

const sendHandler = (newMessage) => {
  console.log(newMessage)
}
</script>

<template>
  <section class="flex h-full flex-col">
    <ChatHeader :chat="chat" class="flex-shrink-0" />
    <main class="flex flex-col overflow-y-auto bg-gray-200 px-4 py-4">
      <div class="flex flex-col gap-4">
        <ChatMessage
          v-for="message in chat.messages"
          :key="message.id"
          :message="message"
        />
      </div>
      <div ref="bottom"></div>
    </main>
    <ChatFooter @send="sendHandler" />
  </section>
</template>
