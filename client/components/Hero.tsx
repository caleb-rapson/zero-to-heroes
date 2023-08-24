import React from "react";

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
interface HeroProps {
    superhero: Superhero;
  }
  
  const Hero = ({ superhero }: HeroProps) => {
    return (
      <div className="card">
        <h2>{superhero.name}</h2>
        <p>Intelligence: {superhero.intelligence}</p>
        <p>Strength: {superhero.strength}</p>
        <p>Speed: {superhero.speed}</p>
        <p>Durability: {superhero.durability}</p>
        <p>Power: {superhero.power}</p>
        <p>Combat: {superhero.combat}</p>
      </div>
    );
  };
  
  export default Hero;