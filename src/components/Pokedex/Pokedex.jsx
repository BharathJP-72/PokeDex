import './Pokedex.css';
import Search from '../Search/Search';
import React, { useState } from 'react'
import PokemonList from '../PokemonList/PokemonList';
import PokemonDetails from '../PokemonDetails/PokemonDetails'

function Pokedex() {

    const [searchTerm, setSearchTerm] = useState('')

    return(
        <div className='pokedex-wrapper'>
            <h1>Pokedex</h1>
            <Search updateSearchTerm = {setSearchTerm} /> 
            {searchTerm ? <PokemonDetails pokemonName={searchTerm}/> : <PokemonList />}
        </div>
    )
}

export default Pokedex