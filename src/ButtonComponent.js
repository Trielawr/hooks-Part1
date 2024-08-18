import React from 'react'

function ButtonComponent({className, text, type, onClick}) {
  return (
    <button
      className = { className }
      type={ type }
      onClick={ onClick }>
      { text }</button>
  )
}

export default ButtonComponent;