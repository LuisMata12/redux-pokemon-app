import './styles/card.css'

export const Card = ({namePokemon}) => {
  return (
    <div className='containerCard'>
        <h3 className='cardTitle'>{namePokemon}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png`} alt={namePokemon} />
        <div className='filterCard'></div>
        <button className='btnCard'>ver mas</button>
    </div>
  )
}
