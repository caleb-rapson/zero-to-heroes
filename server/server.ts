import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'

import welcome from './routes/welcome.ts'
import request from 'superagent'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.get('/api/v1/superhero', async (req, res) => {
  // const randomNum = getRandomNumber(1, 731)

  // Replace when random number function is implemented
  const randomNum = 245

  const response = await request.get(
    `https://superheroapi.com/api/6862842653726495/${randomNum}`
  )

  res.json(response.body)
})

export default server
