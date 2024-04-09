import React, { useState, useEffect } from 'react';
import { CardProps, Pokemon } from '../types/types';
import { getPokemons } from '../api/list';
import './cards.css';
import PokemonModal from './pokemonModal';



const PokemonCard: React.FC<CardProps> = ({ url }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [typeNames, setTypeNames] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemons.getData(url);
        setPokemon(response.data);

        const typePromises = response.data.types.map((type: { type: { url: string; }; }) =>
          getTypeNames(type.type.url)
        );
        //console.log(typePromises)
        const typeNamesArray = await Promise.all(typePromises);
        setTypeNames(typeNamesArray);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, [url]);
  
  const getTypeNames = async(typeUrl:string) => {
    try{
        const response = await getPokemons.getData(typeUrl);
        const data = await response.data;
        const esNames=data.names.find(
         (name:any) => name.language.name === 'es'
        );
        //console.log(esNames);
        return esNames?esNames.name:"Nombre no encontrado";
    }
    catch(error){
      console.error('Error al obtener los tipos:', error);
    }
  }

  return (
    <>
      <div className='card' onClick={() => setOpenModal(!openModal)}>
        <img
          className='characterImg'
          src={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default}
          alt={''}
        />
        <h2 className='id-position'>Nº {pokemon?.id}</h2>
        <h2 className='name-position'>{pokemon?.name}</h2>
        <div className='types'>
        {typeNames?.map((typeName, index) => (
          <span className='subtitle-position' key={index}>
            {typeName}
          </span>
        ))}
        </div>
      </div>
      {pokemon && (
        <PokemonModal isOpen={openModal} onClose={() => setOpenModal(false)} pokemon={pokemon} typeName={typeNames} />
      )}
    </>
  );
};

export default PokemonCard;
