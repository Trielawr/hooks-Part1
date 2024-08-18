import React, { useRef, useState } from 'react'
import ButtonComponent from './ButtonComponent';

const UseRefComponent = () => {
//useRef:
// Створіть компонент, який використовує хук useRef. Створіть текстове поле та кнопку “Фокус" та “Блюр”. При
// натисканні на кнопку “Фокус”, фокус повинен переміститися в текстове поле за допомогою хука useRef. При
    // натисканні на кнопку “Блюр”, фокус має відмінитись із текстового поля.
    
    const [input, setInput] = useState('');
    const inputRef = useRef(0);

   return (
      <div>
          <h6>UseRef section</h6>
          <input
              type='text'
              placeholder='text'
              ref={inputRef}
              value={ input }
              onChange={ (e) => { setInput(e.target.value) } }/>
          <ButtonComponent
              text="Focus"
              className="btn"
              type="button"
              onClick={ () => inputRef.current.focus() }
          />
          <ButtonComponent
              text="Blur"
              className="btn"
              type="button"
              onClick={ () => inputRef.current.blur() }
          />
          <br />
          <ButtonComponent
              text="Clear Text field"
              className="btn"
              type="button"
              onClick={ () => setInput(" ") }
          />
      </div>
  )
}

export default UseRefComponent;