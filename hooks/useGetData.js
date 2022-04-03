import { API } from '../config'
import useSwr from 'swr'

const fetcher = async (...args) => {
  try {
    const res = await fetch(...args)
    const data = await res.json()
    return data
  } catch (error) {
    return error
  }
}

const useGetData = ({ userId } = {}) => {
  let endpoint = ''

  if (!userId) {
    endpoint = `${API}/user`
  } else {
    endpoint = `${API}/chat/${userId}`
  }

  console.log(endpoint)
  const { data, error } = useSwr(endpoint, fetcher)

  console.log(data)
  console.log(errorgi)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useGetData
