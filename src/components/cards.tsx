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
                    <p>
                    {
                    pokemon?.types.map((type, index) => {
                        return (
                            <span className='subtitle-position' key={index}>{type.type.name}<hr /></span>
                        );
                    })
                }
                </p>
                <p>
                    Peso: {pokemon?.weight/10} Kg
                </p>
                <p>
                    Altura: {pokemon?.height/10} m
                </p>
                    </div>
                </Pokeinfo>}
            </>
            
        );
    }
    
}

export default PokeCard
