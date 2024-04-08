import React, { useState } from 'react'
import { Pokemon } from '../types/types'
import { getPokemons } from '../api/list';
import './cards.css'
import Pokeinfo from './pokeinfo';

//https://gist.github.com/gcorreaq/593381b026aeb093dd3a866d15299875

const PokeCard = ({ url }: { url:string}) => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [openModal, setOpenModal] = useState(false);
    

    React.useEffect(() => {
        getPokemons.getData(url).then((response) => {
            console.log(response.data.abilities[0].ability)
            console.log(response.data.stats)
            console.log(response.data.species.url)
            console.log(response.data.types[0].type);
            setPokemon(response.data);
        });
        
            
    }, [url]);

    if(pokemon && pokemon.id>151){
        return null;
    }
    else{
        return (
            <>
            <div className='card' onClick={()=> setOpenModal(!openModal)}>
                <img className='characterImg' src={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default} alt={''}/>
                <h2 className='id-position'>#{pokemon?.id}</h2>
                <h2 className='name-position'>{pokemon?.name}</h2>
                {
                    pokemon?.types.map((type, index) => {
                        return (
                            <span className='subtitle-position' key={index}>{type.type.name}<hr /></span>
                        );
                    })
                }
                
            </div>
            {pokemon && 
                <Pokeinfo isOpen={openModal} onClose={()=>setOpenModal(false)}>
                    <div>
                    <img height={150} width={150} src={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default} alt={''}/>                    
                    <h2 className='id-position'>#{pokemon?.id}</h2>
                    <h2 className='name-position'>{pokemon?.name}</h2>
                    <p>Descripcion: <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate orci lorem, at porttitor enim finibus elementum. Nullam egestas ex ac leo efficitur, non suscipit felis iaculis.  </p>
                    <p><b>Tipos:</b><br/>
                    {
                    pokemon?.types.map((type, index) => {
                        return (
                            <span className='subtitle-position' key={index}>{type.type.name}<hr /></span>
                        );
                    })
                }
                </p>
                <p>
                     <b>Peso:</b> {pokemon?.weight/10} Kg 
                </p>
                <p>
                   <b>Altura:</b> {pokemon?.height/10} m
                </p>
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
                </Pokeinfo>}
            </>
            
        );
    }
    
}

export default PokeCard
