import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getInPokemons } from "../../store/actions/ActionsPokemons"
import { getSearchByInput } from "../../store/actions/ActionsPokemons"
import { connect } from "react-redux"
import { firstLetterUpper } from "../../Utils"
import Loading from "../../components/loading/Loading"
import pokeBall from './Pokeball.png'
import {
DivMaior,
H1,
SpanDefault,
Option,
DivDoPokemon,
PdivDoPokemon,
DivGrid,
SelectDefault,
InputDefault,
DivHeader,
} from "./Home.styles"
import Select from "../../components/select/Select"
function Home({pokemons , dispatch}:any) {
const navigate = useNavigate()  
const [nomeInput ,setNomeInput] = useState('')
const [generation ,setGeneration] = useState('pokemon?offset=0&limit=151')

useEffect(()=>{
  getInPokemons(dispatch , generation) 
},[generation])
  console.log(generation)
  return (
    <DivMaior>
      <DivHeader>
        <H1><span><img src={pokeBall} alt="pokeball" /></span> Pokedex</H1>
        <InputDefault type="text" placeholder='Procurar'onChange={(e)=>{setNomeInput(e.target.value)}} onKeyUp={()=>{getSearchByInput(dispatch ,pokemons , nomeInput ,generation )} }/>
        
        <div>
          <Select onChange={(element:any) => setGeneration(element.value)}/>
        </div>
       
      </DivHeader>
        <DivGrid >
        {pokemons.map((pokemon:any , indice:any ) => (
          <DivDoPokemon key={indice} onClick={() => navigate(`detail/${pokemon.url.split('/')[6]}`)} >
            <SpanDefault>#{pokemon.url.split('/')[6] <= 99 ? '0' + pokemon.url.split('/')[6] : pokemon.url.split('/')[6] }</SpanDefault>
            {/* <img width='160px' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt="" /> */}
            <img width='160px' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} alt="" />
              {/* /3.png */}
              <PdivDoPokemon>{firstLetterUpper(pokemon.name)}</PdivDoPokemon>
          </DivDoPokemon>
        ))}
      </DivGrid>
    </DivMaior>
  )
}
const mapStateToProps = (state:any) => ({
  pokemons:state.pokeReducer.listPokemon,
})
export default connect(mapStateToProps)(Home)