import styled from "styled-components";

export const DivMaior = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 800px;
  min-height:1400px;
  padding: 10px;
  background-color: #F7F7F7;
  box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.56);
`
export const DivHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`
export const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
`
export const InputDefault = styled.input`
  margin: 15px 0;
  padding: 6px 10px;
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #E0E0E0;
`
export const DivGrid = styled.div`
 min-height: 580px;
 display: grid;
 grid-template-columns: auto auto auto;

 text-align: center;
 justify-content: center;

`
export const SelectDefault = styled.select`
  margin: 5px 0;
  padding: 6px 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #E0E0E0; 
`
export const Option = styled.option`
  padding: 6px 10px;
`
export const SpanDefault = styled.h3`
  text-align: right;
  margin-right: 20px;
  font-size: 13px;
  
`
export const PdivDoPokemon = styled.h3`
 padding: 10px 0;
 margin: 0;
 background-color: #E0E0E0;
 
`

export const DivDoPokemon = styled.div<{
  corFundo?: any
}>`

background-color: #F7F7F7;
 border: 3px solid #E0E0E0;
 border-radius: 10px;
 width: 200px;
 max-height: 255px;
 transition: 1s;
  font-weight:bold;
  margin: 15px 25px;
  font-size:20px;

  
  :hover{
    transition: 1s;
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.56);
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.56);
    box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.56);
}
`
