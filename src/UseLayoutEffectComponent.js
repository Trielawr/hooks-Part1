import React, { useLayoutEffect, useState } from 'react'
import ButtonComponent from './ButtonComponent';
import './Components.css';

const UseLayoutEffectComponent = () => {
//   useLayoutEffect:
// Створіть компонент, який використовує хук useLayoutEffect. У цьому хуці ви можете змінювати DOM
// безпосередньо. Створіть кнопку, яка при натисканні додає абзац до сторінки, використовуючи useLayoutEffect.
  // Перевірте, що зміни відображаються миттєво після натискання кнопки.
  const [inputText, setInputText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
 
  useLayoutEffect(() => {
    console.log("useLayoutEffect: ", paragraphs);
  },[paragraphs])
  
  const onAddInput = () => {
    setParagraphs([...paragraphs, inputText]);
    setInputText("");
  }

  const onClearParagraph = () => {
    setParagraphs([]);
  }

  return (
    <div>
      <h6>UseLayoutEffect section</h6>
      <label>Поле для введення абзацу</label>
      <textarea
        className='text'
        plaseholder="Введіть абзац"
        type="text"
        value={inputText}
        onChange= { (e) => setInputText(e.target.value) }/>
      <ButtonComponent
        className="btn"
        type="button"
        text="Add"
        onClick={onAddInput} />
      {
        paragraphs.map((paragraphItem, index) => <p className='paragraph' key={index}>{paragraphItem}</p>)
      }
      {
        paragraphs.length > 0 && 
        <ButtonComponent
        className="btn"
        type="button"
        text="Clear"
        onClick={onClearParagraph} />
      }
    </div>
  )
}

export default UseLayoutEffectComponent;