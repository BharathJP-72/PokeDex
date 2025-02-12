import  { useEffect, useState } from 'react';
import downloadPokemon from '../utils/downloadPokemon';

function usePokemonList(DEFAULT_URL) {

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


    

    useEffect(() => {
        downloadPokemon(pokemonListState, setPokemonListState,DEFAULT_URL);
    }, [pokemonListState.pokedexUrl]); 
    /*useEffect runs downloadPokemon() only once when the component mounts.
    
    The empty dependency array ([]) ensures it runs only on the first render. */

    return (
        [pokemonListState,setPokemonListState]
    )
}

export default usePokemonList