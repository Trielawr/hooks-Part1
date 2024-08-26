import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent';

const UseStateComponent = () => {
//useState:
// Створіть компонент, який використовує хук useState. При натисканні на кнопку нехай виводиться рандомно
// фразу “Hello …”, де “…” буде рандомне імʼя, додайте мінімум 5 імен.
    const nameArray = [
        { id: 1, name: "Ann" },
        { id: 2, name: "Taras"},
        { id: 3, name: "Oleg" },
        { id: 4, name: "Triela" },
        { id: 5, name: "Who else?" },
    ]
    
    const [idRender, setIdRender] = useState(randomID(1, nameArray.length));
    const newArrName = nameArray.filter(name => name.id === idRender);

    function randomID (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const changeNames = () => {
        setIdRender(randomID(1, nameArray.length));
    }

  return (
      <div>
          <h6 className='section-header'>UseState section</h6>
          <ButtonComponent
              type="button"
              className="btn"
              text="Name"
              onClick={ changeNames }
          />
          { newArrName.map((name, index) => <p key={ index }>Hello { name.name }</p>) }
      </div>
  )
}

export default UseStateComponent;