import { Superhero } from '../../models/Superhero.ts'

interface HeroProps {
  superhero: Superhero
}

const Hero = ({ superhero }: HeroProps) => {
  return (
    <div className="card">
      <h2>{superhero.name}</h2>
      <img src={superhero.image.url} alt={superhero.name} />
      <p>Intelligence: {superhero.powerstats.intelligence}</p>
      <p>Strength: {superhero.powerstats.strength}</p>
      <p>Speed: {superhero.powerstats.speed}</p>
      <p>Durability: {superhero.powerstats.durability}</p>
      <p>Power: {superhero.powerstats.power}</p>
      <p>Combat: {superhero.powerstats.combat}</p>
    </div>
  )
}

export default Hero
