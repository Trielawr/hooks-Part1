import React from 'react'

const NotRenderComponent = ({ memoInput }) => {

  return (
    <div>
      { memoInput.map((item, index) => <p key={ index }>{ item }</p>) }
      <p>Перевірте консоль </p> 
      { console.log("Компонент що не рендериться - Render") }
    </div>  
)
};

export default React.memo(NotRenderComponent);