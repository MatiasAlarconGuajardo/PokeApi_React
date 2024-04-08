import React, { useState } from 'react'
import { Pokemon } from '../types/types'
import { getPokemons } from '../api/list';
import './cards.css'

const PokeCard = ({ id,url }: { id:number,url:string}) => {
    const [pokemon, setPokemon] = useState<Pokemon>();

    React.useEffect(() => {
        getPokemons.getPokedata(id).then((response) => {
            console.log(response.data);
            setPokemon(response.data);
        });
    }, [id]);

    return (
        <div className='card'>
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default} alt={''}/>
            <p>{}</p>
        </div>
    );
}

export default PokeCard
