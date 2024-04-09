import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types/types';
import { getPokemons } from '../api/list';

interface Props {
  pokemon: Pokemon;
  typeName:string[];
}

const PokemonDetails: React.FC<Props> = ({ pokemon,typeName }) => {

    const [flavorText, setFlavorText] = useState<string>('');
    
    useEffect(() => {
        const fetchFlavorText = async () => {
          try {
            const urlFlavor =`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`;
            const response = await getPokemons.getData(urlFlavor);
            const data = response.data;
            const filteredEntries = data.flavor_text_entries.filter(
              (entry: any) => entry.language.name === 'es'
            );
            if (filteredEntries.length > 0) {
              setFlavorText(filteredEntries[0].flavor_text);
            } else {
              console.log('No se encontró texto en español.');
            }
          } catch (error) {
            console.error('Error al obtener el texto:', error);
          }
        };
    
        fetchFlavorText();
      }, [pokemon]);

  return (
    <div>
      <img
        height={150}
        width={150}
        src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
        alt={''}
      />
      <h2 className='id-position'>Nº {pokemon.id}</h2>
      <h2 className='name-position'>{pokemon.name}</h2>
      <p>Descripcion: <br/></p>
      <p>{flavorText}</p>
            
      <div className='types'>
      <p><b>Tipos:</b><br/>
        {typeName?.map((typeName, index) => (
          <span className='subtitle-position' key={index}>
            {typeName}
            <br />
          </span>
        ))}
      </p>
      </div>
      <p>
        <b>Peso:</b> {pokemon?.weight/10} Kg 
      </p>
      <p>
        <b>Altura:</b> {pokemon?.height/10} m
      </p>
      <p> <b>Exp Base:</b> {pokemon.base_experience} XP</p>
      <ul className='stat-list'>Estadisticas:
        <li>
          <b>Vida:</b> {pokemon.stats[0].base_stat}
        </li>
        <li>
          <b>Ataque:</b> {pokemon.stats[1].base_stat}
        </li>
        <li>
          <b>Defensa:</b> {pokemon.stats[2].base_stat}
        </li>
        <li>
          <b>Ataque Especial: </b>{pokemon.stats[3].base_stat}
        </li>
        <li>
          <b>Defensa Especial: </b>{pokemon.stats[4].base_stat}
        </li>
        <li>
          <b>Velocidad:</b> {pokemon.stats[5].base_stat}
        </li>
      </ul>
    </div>
  );
};

export default PokemonDetails;
