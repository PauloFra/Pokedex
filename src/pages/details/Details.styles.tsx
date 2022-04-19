import styled from "styled-components";

export const DetailsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #F7F7F7;
  padding: 124px 0;

`;

export const DivPoke = styled.div<{
  color?: string
}>`
  position: relative;
  width: 500px;
  margin: 10px;
  border-radius: 12px;
  background-color: ${props => props.color};
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0px 40px;
  margin-bottom: 160px;
`;

export const TitleHeader = styled.h3`
  display: flex;
  align-items: center;
  font-size: 22px;
`;

export const AboutContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 4px;
  padding: 50px 20px 10px 20px;
`;

export const ContainerDivAbout = styled.div`
  display: flex;
  justify-content: center;
`;


export const DivTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const DescTypes = styled.p<{
  color?: string,
}>`
  background-color: ${props => props.color};
  color: white;
  font-size: 12px;
  width: 50px;
  border-radius: 30px;
  padding: 4px 8px;
  text-align: center;
`;

export const DivAbout = styled.div<{
  border?: string,
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px;
  border-left: ${props => props.border};
`;

export const TitleAbout = styled.h3<{
  color?: string,
}>`
  color: ${props => props.color};
  margin: 12px;
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

export const DescAbout = styled.p`
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-top: 18px;
    gap: 6px;
`;

export const SpanAbout = styled.span`
  font-size: 10px;
  margin-top: 10px;
  color: #666666;
`;

export const InfoAbout = styled.span`
  font-size: 14px;
  color: gray;
`;

export const AboutText = styled.p`
  font-size: 12px;
  margin: 20px 40px 2px 40px;
`;

export const AbilitiesDesc = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const ContainerStats = styled.div`
  display: flex;
  height: 135px;
`;

export const DivStats = styled.div`
  margin-right: 12px;
  text-align: end;
`;

export const DivStatsInfo = styled.div`
  padding: 4px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const DescStats = styled.p<{
  color?: string,
}>`
  color: ${props => props.color};
  font-size: 12px;
  margin: 6px 0;
  font-weight: bold;
`;

export const InfoStats = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const UlSkill = styled.ul`
  padding-left: 10px;
  margin-top: 12px;
`;

export const LiSkill = styled.li<{
  color?: string,
}>`
  margin-bottom: 15px;
  height: 6px;
  width: 340px;
  list-style: none;
  border-radius: 10px;
  -webkit-box-shadow: inset 0px 0px 300px -126px #a7a7a7;
  -moz-box-shadow: inset 0px 0px 300px -126px #acacac;
  box-shadow: inset 0px 0px 300px -126px ${(props => props.color)};
`;

export const SkillBar = styled.span<{
  width?: string,
  color?: string,
}>`
    height: inherit;
    background-color: ${props => props.color} ;
    position: absolute;
    border-radius: 10px;
    width: ${props => props.width};
    animation: skill 2s ease-out;
    @keyframes skill {
      0% { width:0px;}
      0%{ width:0%;}
    }
`;

export const ImgPoke = styled.img`
  position: absolute;
  top: 60px;
  left: 150px;
  width: 220px;
  z-index: 100;
`;

export const ImgPokeBall = styled.img`
  position: absolute;
  z-index: 1;
  width: 210px;
  right: 10px;
  top: 14px;
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