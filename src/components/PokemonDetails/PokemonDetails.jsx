import './PokemonDetails.css'

import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PokemonDetails() {

  const {id} = useParams()
  console.log("ID~~",id);
  const POKEMON_DETAILS_URL = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokemon, setPokemon] = useState(null)

  async function downloadPokemon() {
    const response = await axios.get(POKEMON_DETAILS_URL + id)
    const pokemon = response.data 
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.other.dream_world.front_default
    })
  }

  useEffect(() => {
    downloadPokemon()
  }, [])
  
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
    </>
  )
}

export default PokemonDetails