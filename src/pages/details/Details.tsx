import { useEffect} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { firstLetterUpper, addVirgula } from "../../Utils"
import { newGetPokemon } from "../../store/actions/ActionsPokemons"
import Loading from "../../components/loading/Loading"
import {
  ImgPoke,
  LiSkill,
  UlSkill,
  DivFlex,
  SkillBar,
  SpanDesc,
  ColorTypes,
  ReturnHome,
  ParagrafDesc,
  AboutContainer,
  DetailsContainer,
} from "./Details.styles"
import PokeBall from "../../components/images/Pokeball.png"
import { FaWeight } from "react-icons/fa"
import { GiBodyHeight } from "react-icons/gi"
import { BiArrowBack } from "react-icons/bi"


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

  return (
    <DetailsContainer>
      <ColorTypes color={types[0].type.name} width="500px" bradius="12px" margin="10px">
        <DivFlex margin="0 0 160px 0" display="flex" juscont="space-between" alitems="center" color="white" padding="0px 40px">
          <ParagrafDesc display="flex" alitems="start" size="22px">
            <ReturnHome href="/"><BiArrowBack /></ReturnHome>
            {firstLetterUpper(name)}
          </ParagrafDesc>
          <p>#{id <= 99 ? '0' + id : id }</p>
        </DivFlex>
        <ImgPoke zindex="100" width="220px" left="150px" top="60px" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="sprite-pokemon" />
        <ImgPoke zindex="1" width="210px" right="10px" top="10px" src={PokeBall} alt="sprite-pokemon" />
        <AboutContainer>
          <div>         
            <DivFlex display="flex" juscont="center" gap="20px" >{types.map((item: any, index: number) => (  
                <ColorTypes color={types[index].type.name} width="50px" bradius="30px" padding="4px 8px" talign="center" key={index}>
                  <SpanDesc size="12px" color="white" >{firstLetterUpper(item.type.name)}</SpanDesc>
                </ColorTypes>
              ))}
            </DivFlex>

            <ParagrafDesc margin="12px" display="flex" justcontent="center" size="18px" color={types[0].type.name} >About</ParagrafDesc>

            <DivFlex display="flex" juscont="center">
              <DivFlex display="flex" flexdir="column" alitems="center" padding="0 26px">
                <ParagrafDesc size="12px" display="flex" alitems="center" margin="18px 0 0 0">
                  <SpanDesc margin="0 6px 0 0" color="gray" size="14px"><FaWeight /></SpanDesc>
                  {addVirgula(weight.toString())} kg
                </ParagrafDesc>
                  <SpanDesc size="10px" margin="10px 0 0 0" color="#666666">Weight</SpanDesc>
              </DivFlex>
              <DivFlex display="flex" flexdir="column" alitems="center" padding="0 26px" bordleft="2px solid #E0E0E0">
                <ParagrafDesc size="12px" display="flex" alitems="center" margin="18px 0 0 0">
                <SpanDesc margin="0 6px 0 0" size="14px"><GiBodyHeight /></SpanDesc>
                  {height < 10 ? '0,' + height : height} m
                </ParagrafDesc>
                  <SpanDesc size="10px" margin="10px 0 0 0" color="#666666">Height</SpanDesc>
              </DivFlex>
              <DivFlex display="flex" flexdir="column" alitems="center" padding="0 26px" bordleft="2px solid #E0E0E0">
                {abilities.map((item: any, index: number) => (
                  <ParagrafDesc margin="0 0 6px 0" size="12px" key={index}>
                    <span>{firstLetterUpper(item.ability.name)}</span>
                  </ParagrafDesc>
                ))}
                <SpanDesc size="10px" margin="4px 0 0 0" color="#666666" >Moves</SpanDesc>
              </DivFlex>
            </DivFlex>
            <ParagrafDesc size="12px" margin="20px 40px 2px 40px" >{text}</ParagrafDesc>
          </div>
          <div>
              <ParagrafDesc margin="12px" display="flex" justcontent="center" size="18px" color={types[0].type.name}>Base Stats</ParagrafDesc>
              <DivFlex height="135px" display="flex">
                <DivFlex txtalign="end" margin="0 12px 0 0">
                  <ParagrafDesc margin="6px 0" size="12px" color={types[0].type.name}>HP</ParagrafDesc>
                  <ParagrafDesc margin="6px 0" size="12px" color={types[0].type.name}>ATK</ParagrafDesc>
                  <ParagrafDesc margin="6px 0" size="12px" color={types[0].type.name}>DEF</ParagrafDesc>
                  <ParagrafDesc margin="6px 0" size="12px" color={types[0].type.name}>SATK</ParagrafDesc>
                  <ParagrafDesc margin="6px 0" size="12px" color={types[0].type.name}>SDEF</ParagrafDesc>
                  <ParagrafDesc margin="6px 0" size="12px" color={types[0].type.name}>SPD</ParagrafDesc>
                </DivFlex>
                <DivFlex bordleft="2px solid #E0E0E0" padding="0 0 0 16px">
                  {stats.map((item: any, index: any) => (
                    <ParagrafDesc margin="6px 0" size="12px" key={index}>{item.base_stat}</ParagrafDesc>
                  ))}
                </DivFlex>
                  <UlSkill>
                    <LiSkill color={types[0].type.name}>
                      <SkillBar color={types[0].type.name} width={`${stats[0].base_stat}px`}></SkillBar>
                    </LiSkill>
                    <LiSkill color={types[0].type.name}>
                      <SkillBar color={types[0].type.name} width={`${stats[1].base_stat}px`}></SkillBar>
                    </LiSkill>
                    <LiSkill color={types[0].type.name}>
                      <SkillBar color={types[0].type.name} width={`${stats[2].base_stat}px`}></SkillBar>
                    </LiSkill>
                    <LiSkill color={types[0].type.name}>
                      <SkillBar color={types[0].type.name} width={`${stats[3].base_stat}px`}></SkillBar>
                    </LiSkill>
                    <LiSkill color={types[0].type.name}>
                      <SkillBar color={types[0].type.name} width={`${stats[4].base_stat}px`}></SkillBar>
                    </LiSkill>
                    <LiSkill color={types[0].type.name}>
                      <SkillBar color={types[0].type.name} width={`${stats[5].base_stat}px`}></SkillBar>
                    </LiSkill>
                  </UlSkill>
              </DivFlex>
          </div>
        </AboutContainer>
      </ColorTypes>
    </DetailsContainer>
  )
}

const mapStateToProps = (state: any) => ({
  pokemon: state.pokeReducer.pokemon,
  token: state.pokeReducer.token,
  text: state.pokeReducer.text
})

export default connect(mapStateToProps)(Details)