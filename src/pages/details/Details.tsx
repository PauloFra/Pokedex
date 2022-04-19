import { useEffect} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { firstLetterUpper, addVirgula, abreviaStats } from "../../Utils"
import { newGetPokemon } from "../../store/actions/ActionsPokemons"
import { FaWeight } from "react-icons/fa"
import { GiBodyHeight } from "react-icons/gi"
import { BiArrowBack } from "react-icons/bi"
import Loading from "../../components/loading/Loading"
import {
  ImgPoke,
  LiSkill,
  UlSkill,
  DivPoke,
  DivStats,
  DivTypes,
  DivAbout,
  SkillBar,
  InfoAbout,
  AboutText,
  DescAbout,
  InfoStats,
  SpanAbout,
  DescTypes,
  DescStats,
  DivHeader,
  ReturnHome,
  TitleAbout,
  ImgPokeBall,
  TitleHeader,
  DivStatsInfo,
  AbilitiesDesc,
  ContainerStats,
  AboutContainer,
  DetailsContainer,
  ContainerDivAbout,
} from "./Details.styles"
import PokeBall from "../../components/images/Pokeball.png"
import Colors from "../../enum/EnumColors"

function Details({pokemon, text, token, dispatch}: any) {
const {idPokemon}: any = useParams();

const {id, abilities, name, weight, height, types, stats} = pokemon;
  useEffect(() => {
    if(pokemon) {
      newGetPokemon(dispatch, idPokemon)
    }
  },[])

  if (token) {
    return (<Loading />)
  }
  console.log(pokemon)
  return (
    <DetailsContainer>
      <DivPoke color={Colors[types[0].type.name]}>
        <DivHeader>
          <TitleHeader>
            <ReturnHome href="/"><BiArrowBack /></ReturnHome>
            {firstLetterUpper(name)}
          </TitleHeader>
          <p>#{id <= 99 ? '0' + id : id }</p>
        </DivHeader>
        <ImgPoke src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="sprite-pokemon" />
        <ImgPokeBall src={PokeBall} alt="sprite-pokemon" />
        <AboutContainer>
          <div>         
            <DivTypes>{types.map((item: any, index: number) => (  
              <DescTypes color={Colors[types[index].type.name]} key={index} >{firstLetterUpper(item.type.name)}</DescTypes>  
              ))}
            </DivTypes>

            <TitleAbout color={Colors[types[0]?.type.name]} >About</TitleAbout>

            <ContainerDivAbout>
              <DivAbout>
                <DescAbout>
                  <InfoAbout><FaWeight /></InfoAbout>
                  {addVirgula(weight.toString())} kg
                </DescAbout>
                  <SpanAbout>Weight</SpanAbout>
              </DivAbout>
              <DivAbout border="2px solid #E0E0E0">
                <DescAbout>
                <InfoAbout><GiBodyHeight /></InfoAbout>
                  {height < 10 ? '0,' + height : height} m
                </DescAbout>
                  <SpanAbout>Height</SpanAbout>
              </DivAbout>
              <DivAbout border="2px solid #E0E0E0">
                {abilities.map((item: any, index: number) => (
                  <AbilitiesDesc key={index}>
                    <span>{firstLetterUpper(item.ability.name)}</span>
                  </AbilitiesDesc>
                ))}
                <SpanAbout>Moves</SpanAbout>
              </DivAbout>
            </ContainerDivAbout>
            <AboutText>{text}</AboutText>
          </div>
          <div>
              <TitleAbout color={Colors[types[0].type.name]}>Base Stats</TitleAbout>
              <ContainerStats>
                <DivStats>
                  {stats.map((item: any, index: any) => (
                    <DescStats color={Colors[types[0].type.name]}>{abreviaStats(item.stat.name)}</DescStats>
                  ))}
                </DivStats>
                <DivStatsInfo>
                  {stats.map((item: any, index: any) => (
                    <InfoStats key={index}>{item.base_stat}</InfoStats>
                  ))}
                </DivStatsInfo>
                  <UlSkill>
                    {stats.map((item: string, index: number) => (
                      <LiSkill color={Colors[types[0].type.name]} key={index}>
                        <SkillBar color={Colors[types[0].type.name]} width={`${stats[0].base_stat}px`}></SkillBar>
                      </LiSkill>
                    ))}
                  </UlSkill>
              </ContainerStats>
          </div>
        </AboutContainer>
      </DivPoke>
    </DetailsContainer>
  )
}

const mapStateToProps = (state: any) => ({
  pokemon: state.pokeReducer.pokemon,
  token: state.pokeReducer.token,
  text: state.pokeReducer.text
})

export default connect(mapStateToProps)(Details)