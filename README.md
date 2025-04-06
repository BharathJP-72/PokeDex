# 💎 Pokédex Web Application

## 🚀 Overview
A **Pokédex** application built using **React**, allowing users to search, filter, and view detailed information about Pokémon. The app fetches real-time data from the **PokéAPI** and provides an interactive experience with seamless navigation and dynamic UI updates.

## 🛠️ Tech Stack
- **Frontend:** React, React Router
- **State Management:** Context API, Reducer
- **API:** PokéAPI (https://pokeapi.co/)
- **Styling:** CSS,TailwindCSS 
- **Future Enhancements:** Backend with **FastAPI**, MongoDB for user authentication & favorites

## 🌟 Features
- 🔍 **Search Functionality** to find Pokémon by name
- 🌬️ **Filter by Type** (e.g., Electric, Fire, Water)
- 👤 **Pokémon Details Page** (height, weight, abilities, evolution chain)
- 🎯 **Dynamic Image Rendering** from PokéAPI
- 📃 **Similar Pokémon Suggestions**
- ✨ **State Management using Context API & Reducer**
- 🔒 *Planned*: User Authentication, Favorites List

## 📂 Project Structure
```
/ src
  |-- components
  |   |-- PokemonList.js
  |   |-- PokemonDetails.js
  |   |-- SearchBar.js
  |-- context
  |   |-- PokemonContext.js
  |-- hooks
  |   |-- usePokemonDetails.js
  |-- utils
  |   |-- downloadPokemon.js
  |-- App.js
  |-- index.js
```

## 🔄 Installation & Setup
```sh
git clone https://github.com/BharathJP-72/PokeDex.git
cd pokedex-app
npm install
npm start
```

## 🚀 Usage
1. **Search for a Pokémon** using the search bar.
2. **Click on a Pokémon** to view detailed stats.
3. **Browse similar Pokémon** based on type.
4. *(Future Update)* Sign up & save favorites!

## 🌐 API Reference
- **Pokémon Data:** [PokéAPI](https://pokeapi.co/)
- Example API Calls:
  ```sh
  GET https://pokeapi.co/api/v2/pokemon/{name}
  GET https://pokeapi.co/api/v2/type/{type}
  ```

## 🔄 Future Enhancements
- 🔑 **User Authentication** (Sign up/Login)
- 📢 **Favorites List** for users
- 📈 **Performance Optimization** (caching, lazy loading)
- 🌐 **PWA Support** for offline usage

## 📚 License
This project is open-source and available under the **MIT License**.



