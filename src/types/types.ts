export type pokeType = {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };
  
type abilities = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
};
type stats = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};


export interface Pokemon{
    id:number;
    name:string;
    weight:number;
    height:number;
    stats:stats[] ;
    base_experience:number;
    abilities: abilities[];
    types: pokeType[];
    sprites: {
        other:{
            "official-artwork": {
                front_default: string;
            };
        }
        versions: {
                "generation-v": {
                "black-white": {
                    animated: {
                        front_default: string;
                       
                    };
                };
            };
        };
    };
}

export interface PokemonList{
    name:string;
    url:string;
}


