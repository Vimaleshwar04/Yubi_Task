import React from 'react'

function Input({type="text",onChange,name="",value,placeholder,...rest}) {
  return (
    <input type={type} className="input" onChange={(e)=>onChange(e)} name={name} value={value} placeholder={placeholder} {...rest}/>
  )
}

export default Input