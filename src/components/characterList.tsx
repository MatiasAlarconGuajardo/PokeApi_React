import React, { useState } from 'react'
import { PokemonList } from '../types/types'
import { getPokemons } from '../api/list';
import PokeCard from './cards';
import './characterlist.css'
import styles from './styles.module.css'


const CharacterList = () => {
    const [characters, setCharacters] = useState<PokemonList[]>([]);
    const [offset,setOffset]=useState<number>(0);
 
    React.useEffect(()=>{
        getPokemons.getList(offset).then((response)=>{
            setCharacters(response.data.results)
        }).catch((error)=>{
            console.log(error)
        })
    },[offset])
    
    return (
    <div>
      <div className='parent'>
        {
            characters.map((character,index)=>{
                return(
                   <PokeCard key={index} url={character.url}/>
                )
            })
        }       
      </div>
      <button className={styles.btnPrimary} onClick={()=>setOffset(offset-9)} disabled={offset===0}>Anterior</button>
      <button className={styles.btnPrimary} onClick={()=>setOffset(offset+9)} disabled={offset>=142} >Siguiente</button>
    </div>
  )
}

export default CharacterList
