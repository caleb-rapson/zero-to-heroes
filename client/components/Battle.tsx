import React from 'react';
import Hero from './Hero.tsx';
interface Superhero {
    id: number;
    name: string;
    intelligence: number;
    strength: number; 
    speed: number;
    durability: number;
    power: number;
    combat: number
}
interface BattleProps {
  player1Card: Superhero | null;
  player2Card: Superhero | null;
  attribute: keyof Superhero;
  winner: string;
}

const Battle = ({ player1Card, player2Card, attribute, winner }: BattleProps) => {
  return (
    <div className="battle-container">
      <div className="player-card">
        <h2>Player 1</h2>
        {player1Card ? <Hero superhero={player1Card} /> : <p>No card selected</p>}
      </div>
      <div className="player-card">
        <h2>Player 2</h2>
        {player2Card ? <Hero superhero={player2Card} /> : <p>No card selected</p>}
      </div>
      <div className="winner">
        <p>Winner: {winner}</p>
        <p>Attribute: {attribute}</p>
      </div>
    </div>
  );
};

export default Battle;