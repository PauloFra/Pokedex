import React from 'react'
function Header() {
  return (
    <div>
        <div>
            <h1>Pokedex</h1>
        </div>
        <input type="text" placeholder='Porcurar' onBlur={()=>{alert('Teste')} }/>
    </div>
  )
}

export default Header