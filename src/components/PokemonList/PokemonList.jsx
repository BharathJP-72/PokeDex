import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    // const [pokemonList, setPokemonList] = useState([]);
    // const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL)
    // const [nextUrl, setNextUrl] = useState(DEFAULT_URL)
    // const [prevUrl, setPrevUrl] = useState(DEFAULT_URL)

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: DEFAULT_URL,
        nextUrl: DEFAULT_URL,
        prevUrl: DEFAULT_URL
    })


    async function downloadPokemon() {
        try {
            const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL);
            /*axios.get(POKEDEX_URL) sends a GET request to the API.
            
            await ensures that the function waits for the response before moving forward.
            
            The response contains metadata about a list of Pokémon. */
            const pokemonResults = response.data.results;
            /*response.data contains the JSON response from the API.
            
            .results is an array of Pokémon, each having a name and url (which links to its detailed data). 
            
            pokemonResults is an array of Pokémon objects (each having a url).
            
            map() creates an array where each item is a promise that represents an HTTP request but hasn't resolved yet.*/

            // setPrevUrl(response.data.previous)
            // setNextUrl(response.data.next) 
            // setPokemonListState((state) => ({...state, nextUrl:  response.data.next, prevUrl: response.data.previous}))

            // Fetch additional details for each Pokémon
            const pokemonPromise = pokemonResults.map(pokemon => axios.get(pokemon.url));
            /*.map() iterates over pokemonResults, creating an array of Axios GET requests.
            
            Each request fetches detailed data for an individual Pokémon. 
            
            At this point, we haven't actually fetched any Pokémon details yet! We just have a list of pending requests.*/
            const pokemonListData = await axios.all(pokemonPromise);
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

    useEffect(() => {
        downloadPokemon();
    }, [pokemonListState.pokedexUrl]); 
    /*useEffect runs downloadPokemon() only once when the component mounts.
    
    The empty dependency array ([]) ensures it runs only on the first render. */

    return (
        <div className="pokemon-list-wrapper">
            <h2>Pokemon List</h2>
            <div className="page-controls">
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.prevUrl})}>Prev</button>
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.nextUrl})}>Next</button>
            </div>
            <div className="pokemon-list">
                {pokemonListState.pokemonList.map(pokemon => (
                    <Pokemon 
                        key={pokemon.id} 
                        id={pokemon.id} 
                        name={pokemon.name} 
                        url={pokemon.image} 
                        types={pokemon.types} 
                    />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;