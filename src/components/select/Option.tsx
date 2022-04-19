import React from 'react'

function Option({props}:any) {
  return (
    <>
        {props.map((item:any , index:any)=>(
            <option key={index} value={item.value}>{item.label}</option>
        ))}
    </>
  )
}

export default Option