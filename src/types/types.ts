export interface Pokemon{
    id:number;
    name:string;
    types:string[];
    sprites: {
        back_default: string;
        versions: {
                "generation-v": {
                "black-white": {
                    animated: {
                        back_default: string;
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