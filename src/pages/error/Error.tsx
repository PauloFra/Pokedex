import { ErrorImg, ContainerError } from "../notfound/NotFound.styles"
import ErrorImage from "../../images/Error.gif"

function Error() {
  return (
    <ContainerError>
      <ErrorImg src={ErrorImage} alt="erro" />
    </ContainerError>
  )
}
export default Error