import { API } from '../config'
import useSwr from 'swr'

const fetcher = async (args) => {
  const res = await fetch(args)
  const data = await res.json()
  return data
}

const useGetData = ({ userId, chatId } = {}) => {
  let endpoint = ''

  if (!userId && !chatId) {
    endpoint = `${API}/user`
  } else if (userId && !chatId) {
    endpoint = `${API}/user/${userId}`
  } else {
    endpoint = `${API}/user/${userId}/${chatId}`
  }

  const { data, error } = useSwr(endpoint, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useGetData
