
const INITIAL_VALUES = {
  listPokemon: [],
  pokemon: {},
  text: '',
  token: true
}

function pokeReducer(state = INITIAL_VALUES, action: any) {
  if (action.type === 'SET_LIST') {
    return {
      ...state,
      listPokemon: action.listPokemon
    }
  }
  
  if (action.type === 'SET_POKEMON') {
    return {
      ...state,
      pokemon: action.pokemon,
      token: action.token
    }
  }

  if (action.type === 'SET_TEXT') {
    return {
      ...state,
      text: action.text
    }
  }
  return state
}
export default pokeReducer