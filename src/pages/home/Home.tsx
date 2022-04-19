import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getInPokemons } from "../../store/actions/ActionsPokemons"
import { getSearchByInput } from "../../store/actions/ActionsPokemons"
import { connect } from "react-redux"
import { firstLetterUpper } from "../../Utils"
import Loading from "../../components/loading/Loading"
import pokeBall from "../../images/PokeballHome.png"
import {
DivMaior,
H1,
SpanDefault,
DivDoPokemon,
PdivDoPokemon,
DivGrid,
InputDefault,
DivHeader,
} from "./Home.styles"
import Select from "../../components/select/Select"
import Error from "../error/Error"

function Home({pokemons, loading, error, dispatch}:any) {
const navigate = useNavigate()  
const [nomeInput ,setNomeInput] = useState('')
const [generation ,setGeneration] = useState('pokemon?offset=0&limit=151')

  useEffect(()=>{
    getInPokemons(dispatch , generation) 
  },[generation])

  if (loading) {
    return (<Loading />)
  }

  if (error) {
    return (<Error />)
  }

  return (
    <DivMaior>
      <DivHeader>
        <H1><span><img src={pokeBall} alt="pokeball" /></span> Pokedex</H1>
        <InputDefault type="text" placeholder='Procurar'onChange={(e)=>{setNomeInput(e.target.value)}} onKeyUp={()=>{getSearchByInput(dispatch ,pokemons , nomeInput ,generation )} }/>
        
        <div>
          <Select event={(element:any) => setGeneration(element.target.value)}/>
        </div>
       
      </DivHeader>
        <DivGrid >
        {pokemons.map((pokemon:any , indice: number ) => (
          <DivDoPokemon key={indice} onClick={() => navigate(`detail/${pokemon.url.split('/')[6]}`)} >
            <SpanDefault>#{pokemon.url.split('/')[6] <= 99 ? '0' + pokemon.url.split('/')[6] : pokemon.url.split('/')[6] }</SpanDefault>
            <img width='160px' height='160px' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} alt="pokemon" />
              <PdivDoPokemon>{firstLetterUpper(pokemon.name)}</PdivDoPokemon>
          </DivDoPokemon>
        ))}
      </DivGrid>
    </DivMaior>
  )
}
const mapStateToProps = (state:any) => ({
  pokemons: state.pokeReducer.listPokemon,
  error: state.pokeReducer.error,
  loading: state.pokeReducer.loadingHome
})
export default connect(mapStateToProps)(Home)