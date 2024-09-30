import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setPokemon }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`).then(res => res.json());
    const filtered = filteredPokemon.results.filter(pokemon => pokemon.name.includes(term));
    setPokemon(filtered);
  };

  return (
    <div className="search-bar">
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search Pokémon by name..."/>
    </div>
  );
}

export default SearchBar;
