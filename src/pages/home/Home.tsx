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

function Home({pokemons , dispatch}:any) {
const navigate = useNavigate()  
const [nomeInput ,setNomeInput] = useState('')
const [generation ,setGeneration] = useState('gen-1')

useEffect(()=>{
  getInPokemons(dispatch , generation) 
},[generation])
  // if(pokemons.length === 0){
  //   return(<Loading />)
  // }

  return (
    <DivMaior>
      <DivHeader>
        <H1><span><img src={pokeBall} alt="pokeball" /></span> Pokedex</H1>
        <InputDefault type="text" placeholder='Procurar'onChange={(e)=>{setNomeInput(e.target.value)}} onKeyUp={()=>{getSearchByInput(dispatch ,pokemons , nomeInput ,generation )} }/>
        <SelectDefault onChange={(e) => setGeneration(e.target.value)}>
             <Option value="gen-1">1ª Geração</Option>
             <Option value="gen-2">2ª Geração</Option>
             <Option value="gen-3">3ª Geração</Option>
             <Option value="gen-4">4ª Geração</Option>
             <Option value="gen-5">5ª Geração</Option>
             <Option value="gen-6">6ª Geração</Option>
             <Option value="gen-7">7ª Geração</Option>
             <Option value="gen-8">8ª Geração</Option>
             <Option value="gen-9">9ª Geração</Option>
             <Option value="all">Todas as Gerações</Option>

        </SelectDefault>
           
      </DivHeader>
        <DivGrid >
        {pokemons.map((pokemon:any , indice:any ) => (
          <DivDoPokemon key={indice} onClick={() => navigate(`detail/${pokemon.url.split('/')[6]}`)} >
              <PdivDoPokemon>{firstLetterUpper(pokemon.name)} <SpanDefault>#{pokemon.url.split('/')[6] <= 99 ? '0' + pokemon.url.split('/')[6] : pokemon.url.split('/')[6] }</SpanDefault> </PdivDoPokemon>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt="" />
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