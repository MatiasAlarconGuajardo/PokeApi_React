import React from 'react';
import Pokeinfo from './pokeinfo';
import { Pokemon } from '../types/types';
import PokemonDetails from './pokemonDetails';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon;
  typeName:string[];
}

const PokemonModal: React.FC<Props> = ({ isOpen, onClose, pokemon,typeName}) => {
  return (
    <Pokeinfo isOpen={isOpen} onClose={onClose}>
      <PokemonDetails pokemon={pokemon} typeName={typeName}/>
    </Pokeinfo>
  );
};

export default PokemonModal;
