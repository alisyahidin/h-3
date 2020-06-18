import axios from 'axios'

const instance =  axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance