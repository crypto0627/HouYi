import { Hono } from 'hono'
import { renderer } from './renderer'
import prismaClients from './lib/prisma'

type Bindings = {
  MY_KV: KVNamespace
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(renderer)

app.get('/', async c => {
  const prisma = await prismaClients.fetch(c.env.DB)
  const users = await prisma.users.findMany()
  console.log('users', users)
  return c.json(users)
})

export default app
