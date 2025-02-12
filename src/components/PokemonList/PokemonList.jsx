import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList.js';

function PokemonList() {
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    
    const [pokemonListState,setPokemonListState] = usePokemonList(DEFAULT_URL)

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