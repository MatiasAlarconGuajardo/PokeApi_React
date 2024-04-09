import React from 'react';
import Pokeinfo from './pokeinfo';
import { ModalProps } from '../types/types';
import PokemonDetails from './pokemonDetails';



const PokemonModal: React.FC<ModalProps> = ({ isOpen, onClose, pokemon,typeName}) => {
  return (
    <Pokeinfo isOpen={isOpen} onClose={onClose}>
      <PokemonDetails pokemon={pokemon} typeName={typeName}/>
    </Pokeinfo>
  );
};

export default PokemonModal;
