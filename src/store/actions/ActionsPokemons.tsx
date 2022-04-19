import apiPokedex from "../../apiPokedex"
export async function getInPokemons(dispatch:any , generation:string) {

    try{
        const {data} = await apiPokedex.get(`${generation}`)
        const setArray = {
            type:'SET_LIST',
            listPokemon:data.results,
            loadingHome: false
        }
        dispatch(setArray)
    }
    catch(error){
        const setError = {
            type: 'SET_ERROR',
            loading: false,
            error: true
        }
        dispatch(setError)
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
        listPokemon: pokemonsByInput,
        loadingHome: false,
        
    }
        dispatch(setArray)
    
}
export async function newGetPokemon(dispatch:any , idPokemon: string) {
    try{
        const {data} = await apiPokedex.get(`/pokemon/${idPokemon}`)
        const setArrayDetalhes = {
            type: 'SET_POKEMON',
            pokemon: data,
            loading: false
        }
        dispatch(setArrayDetalhes);
    }
    catch(error){
        const setError = {
            type: 'SET_ERROR',
            loading: false,
            error: true
        }
        dispatch(setError)
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
