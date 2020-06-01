import useSWR from 'swr'
import Router from 'next/router'
import axios from 'lib/axios'

const useAuth = initialData => {
  const { data: auth } = useSWR(
    '/api/user',
    axios.get,
    {
      initialData,
      onError: err => {
        err.toString() === 'Error: Request failed with status code 401' && Router.replace('/')
      }
    }
  )

  return { auth }
}

export default useAuth