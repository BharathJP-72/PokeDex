Pokedex Web Application

Overview

The Pokedex Web Application is a React-based project that allows users to search for Pokémon, view detailed information, and navigate through a paginated list of Pokémon fetched from the PokeAPI. Future enhancements include user authentication, the ability to mark favorites, and backend integration with FastAPI.

Features

Search Functionality: Users can search for Pokémon by name.

Pagination: Navigate through the Pokémon list using next and previous buttons.

Detailed View: Clicking on a Pokémon displays its detailed attributes, including height, weight, type, and image.

Debounced Search: Optimized search input using a custom debounce hook.

Custom Hooks: Utilizes React hooks for fetching Pokémon details and managing API calls.

Tech Stack

Frontend: React.js, React Router, Context API, Redux, TailwindCSS

API: PokeAPI (https://pokeapi.co/)

State Management: React Hooks (useState, useEffect), Redux

Folder Structure

Pokedex/
│-- src/
│   │-- components/
│   │   │-- Search/
│   │   │-- PokemonList/
│   │   │-- PokemonDetails/
│   │   │-- Pokemon/
│   │-- hooks/
│   │   │-- useDebounce.js
│   │   │-- usePokemonList.js
│   │   │-- usePokemonDetails.js
│   │-- utils/
│   │   │-- downloadPokemon.js
│   │-- App.jsx
│   │-- index.js
│-- public/
│-- README.md

Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js (v16+ recommended)

npm or yarn

Steps to Run

Clone the repository:

git clone https://github.com/your-username/pokedex.git
cd pokedex

Install dependencies:

npm install  # or yarn install

Start the development server:

npm run dev  # or yarn dev

Open the app in your browser:

http://localhost:5173/

Future Enhancements

User Authentication: Implement login/signup using FastAPI backend.

Favorites: Allow users to bookmark favorite Pokémon.

Filtering Options: Filter by type, generation, abilities.

Dark Mode: Toggle between light and dark themes.

Contribution

Feel free to fork the repository and submit pull requests to improve the project. Suggestions and feature requests are always welcome!

License

MIT License. See LICENSE for more details.

