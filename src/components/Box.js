import React from 'react'

export default function Box(props) {
  return (
    <div className='imgDiv col mx-2 mt-4 col-lg-2 col-md-4 col-sm-6'> <img src={props.img}/> </div>
  )
}
