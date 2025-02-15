import useDebounce from '../../hooks/useDebounce'
import './Search.css'

import React from 'react'

function Search({updateSearchTerm}) {

  const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value)) //It is a function that is returned by the useDebounce hook.

  return (
    <input 
    id='search-pokemon'
    type="text"
    placeholder='Search a Pokemon'
    onChange={debounceUpdateSearch}
    />
  )
}

export default Search

/*What’s Happening?
1. User starts typing in the input field.

2. onChange={debounceUpdateSearch} fires each time the user types.

3. useDebounce delays calling updateSearchTerm until the user stops typing for a set time (default 2000ms / 2 seconds).

4. Once the delay passes, updateSearchTerm runs with the latest input value.

5.This prevents excessive re-renders and reduces API calls, making the app more efficient. */