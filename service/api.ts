import { env } from '@/env/index'
import axios from 'axios'

const api = axios.create({
  baseURL: env.NEXT_PUBLIC_ENDPOINT,
})

api.defaults.headers['Content-Type'] = 'application/json'

export default api
