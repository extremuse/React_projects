import React from 'react'

const button = ({text , icon ,bg}) => {
  return (
    <>
    <button className={bg} >{icon}{text}</button>
    </>
  )
}

export default button