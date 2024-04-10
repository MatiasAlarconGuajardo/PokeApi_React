import React, { useEffect, useState } from 'react';
import { DetailsProps } from '../types/types';
import { getPokemons } from '../api/list';
import './pokemonDetails.css';


const PokemonDetails: React.FC<DetailsProps> = ({ pokemon,typeName }) => {
    
    const [flavorText, setFlavorText] = useState<string>('');
   // const [abilities,setAbilities] = useState<string[]>([]);
    
    useEffect(() => {
        const fetchFlavorText = async () => {
          try {
            const urlFlavor =`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`;
            const response = await getPokemons.getData(urlFlavor);
            //console.log(pokemon)
            
            

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


      // const abilities = pokemon.abilities.map((ability: { ability: { url: string; }; }) =>

      //   //console.log(ability.ability.url)
      //   fetchAbilities(ability.ability.url)
      // );

      // const abilitiesArray = await Promise.all(abilities);
      // console.log(abilitiesArray);
      // const fetchAbilities = async (typeUrl:string) => {
      //   try{

      //   }catch(error){
      //     console.error('Error al obtener las habilidades:', error);
      //   }

      // }
    

  return (
    <div className='info-continer'>
      <div className='sprite-position'>
      <img  
        height={150}
        width={150}
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={`${pokemon.name} sprite`}
      />
      </div>

      <div  className='name-container'>
      <h2 className='id-position'>Nº {pokemon.id}</h2>
      <h2 className='name-position'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      </div>

      <h4>Descripcion:</h4>
      <p>{flavorText}</p>
      <h4>Tipos:</h4>  
      
          
      <div className='card-types'>
        {typeName?.map((typeName, index) => (
          <span className='subtitle-position' key={index}>
            {typeName}
          </span>
        ))}
      </div>

      <h4>Habilidades:</h4>
      <p>Habilidades</p>

      <div className='stats-div'>
      <p>
        <b>Peso:</b> {pokemon?.weight/10} Kg 
      </p>
      <p>
        <b>Altura:</b> {pokemon?.height/10} m
      </p>
      <p> <b>Exp Base:</b> {pokemon.base_experience} XP</p>
      </div>
      <h4><b>Estadisticas:</b></h4>
      <div className='stats-items'>
          <b>Vida: </b>{pokemon.stats[0].base_stat}     
          <b>Ataque: </b>{pokemon.stats[1].base_stat}
          <b>Defensa: </b>{pokemon.stats[2].base_stat}
          <b>Ataque Especial: </b>{pokemon.stats[3].base_stat}
          <b>Defensa Especial: </b>{pokemon.stats[4].base_stat}
          <b>Velocidad: </b>{pokemon.stats[5].base_stat}
      </div>
    </div>
  );
};

export default PokemonDetails;
