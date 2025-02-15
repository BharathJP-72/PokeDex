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

/*
Using the useState hook to create a searchTerm state variable
Initial value is an empty string
setSearchTerm is the function that will update this state
*/

/*A Search component that receives setSearchTerm as a prop (named updateSearchTerm)
Conditional rendering using ternary operator:

If searchTerm exists: shows PokemonDetails component with the searchTerm as pokemonName prop
If searchTerm is empty: shows PokemonList component */

/* The reason we pass the setter function (setSearchTerm) instead of the state variable (searchTerm) is because we want the Search component to update the search term in the Pokedex component.

In React, state is managed in the component where it is defined. If a child component needs to update the state in a parent component, we pass down the setter function as a prop.

Why Pass setSearchTerm Instead of searchTerm?
✅ Passing searchTerm (useState value)

If we pass searchTerm directly, the Search component can read the current search term, but it cannot change it.
✅ Passing setSearchTerm (useState setter function)

This allows Search to update the search term in Pokedex, which re-renders the UI accordingly.

We pass the setter (setSearchTerm) so that the child (Search) can modify the state in the parent (Pokedex). This follows the React "lifting state up" principle, ensuring the parent remains in control of the state while allowing updates from child components.*/