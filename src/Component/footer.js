import React from 'react'
import vector from '../Icon/vector.svg'

function Footer() {
  return (
    <div style={{backgroundColor: "black", color: "white", width: "100%"}} className='position-sticky bottom-0 d-flex'>
        <img className ="ml-2" src ={vector} alt = "vector"/>
        <p className= 'ml-2 mt-3'>Copyright 2022. Byteworks Technology Solutions Limited. All Rights Reserved.</p>
    </div>
  )
}

export default Footer