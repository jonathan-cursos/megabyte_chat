import { API } from '../config'
import useSwr from 'swr'

const fetcher = async (args) => {
  const res = await fetch(args)

  if (!res.ok) {
    //ERROR
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  } else {
    const data = await res.json()
    return data
  }
}

const useGetData = ({ userId } = {}) => {
  let endpoint = ''

  if (!userId) {
    endpoint = `${API}/user`
  } else {
    endpoint = `${API}/chat/${userId}`
  }

  const { data, error } = useSwr(endpoint, fetcher)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useGetData
