import axios from 'axios'

const instance =  axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  timeout: 1000
})

export default {
  get: (url, config) => instance.get(url, config).then(res => res.data),
  post: (url, data, config) => instance.post(url, data, config),
  delete: (url, data, config) => instance.delete(url, data, config),
}