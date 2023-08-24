import { useState, useEffect } from 'react'

import { getRandomSuperhero } from '../apiClient.ts'

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')
  const [superhero, setSuperhero] = useState(null)

  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  useEffect(() => {
    const fetchSuperhero = async () => {
      const superheroData = await getRandomSuperhero()
      // console.log(superheroData)
      setSuperhero(superheroData)
    }
    try {
      fetchSuperhero()
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message)
      else throw Error("Can't handle this error!")
    }
  }, [])

  return (
    <>
      {/* <h1>{welcomeStatement}</h1> */}
      <div>{superhero?.name}</div>
    </>
  )
}

export default App
