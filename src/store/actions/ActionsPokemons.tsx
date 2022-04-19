import apiPokedex from "../../apiPokedex"
export async function getInPokemons(dispatch:any , generation:string) {

    try{
        const {data} = await apiPokedex.get(`${generation}`)
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
        console.log(data)
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