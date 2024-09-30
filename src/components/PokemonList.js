
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonList } from '../Services/pokemonAPI';
import SearchBar from './SearchBar';
import './PokemonList.css';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(20); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const loadMorePokemon = useCallback(async () => {
    setLoading(true);
    try {
      const newPokemon = await getPokemonList(limit, offset);
      setPokemon((prevPokemon) => [...prevPokemon, ...newPokemon]);
      setOffset((prevOffset) => prevOffset + limit);
    } catch (error) {
      setError('Failed to load Pokémon. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [limit, offset]); 

  
  const loadUntilScrollable = useCallback(async () => {
    while (document.documentElement.scrollHeight <= window.innerHeight) {
      await loadMorePokemon();
    }
  }, [loadMorePokemon]);

  
  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop + 50 >= document.documentElement.offsetHeight && !loading) {
      console.log('Loading more Pokémon...');
      loadMorePokemon();
    }
  }, [loading, loadMorePokemon]);

  useEffect(() => {
    loadUntilScrollable();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, loadUntilScrollable]); 

  return (
    <div className="pokemon-list">
      <h1>Pokémon List</h1>
      <SearchBar setPokemon={setPokemon} />
      <div className="pokemon-container">
        {pokemon.map((poke, index) => (
          <Link key={index} to={`/pokemon/${poke.name}`} className="pokemon-item">
            <h3>{poke.name}</h3>
          </Link>
        ))}
      </div>
      {loading && <div className="loading">Loading more Pokémon...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default PokemonList;

