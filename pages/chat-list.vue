<script setup>
import { getChatList } from '~~/utils/chat-list-manager'
import ChatListHeader from '~~/components/chat-list/ChatListHeader'
import Chat from '~~/components/chat-list/Chat'

useHead({ title: 'Messages' })

const search = ref('')

const chats = ref(getChatList())

const filteredChats = computed(() => {
  const searchValue = search.value.trim()
  if (!searchValue.length) {
    return chats.value
  }

  return chats.value.filter((chat) =>
    `${chat.firstName} ${chat.lastName} ${chat.firstName}`
      .toLowerCase()
      .includes(searchValue.toLocaleLowerCase())
  )
})

const openChat = (userId) =>
  navigateTo({
    path: `/chat/${userId}`,
  })
</script>

<template>
  <section class="flex h-full flex-col">
    <ChatListHeader v-model:search.sync="search" class="flex-shrink-0" />
    <main class="flex flex-col overflow-y-auto bg-white">
      <h1 class="py-4 px-4 text-2xl font-bold text-gray-800">Messages</h1>
      <div>
        <Chat
          v-for="chat in filteredChats"
          :key="chat.id"
          :chat="chat"
          @chat-selected="openChat(chat.id)"
          class="px-4"
        />
      </div>
    </main>
  </section>
</template>
