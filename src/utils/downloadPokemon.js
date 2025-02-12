import React from 'react'

import axios from 'axios';


async function downloadPokemon(pokemonListState, setPokemonListState,DEFAULT_URL,limit = 20) {
  try {
      const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL);
      /*axios.get(POKEDEX_URL) sends a GET request to the API.
      
      await ensures that the function waits for the response before moving forward.
      
      The response contains metadata about a list of Pokémon. */
      let pokemonResults = response.data.results ? response.data.results : response.data.pokemon ;
      pokemonResults = pokemonResults.slice(0,limit + 1)
      /*response.data contains the JSON response from the API.
      
      .results is an array of Pokémon, each having a name and url (which links to its detailed data). 
      
      pokemonResults is an array of Pokémon objects (each having a url).
      
      map() creates an array where each item is a promise that represents an HTTP request but hasn't resolved yet.*/

      // setPrevUrl(response.data.previous)
      // setNextUrl(response.data.next) 
      // setPokemonListState((state) => ({...state, nextUrl:  response.data.next, prevUrl: response.data.previous}))

      // Fetch additional details for each Pokémon
      const pokemonPromise = pokemonResults.map(p => 
        {
          if (p.url) {
            return axios.get(p.url)
          }
          else if (p.pokemon.url) {
            return axios.get(p.pokemon.url)
          }
        }
      );
      /*.map() iterates over pokemonResults, creating an array of Axios GET requests.
      
      Each request fetches detailed data for an individual Pokémon. 
      
      At this point, we haven't actually fetched any Pokémon details yet! We just have a list of pending requests.*/
      const pokemonListData = await axios.all(pokemonPromise);
      console.log(pokemonListData);
      /*axios.all(pokemonPromise) waits for all GET requests to resolve.
      
      await ensures the function waits until all requests finish.
      
      pokemonListData is now an array of responses, each containing a Pokémon's details. */

      const pokemonFinalList = pokemonListData.map(pokemonData => {
          const pokemon = pokemonData.data;
          return {
              id: pokemon.id,
              name: pokemon.name,
              image: pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default,
              types: pokemon.types.map(type => type.type.name) // Extract only type names
          };
      });

      // setPokemonList(pokemonFinalList);
      setPokemonListState({...pokemonListState, pokemonList: pokemonFinalList, nextUrl:  response.data.next, prevUrl: response.data.previous})
  } catch (error) {
      console.error("Error fetching Pokémon data:", error);
  }
}
export default downloadPokemon