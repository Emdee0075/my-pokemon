import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonDetail } from '../Services/pokemonAPI';
import './PokemonDetail.css';
import './PokemonList.js';

function PokemonDetail() {
  const { id } = useParams(); 
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const pokemonData = await getPokemonDetail(id);
        setPokemon(pokemonData);
      } catch (error) {
        setError('Failed to load Pokémon details.');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonDetail();
  }, [id]);

  if (loading) return <div className="loading">Loading Pokémon details...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name}</h1>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Abilities: {pokemon.abilities.map((ab) => ab.ability.name).join(', ')}</p>

      <button onClick={() => navigate(-1)} className="back-button">
        Back/previous
      </button>
    </div>
  );
}

export default PokemonDetail;
