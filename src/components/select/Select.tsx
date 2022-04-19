import React from 'react'
import opt from '../../opt.json'
import Option from './Option'
import { SelectDefault } from '../../pages/home/Home.styles';
function Select({event}:any) {
    const {genracoes} = opt;
  return (
    <>
        <SelectDefault name="select" id="select" onChange={event} >
            <Option props={genracoes}/>
        </SelectDefault>
    </>
  )
}

export default Select