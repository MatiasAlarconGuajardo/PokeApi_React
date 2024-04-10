import React, { useState } from 'react';  
import { ModalProps } from '../types/types';
import PokemonDetails from './pokemonDetails';
import Sidebar from './sideBar';
import './pokemonModal.css';
import { get } from 'http';
import { getPokemons } from '../api/list';

const PokemonModal: React.FC<ModalProps> = ({ isOpen, onClose, pokemon, typeName }) => {
  const [pokemonId, setPokemonId] = useState<number>(pokemon.id);
  const [pokemonName, setPokemonName] = useState<string>(pokemon.name);

  const getPokemonName= async(id:number)=>{
    const urlNames =`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    const response = await getPokemons.getData(urlNames);
    const responseName = response.data;
    console.log(responseName);
  }

  const handlePreviousClick = () => {
    const newPokemonId = pokemonId - 1;
    console.log("id:",newPokemonId);
    getPokemonName(newPokemonId);
    setPokemonId(newPokemonId);
  };

  const handleNextClick = () => {
    const newPokemonId = pokemonId + 1;
    getPokemonName(newPokemonId);
    setPokemonId(newPokemonId);
  };

  return (
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <PokemonDetails pokemon={pokemon} typeName={typeName} pokemonId={pokemonId} />
      <div className='paginationId' onClick={e => e.stopPropagation()}>
        <div className='pagination'>
          <div className='paginationDiv' onClick={handlePreviousClick}>
            <img
              height={"40px"}
              width={"40px"}
              alt={`${pokemon.name} sprite`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId - 1}.gif`}
              onError={e => { e.currentTarget.src = '../assets/placeholder.png' }} />
            <p className='paginationP'>Anterior</p>
            <p>#{pokemonId - 1}</p>
          </div>
          <hr />
          <div className='paginationDiv' onClick={handleNextClick}>
            <p>#{pokemonId + 1}</p>
            <p className='paginationP'>Siguiente</p>
            <img
              height={"40px"}
              width={"40px"}
              alt={`${pokemon.name} sprite`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId + 1}.gif`}
              onError={e => { e.currentTarget.src = '../assets/placeholder.png' }} />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default PokemonModal;
