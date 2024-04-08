import React, { useState } from 'react'
import { Pokemon } from '../types/types'
import { getPokemons } from '../api/list';
import './cards.css'

const PokeCard = ({ url }: { url:string}) => {
    const [pokemon, setPokemon] = useState<Pokemon>();

    React.useEffect(() => {
        getPokemons.getPokedata(url).then((response) => {
            //console.log(response.data);
            setPokemon(response.data);
        });
    }, [url]);

    const showInfo = () => {
       console.log(pokemon)
    };

    return (
        <div className='card' onClick={showInfo}>
            <img src={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default} alt={''}/>
            <h1>{pokemon?.name}</h1>
            <h2>#{pokemon?.id}</h2>
            
        </div>
    );
}

export default PokeCard
