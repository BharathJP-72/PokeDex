import './PokemonDetails.css'

import { Link } from 'react-router-dom'
import usePokemonDetails from '../../hooks/usePokemonDetails.js'
import {useParams} from 'react-router-dom'
import Pokemon from '../Pokemon/Pokemon.jsx'


function PokemonDetails({pokemonName}) {

  const [pokemon,pokemonListState] = usePokemonDetails(pokemonName)
  
  return (
    <>
		<h2><Link to="/">Pokedex</Link></h2>
		{pokemon && <div className='pokemon-details-wrapper'>
			<div>
				{pokemon.name}
			</div>
			<div className='pokemon'>
				<img src={pokemon.image} alt="" />
			</div>
			<div className='pokemon-attr'>
				height: {pokemon.height}
			</div>
			<div className='pokemon-attr'>
				weight: {pokemon.weight}
			</div>
			<div>
				Type: {pokemon.types.map(t => <span key={t.type.name}>{t.type.name}</span>)}
			</div>
    	</div>}

		<div className='similar-pokemons'>
			<h2>Similar Pokemons</h2>
			<div className="pokemon-similar-boxes">
				{pokemonListState.pokemonList.length > 0 &&
					pokemonListState.pokemonList.map(pokemon => 
						<Pokemon 
							key={pokemon.id} 
							id={pokemon.id} 
							name={pokemon.name} 
							url={pokemon.image} 
							types={pokemon.types} 
						/>
					)
				}
			</div>

		</div>
    </>
  )
}

export default PokemonDetails