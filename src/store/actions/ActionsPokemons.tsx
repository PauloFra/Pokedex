import apiPokedex from "../../apiPokedex"
import Notiflix from "notiflix";
export async function getInPokemons(dispatch:any , generation:string) {
    let genInGet = ''
    switch(generation){
        case 'gen-1':  {
            genInGet = 'pokemon?offset=0&limit=151'
            break;
        }
        case 'gen-2': {
            genInGet = 'pokemon?offset=151&limit=251'
            break;
        }
        case 'gen-3': {
            genInGet = 'pokemon?offset=251&limit=386'
            break;
        }
        case 'gen-4': {
            genInGet = 'pokemon?offset=386&limit=493'
            break;
        }
        case 'gen-5': {
            genInGet = 'pokemon?offset=493&limit=649'
            break;
        }
        case 'gen-6': {
            genInGet = 'pokemon?offset=649&limit=721'
            break;
        }
        case 'gen-7': {
            genInGet = 'pokemon?offset=721&limit=809'
            break;
        }
        case 'gen-8': {
            genInGet = 'pokemon?offset=809&limit=905'
            break;
        }
        case 'gen-9': {
            genInGet = 'pokemon?offset=905&limit=1024'
            break;
        }
        case 'all': {
            genInGet = 'pokemon?offset=0&limit=1024'
        }
    }
    
    try{
        const {data} = await apiPokedex.get(`${genInGet}`)
        const setArray = {
            type:'SET_LIST',
            listPokemon:data.results
        }
        dispatch(setArray)
    }
    catch(error){
        console.log(error);   
    }
}

export async function getSearchByInput(dispatch:any ,pokemons:any , nomeInput:string,generation:string) {
    
    if (nomeInput === ''){
        getInPokemons(dispatch ,generation)
        return
    }
    const pokemonsByInput = pokemons.filter((pokemon:any) => 
        pokemon.name.includes(nomeInput.toLowerCase())
    )
    const setArray = {
        type:'SET_LIST',
        listPokemon:pokemonsByInput,
        
    }
        dispatch(setArray)
    
}
export async function newGetPokemon(dispatch:any , idPokemon: string) {
    try{
        const {data} = await apiPokedex.get(`/pokemon/${idPokemon}`)
        const setArrayDetalhes = {
            type: 'SET_POKEMON',
            pokemon: data,
            token: false
        }
        dispatch(setArrayDetalhes);
    }
    catch(error){
        console.log(error);   
    }
    try{
        const {data} = await apiPokedex.get(`/pokemon-species/${idPokemon}`)
        const setSpecies = {
            type: 'SET_TEXT',
            text: data.flavor_text_entries[10].flavor_text
        }
        dispatch(setSpecies)
    }
    catch (error){
        console.log(error)
    }
}

// async function getAllPoke(dispatch: any, id: string, pokemon: any) {

//     try {
//         const {data} = await apiPokedex.get(`/pokemon-species/${id}`)
//         const allPoke = {
//             type: 'SET_ALL',
//             pokemons: data
//         }
//         dispatch(allPoke);
//     } catch (error) {
//         console.log(error)
//     }
// }

// export function executeGetAll() {
    
// }