//This custom React Hook is responsible for fetching, storing, and managing Pokémon data for the PokemonList component.

import  { useEffect, useState } from 'react';
import downloadPokemon from '../utils/downloadPokemon';

function usePokemonList(DEFAULT_URL) {

    // const [pokemonList, setPokemonList] = useState([]);
    // const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL)
    // const [nextUrl, setNextUrl] = useState(DEFAULT_URL)
    // const [prevUrl, setPrevUrl] = useState(DEFAULT_URL)

    //state object
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [], // Holds the fetched Pokémon list
        pokedexUrl: DEFAULT_URL, // Stores the current API URL
        nextUrl: DEFAULT_URL, // Stores the URL for the next page
        prevUrl: DEFAULT_URL // Stores the URL for the previous page
    })


    

    useEffect(() => {
        downloadPokemon(pokemonListState, setPokemonListState,DEFAULT_URL);
    }, [pokemonListState.pokedexUrl]); 
    /*How useEffect Works Here
        Runs only when pokedexUrl changes (e.g., when clicking "Next" or "Prev").

        Calls downloadPokemon to fetch data.

        Updates pokemonListState with the new Pokémon list and pagination URLs. */

    return (
        [pokemonListState,setPokemonListState]
    )
}

export default usePokemonList