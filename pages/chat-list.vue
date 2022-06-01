<script setup>
import { getChatList } from '~~/utils/chat-list-manager'
import ChatListHeader from '~~/components/chat-list/ChatListHeader'
import Chat from '~~/components/chat-list/Chat'

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

const router = useRouter()
const openChat = (userId) =>
  navigateTo({
    path: `/chat/${userId}`,
  })
</script>

<template>
  <section>
    <ChatListHeader v-model:search.sync="search" />
    <main
      class="flex flex-grow flex-col overflow-y-auto bg-white px-4 text-gray-900"
    >
      <h1 class="py-4 text-2xl font-bold text-gray-800">Messages</h1>
      <div class="flex-grow overflow-y-auto">
        <Chat
          v-for="chat in filteredChats"
          :key="chat.id"
          :chat="chat"
          @chat-selected="openChat(chat.id)"
        />
      </div>
    </main>
  </section>
</template>
