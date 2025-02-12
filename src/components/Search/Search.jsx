import useDebounce from '../../hooks/useDebounce'
import './Search.css'

import React from 'react'

function Search({updateSearchTerm}) {

  const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value))

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