import { useState, useEffect } from 'react'

import { getRandomSuperhero } from '../apiClient.ts'
import Battle from './Battle.tsx'

function App() {
  return (
    <>
      <header>
        <h1>Zero$ for Heroe$</h1>
      </header>

      <main>
        <div className="game-container">
          <Battle />
        </div>

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

        {/* Possibly shift to a component inside Battle */}
        <div className="timer">
          Time: <span id="timer">30</span>
        </div>

        {/* Possibly shift to a component inside Battle */}
        <div className="winner">
          Winner: <span id="winner"></span>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 Zero$ to Heroe$ Game App</p>
      </footer>
    </>
  )
}

export default App
