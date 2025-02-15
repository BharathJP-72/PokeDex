//The PokemonDetails component is responsible for displaying details of a specific Pokémon when a user clicks on it from the Pokedex list.

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

/*1️⃣ Understanding Props: {pokemonName}

pokemonName is passed as a prop from Pokedex.jsx when searching for a Pokémon.

If PokemonDetails is accessed via Pokedex.jsx, it receives pokemonName as a prop.

If accessed via routing (/pokemon/:id), it does not receive pokemonName but will use useParams() (we'll see this later).
*/

/*
2️⃣ Fetching Pokémon Data: usePokemonDetails

const [pokemon, pokemonListState] = usePokemonDetail(pokemonName)

usePokemonDetails(pokemonName) is a custom hook that fetches detailed Pokémon data (image, height, weight, type, etc.).

It returns an array:
	pokemon → The details of the selected Pokémon.
	pokemonListState → A list of Pokémon similar to the selected one.
🔹Example: If we are viewing Pikachu, pokemon will contain Pikachu's details, while pokemonListState.pokemonList might contain other Electric-type Pokémon.
*/

/*
Final Summary
✔ PokemonDetails fetches Pokémon details and similar Pokémon using usePokemonDetails().
✔ If accessed via search, it receives pokemonName as a prop.
✔ If accessed via a URL like /pokemon/25, it extracts id using useParams().
✔ Uses <Link> to navigate back to the main Pokedex.
✔ Displays Pokémon image, height, weight, and type.
✔ Shows a list of similar Pokémon.
*/