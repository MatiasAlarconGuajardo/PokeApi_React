import React, { useEffect, useState } from 'react';
import { colours, DetailsProps } from '../types/types';
import { getPokemons } from '../api/list';
import './pokemonDetails.css';
import styles from './styles.module.css';

const PokemonDetails: React.FC<DetailsProps> = ({ pokemon,typeName }) => {
    
    const [flavorText, setFlavorText] = useState<string>('');
    const [abilities,setAbilities] = useState<string[]>([]);
    
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
              setFlavorText('No se encontró descripción en español.');
            }

            const abilitiesPromises = pokemon.abilities.map((ability: { ability: { url: string; }; }) =>
              fetchAbilities(ability.ability.url)
            );

            const abilitiesArray = await Promise.all(abilitiesPromises);
            setAbilities(abilitiesArray);

          } catch (error) {
            console.error('Error al obtener el texto:', error);
          }
        };

        fetchFlavorText();
      }, [pokemon]);


      const fetchAbilities = async (typeUrl:string) => {
        try{
          const response = await getPokemons.getData(typeUrl);
          const data = await response.data;
          const abilitesNames=data.names.find(
            (name:any) => name.language.name === 'es'
          );
          if (abilitesNames){
            return abilitesNames.name;
          }
          else{
            return abilitesNames.name="Nombre no encontrado"
          }
        }catch(error){
          console.error('Error al obtener las habilidades:', error);
        }
      }
    

  return (
    <div className='info-continer'>
      <div className={'sprite-position'}>
        
      <img  
        height={150}
        width={150}
        src={pokemon.sprites.other['official-artwork'].front_default}
        onError={e=>{e.currentTarget.src='../assets/placeholder.png'}}
        alt={`${pokemon.name} sprite`}
      />
      </div>

      <div className='name-container'>
      <h2 className='id-position'>#{pokemon.id}</h2>
      <h2 className='name-position'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      </div>

      <h4 className={styles.titles}>Tipos:</h4>          
      <div className={styles.displayHorizontal}>
        {typeName?.map((typeName, index) => (
          <div key={index} style={{
            backgroundColor: colours[typeName as keyof typeof colours],
            borderRadius: '5px',
            width:'75px',
            color: 'white',
          }}>
            <span key={index}>
            {typeName}
          </span>
            </div>
        ))}
      </div>

      <h4 className={styles.titles}>Descripción:</h4>
      <p className='descriptionText'>{flavorText}</p>
    
      <h4 className={styles.titles}>Habilidades:</h4>
      <div className={styles.displayHorizontal}>
      { abilities.map((ability,index)=>{
            return(
              <p className={styles.abilities} key={index}>{ability}</p>
            )
          })
        }
      </div>
      
      <div className={styles.displayHorizontal}>
      
      <span >
      <b>Peso:</b> <br/>
      <p className='statsNumber'>{pokemon?.weight/10}Kg </p> 
     </span>
      
      
     
      <span>
        <b>Altura:</b> <br/>
        <p className='statsNumber'>
          {pokemon?.height/10}m
        </p>
      </span>
      <span>
         <b>Exp Base:</b><br/>
         <p className='statsNumber'>{pokemon.base_experience}</p>
         </span>
      </div>

      <h4 className={styles.titles}><b>Estadísticas:</b></h4>
      <div className='stats-items'>
        <div className={styles.statsDiv}>
        <p><span className='statsDots' style={{
              backgroundColor: '#dc2444',
            }}> HP</span>{pokemon.stats[0].base_stat} </p>
        </div>     
            <div className={styles.statsDiv}>
            <p><span className='statsDots'style={{
              backgroundColor: '#fc9c59',
            }}> ATK</span>{pokemon.stats[1].base_stat} </p>
            </div>
            <div className={styles.statsDiv}>
            <p><span className='statsDots'style={{
              backgroundColor: '#fcdc58',
            }}> DEF</span>{pokemon.stats[2].base_stat} </p>
            </div>
          
            <div className={styles.statsDiv}>
            <p><span className='statsDots'style={{
              backgroundColor: '#85dcfc',
            }}> SpA</span>{pokemon.stats[3].base_stat} </p>
            </div>
            <div className={styles.statsDiv}>
            <p><span className='statsDots'style={{
              backgroundColor: '#afec94',
            }}> SpD</span>{pokemon.stats[4].base_stat}</p>
            </div>
            <div className={styles.statsDiv}>
            <p><span className='statsDots'style={{
              backgroundColor: '#fc95ac',
            }}> SPD</span>{pokemon.stats[5].base_stat}</p>
            </div>
            <div className={styles.statsDiv}>
            <p><span className='statsDots'style={{
              backgroundColor: '#8cb4fc',
            }}> TOT</span>{pokemon.stats[0].base_stat+pokemon.stats[1].base_stat+pokemon.stats[2].base_stat+pokemon.stats[3].base_stat+pokemon.stats[4].base_stat+pokemon.stats[5].base_stat}</p>
          </div>         
          
          
      </div>
      
    </div>
  );
};

export default PokemonDetails;
