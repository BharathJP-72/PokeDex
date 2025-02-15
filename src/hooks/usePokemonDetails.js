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

/*
🔹 What is useParams() Doing?

const { id } = useParams();

useParams() is a React Router hook.
It extracts URL parameters from the current route.
If the user visits /pokemon/25, then:

console.log(id); // Outputs: 25

This means id gets the Pokémon ID from the URL
*/

/*
📌 Summary
✔ Fetches Pokémon details based on pokemonName or id.
✔ Extracts the first Pokémon type and fetches similar Pokémon.
✔ Uses useEffect() to fetch data on mount or when ID changes.
✔ Scrolls to the top smoothly when a new Pokémon is selected.
*/