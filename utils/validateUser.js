//Validate users you could make a chat with
import { API } from '../config'

const validateUsers = async (users, chatCreator) => {
  const chatsRes = await fetch(`${API}/chat/${chatCreator}?populate=pop`)
  const { body: chats } = await chatsRes.json()
  const usersWithChat = chats
    .map((chat) => {
      return chat.users.map((user) => user)
    })
    .flat()

  const newUsers = users.filter((user) => !usersWithChat.includes(user._id))
  return newUsers
}

export default validateUsers
