import chats from '~~/assets/data/chats.json'
import { IsChat } from '~~/utils/types'

export const getChatList = (): IsChat[] => chats

export const getChat = (chatId?: string): IsChat =>
  getChatList().find(({ id }) => id === chatId)
