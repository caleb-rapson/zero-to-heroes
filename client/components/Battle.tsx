import { useEffect, useState } from 'react'
import Hero from './Hero.tsx'

import { Superhero } from '../../models/Superhero.ts'
import { getRandomSuperhero } from '../apiClient.ts'

const Battle = () => {
  const [superheroOne, setSuperheroOne] = useState<Superhero | null>(null)
  const [superheroTwo, setSuperheroTwo] = useState<Superhero | null>(null)
  const [loadingOne, setLoadingOne] = useState(true)
  const [loadingTwo, setLoadingTwo] = useState(true)
  const [winner, setWinner] = useState('Waiting for bets...')
  const [attribute, setAttribute] = useState('Waiting for bets...')

  useEffect(() => {
    const fetchSuperheros = async () => {
      // Fetch first Superhero
      let superheroData = await getRandomSuperhero()
      setSuperheroOne(superheroData)
      setLoadingOne(false)

      // Fetch second Superhero
      superheroData = await getRandomSuperhero()
      setSuperheroTwo(superheroData)
      setLoadingTwo(false)
    }
    try {
      fetchSuperheros()
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message)
      else throw Error("Can't handle this error!")
    }
  }, [])

  // TODO: Determine which attribute to compare between combatants

  // TODO: Compare the chosen attribute of each combatant and determine the winner

  return (
    <>
      <div className="combatants">
        <div className="">
          {/* <h2>Combatant 1</h2> */}
          {loadingOne ? <p>Loading...</p> : <Hero superhero={superheroOne} />}
        </div>
        <div className="winner">
          <p>Winner: {winner}</p>
          <p>Attribute: {attribute}</p>
          {/* Possibly shift to a component inside Battle */}
          <div className="bet-container">
            <input type="number" placeholder="Place your bet" id="bet-amount" />
            <input
              type="text"
              placeholder="Credit Card Number"
              id="credit-card"
            />
            <button id="start-button">Start</button>
          </div>
        </div>
        <div className="">
          {/* <h2>Combatant 2</h2> */}
          {loadingTwo ? <p>Loading...</p> : <Hero superhero={superheroTwo} />}
        </div>
      </div>
    </>
  )
}

export default Battle
