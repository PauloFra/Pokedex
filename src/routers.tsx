import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "./pages/details/Details"
import Home from "./pages/home/Home"
import Header from "./components/header/Header"

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Details />}>
          <Route path=':idPokemon' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Routers