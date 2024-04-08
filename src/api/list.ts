import { instance } from "./base.api";

const endpoint="offset="


export const getPokemons={
    getList:(offset:number)=>{
        return instance.get(`?${endpoint}${offset}&limit=9`)
    },
    getPokedata:(url:string)=>{
        return instance.get(url)
    }
}
