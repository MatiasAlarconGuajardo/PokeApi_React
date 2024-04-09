import { ReactNode } from 'react';
import './sideBar.css';
import { Pokemon } from '../types/types';

interface Props {
    pokemon: Pokemon;
    typeName:string[];
  }

const Sidebar: React.FC<Props> = ({ pokemon }) => {
    return (
        <div>
      <img
        height={150}
        width={150}
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={`${pokemon.name} sprite`}
      />
      <h2 className='id-position'>Nº {pokemon.id}</h2>
      <h2 className='name-position'>{pokemon.name}</h2>
      
      <p>Descripcion: <br/></p>
      <p ><b>Descripcion</b></p>
      <hr/>
      <p><b>Tipos:</b></p>      
      <div className='card-types'>
        
          <span className='subtitle-position'>
            
           TiposAqui
          </span>
        
      </div>
      <hr/>
      <div className='stats-div'>
      <p>
        <b>Peso:</b> {pokemon?.weight/10} Kg 
      </p>
      <p>
        <b>Altura:</b> {pokemon?.height/10} m
      </p>
      <p> <b>Exp Base:</b> {pokemon.base_experience} XP</p>
      </div>
      <hr/>
      <p><b>Estadisticas:</b></p>
      <div className='stats-items'>
          <b>Vida:</b>{pokemon.stats[0].base_stat}     
          <b>Ataque:</b>{pokemon.stats[1].base_stat}
          <b>Defensa:</b>{pokemon.stats[2].base_stat}
          <b>Ataque Especial:</b>{pokemon.stats[3].base_stat}
          <b>Defensa Especial:</b>{pokemon.stats[4].base_stat}
          <b>Velocidad:</b>{pokemon.stats[5].base_stat}

      </div>
      
    
    </div>
        );
    }


export default Sidebar;