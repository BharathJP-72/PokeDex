import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import downloadPokemon from '../utils/downloadPokemon'
import { useParams } from 'react-router-dom'

function usePokemonDetails(pokemonName) {

  const {id} = useParams()

  const POKEMON_DETAILS_URL = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokemon, setPokemon] = useState(null)

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: '',
    nextUrl: '',
    prevUrl: ''
})

  async function downloadGivenPokemon(id) {
    const response = await axios.get(POKEMON_DETAILS_URL + ((pokemonName) ? pokemonName : id ))
    const pokemon = response.data 
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.other.dream_world.front_default
    })

    const types = response.data.types.map(t => t.type.name)
    return types[0]
  }

  async function downloadPokemonAndRelated(id) {
    try {
      const type = await downloadGivenPokemon(id) 
      await downloadPokemon(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}`) 
    } catch (error) {
      console.log("not found");
    }
  }

  useEffect(() => {
    downloadPokemonAndRelated(id)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [id, pokemonName])

  return (
    [pokemon, pokemonListState]
)
}

export default usePokemonDetails