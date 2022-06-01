import users from '~~/assets/data/users.json'
import { User } from '~~/utils/types'

export const getChatList = (): User[] => users

export const getChat = (userId?: string): User =>
  getChatList().find(({ id }) => id === userId)
