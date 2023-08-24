import request from 'superagent'
// import { Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

// // *** EXAMPLE ***
// export function getWelcome(): Promise<Welcome> {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// // ***   ***   ***

export async function getRandomSuperhero() {
  const response = await request.get('/api/v1/superhero')

  return response.body
}
