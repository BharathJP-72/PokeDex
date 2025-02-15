
import Pokedex from './components/Pokedex/Pokedex'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  return (
    <Routes >
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />}  />
      <Route path="*" element={<h1>Not Found!!</h1>}  />
    </Routes>
  )
}

export default App

/*This sets up three routes in your application:

The root path "/" renders the Pokedex component (likely your main listing page)
"/pokemon/:id" renders the PokemonDetails component. The ":id" is a URL parameter that can be used to fetch specific Pokemon details
"*" is a catch-all route that displays "Not Found!!" for any undefined routes (404 handling)

Key React Router Concepts:

Routes acts as a container for all your Route definitions
Route components define the mapping between URLs and components
The ":id" parameter in "/pokemon/:id" is dynamic, allowing you to capture values from the URL (e.g., /pokemon/1, /pokemon/25, etc.) */

/*path="/" → This means that when the user visits the root URL (/), the Pokedex component will be rendered.
element={<Pokedex />} → Specifies that the Pokedex component should be displayed when this route is active.

The root URL refers to the base URL of your application, which in your case is:

👉 http://localhost:5173/ (if you're using Vite)*/