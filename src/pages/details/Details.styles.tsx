import styled from "styled-components";

export const DetailsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #F7F7F7;
  min-height: 750px;
`;

export const ColorTypes = styled.div<{
  width?: string,
  padding?: string,
  bradius?: string,
  margin?: string,
  talign?: string,
}>`
  position: relative;
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.bradius};
  text-align: ${props => props.talign};
  background-color: ${(props: any) => {
    switch(props.color) {
      case 'bug':
        return '#91C12F';

      case 'dark':
        return '#5A5465';

      case 'dragon':
        return '#0B6DC3';

      case 'electric':
        return '#F4D23C';

      case 'fairy':
        return '#EC8FE6';

      case 'fighting':
        return '#CE416B';

      case 'fire':
        return '#FF9D55';

      case 'flying':
        return '#89AAE3';

      case 'ghost':
        return '#5269AD';

      case 'grass':
        return '#63BC5A';

      case 'ground':
        return '#D97845';

      case 'ice':
        return '#73CEC0';

      case 'normal':
        return '#919AA2';

      case 'poison':
        return '#B567CE';

      case 'psychic':
        return '#FA7179';

      case 'rock':
        return '#C5B78C';

      case 'steel':
        return '#5A8EA2';

      case 'water':
        return '#6493EB';
        
        
    }
  }};
`;

export const AboutContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 4px;
  padding: 50px 20px 10px 20px;
`;

export const DivFlex = styled.div<{
  display?: string,
  flexdir?: string,
  juscont?: string,
  alitems?: string,
  gap?: string,
  color?: string,
  padding?: string,
  bordleft?: string,
  margin?: string,
  txtalign?: string,
  height?: string,
}>`
  
  display: ${props => props.display};
  flex-direction: ${props => props.flexdir};
  justify-content: ${props => props.juscont};
  align-items: ${props => props.alitems};
  gap: ${props => props.gap};
  color: ${props => props.color};
  padding: ${props => props.padding};
  border-left: ${props => props.bordleft};
  margin: ${props => props.margin};
  text-align: ${props => props.txtalign};
  height: ${props => props.height};
`;

export const SpanDesc = styled.span<{
  color?: string,
  size?: string,
  margin?: string,
}>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: ${props => props.margin};
  font-weight: bold;
`;

export const ParagrafDesc = styled.p<{
  display?: string,
  flexdirect?: string,
  alitems?: string,
  justcontent?: string,
  size?: string,
  margin?: string,
}>`
  color: ${(props: any) => {
    switch(props.color) {
      case 'bug':
        return '#91C12F';

      case 'dark':
        return '#5A5465';

      case 'dragon':
        return '#0B6DC3';

      case 'electric':
        return '#F4D23C';

      case 'fairy':
        return '#EC8FE6';

      case 'fighting':
        return '#CE416B';

      case 'fire':
        return '#FF9D55';

      case 'flying':
        return '#89AAE3';

      case 'ghost':
        return '#5269AD';

      case 'grass':
        return '#63BC5A';

      case 'ground':
        return '#D97845';

      case 'ice':
        return '#73CEC0';

      case 'normal':
        return '#919AA2';

      case 'poison':
        return '#B567CE';

      case 'psychic':
        return '#FA7179';

      case 'rock':
        return '#C5B78C';

      case 'steel':
        return '#5A8EA2';

      case 'water':
        return '#6493EB';
      }
  }};
  display: ${props => props.display};
  flex-direction: ${props => props.flexdirect};
  align-items: ${props => props.alitems};
  justify-content: ${props => props.justcontent};
  font-size: ${props => props.size};
  font-weight: bold;
  margin: ${props => props.margin}
`;


export const UlSkill = styled.ul`
  padding-left: 10px;
  margin-top: 12px;
`;

export const LiSkill = styled.li`
  margin-bottom: 15px;
  height: 6px;
  width: 340px;
  list-style: none;
  border-radius: 10px;
  -webkit-box-shadow: inset 0px 0px 300px -126px #a7a7a7;
-moz-box-shadow: inset 0px 0px 300px -126px #acacac;
box-shadow: inset 0px 0px 300px -126px ${(props: any) => {
    switch(props.color) {
      case 'bug':
        return '#91C12F';

      case 'dark':
        return '#5A5465';

      case 'dragon':
        return '#0B6DC3';

      case 'electric':
        return '#F4D23C';

      case 'fairy':
        return '#EC8FE6';

      case 'fighting':
        return '#CE416B';

      case 'fire':
        return '#FF9D55';

      case 'flying':
        return '#89AAE3';

      case 'ghost':
        return '#5269AD';

      case 'grass':
        return '#63BC5A';

      case 'ground':
        return '#D97845';

      case 'ice':
        return '#73CEC0';

      case 'normal':
        return '#919AA2';

      case 'poison':
        return '#B567CE';

      case 'psychic':
        return '#FA7179';

      case 'rock':
        return '#C5B78C';

      case 'steel':
        return '#5A8EA2';

      case 'water':
        return '#6493EB';
      }
  }};
`;

export const SkillBar = styled.span<{
  width?: string,
}>`
    height: inherit;
    background: ${(props: any) => {
    switch(props.color) {
      case 'bug':
        return '#91C12F';

      case 'dark':
        return '#5A5465';

      case 'dragon':
        return '#0B6DC3';

      case 'electric':
        return '#F4D23C';

      case 'fairy':
        return '#EC8FE6';

      case 'fighting':
        return '#CE416B';

      case 'fire':
        return '#FF9D55';

      case 'flying':
        return '#89AAE3';

      case 'ghost':
        return '#5269AD';

      case 'grass':
        return '#63BC5A';

      case 'ground':
        return '#D97845';

      case 'ice':
        return '#73CEC0';

      case 'normal':
        return '#919AA2';

      case 'poison':
        return '#B567CE';

      case 'psychic':
        return '#FA7179';

      case 'rock':
        return '#C5B78C';

      case 'steel':
        return '#5A8EA2';

      case 'water':
        return '#6493EB';
      }
  }};
    position: absolute;
    border-radius: 10px;
    width: ${props => props.width};
    animation: skill 2s ease-out;
    @keyframes skill {
      0% { width:0px;}
      0%{ width:0%;}
    }
`;

export const ImgPoke = styled.img<{
  top?: string,
  left?: string,
  right?: string,
  width?: string,
  zindex?: string,
}>`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    width: ${props => props.width};
    z-index: ${props => props.zindex};
`;

export const ReturnHome = styled.a`
  color: white;
  font-size: 28px;
  margin-right: 10px;
  
  :hover {
    transform: scale(1.2);
    color: #fff9a0;
  }
`;