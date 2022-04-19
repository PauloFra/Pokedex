
const INITIAL_VALUES = {
  listPokemon: [],
  pokemon: {},
  text: '',
  loading: true,
  loadingHome: true,
}

function pokeReducer(state = INITIAL_VALUES, action: any) {
  if (action.type === 'SET_LIST') {
    return {
      ...state,
      listPokemon: action.listPokemon,
      loadingHome: action.loadingHome
    }
  }
  
  if (action.type === 'SET_POKEMON') {
    return {
      ...state,
      pokemon: action.pokemon,
      loading: action.loading
    }
  }

  if (action.type === 'SET_TEXT') {
    return {
      ...state,
      text: action.text
    }
  }

  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      loading: action.loading,
      error: action.error
    }
  }
  return state
}
export default pokeReducer