import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import request from 'superagent'

import { getRandomNumber } from '../client/helper/lib.js'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.get('/api/v1/hero', async (req, res) => {
  const randomNum = getRandomNumber(1, 731)

  const response = await request.get(
    `https://superheroapi.com/api/6862842653726495/${randomNum}`
  )

  res.json(response.body)
})

export default server
