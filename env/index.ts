import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_ENDPOINT: z.string().default('http://localhost:3333'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  throw new Error('Invalid enviroments', _env.error)
}

export const env = _env.data
