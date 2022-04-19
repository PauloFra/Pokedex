import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonReturn, TitleNotFound, ContainerNotFound } from "./NotFound.styles"

function NotFound() {
  const navigate = useNavigate()


  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000);
  },[])

  return (
    <ContainerNotFound>
      <TitleNotFound>Sinto muito, Página não encontrada! :C</TitleNotFound>
      <ButtonReturn type="button" onClick={() => navigate('/')}>Retornar ao Inicio</ButtonReturn>
    </ContainerNotFound>
  )
}
export default NotFound