type pokeType = {
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
};
type stats = {
    base_stat: number;
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



export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    pokemon: Pokemon;
    typeName:string[];
  }


export interface DetailsProps {
    pokemon: Pokemon;
    typeName:string[];
  }

  
export interface CardProps {
    url: string;
  }
  

export const colours = {
	Normal: '#A8A77A',
	Fuego: '#EE8130',
	Agua: '#6390F0',
	Eléctrico: '#F7D02C',
	Planta: '#7AC74C',
	Hielo: '#96D9D6',
	Lucha: '#C22E28',
	Veneno: '#A33EA1',
	Tierra: '#E2BF65',
	Volador: '#A98FF3',
	Psíquico: '#F95587',
	Bicho: '#A6B91A',
	Roca: '#B6A136',
	Fantasma: '#735797',
	Dragón: '#6F35FC',
	Acero: '#B7B7CE',
	Hada: '#D685AD',
};