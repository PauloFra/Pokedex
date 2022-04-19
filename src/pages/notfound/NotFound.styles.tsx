import styled from "styled-components";
import NotFoundImage from "../../images/NotFound.jpg"

export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${NotFoundImage});
  width: 100%;
  min-height: 667px;
`;

export const TitleNotFound = styled.h1`
  color: #dd0909;
  font-size: 30px;
  background: linear-gradient(to right, #9b9b9b, #b1b1b1);
  border-radius: 50px;
  border: 8px solid black;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
`;

export const ButtonReturn = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: 4px solid black;
  font-size: 20px;
  font-weight: bold;
  background-color: #ff0000;
  color: #f8c009;
  -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);

  :hover {
    transform: scale(1.1);
    color: #1678e9;
  }
`;

export const ContainerError = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 667px;
`;

export const ErrorImg = styled.img`
  max-height: 650px;
  border-radius: 100%;
  border: 8px solid black;
`;