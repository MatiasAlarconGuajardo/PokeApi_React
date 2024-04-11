import React from 'react';  
import { ModalProps } from '../types/types';
import PokemonDetails from './pokemonDetails';
import Sidebar from './sideBar';
import './pokemonModal.css';


const PokemonModal: React.FC<ModalProps> = ({ isOpen, onClose, pokemon, typeName }) => {
  return (
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <PokemonDetails pokemon={pokemon} typeName={typeName} />
    </Sidebar>
  );
};

export default PokemonModal;
