import axios from 'axios'

export default axios.create({
  baseURL: process.env.SITE_URL,
  timeout: 1000
})