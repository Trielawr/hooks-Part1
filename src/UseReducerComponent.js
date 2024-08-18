import React from 'react';
import ButtonComponent from './ButtonComponent';
import { useState, useReducer } from 'react';

const UseReducerComponent = () => {
  //useReducer:
  // Створіть компонент, який використовує хук useReducer. Додайте 3 кнопки “Імʼя”, “Пвізвище”, “Рік народження”.
  // Додайте аналогічні 3 текстові поля “input”. initialState = {name: ‘’, lastName: ‘’, birthYear: ‘’}. Після вводу в текстове
  // поле з іменем і натискання на кнопку “Імʼя”, має додати введений текст в обʼєкт поле “name”, і т.д. Виведіть
  // обʼєкт на екран.
  const initialState = {
    name: " ",
    lastName: " ",
    birthYear: " ",
  };
    
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputBirthYear, setInputBirthYear] = useState("");
    
  const reducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return { ...state, name: inputName };
      case 'lastName':
        return { ...state, lastName: inputLastName };
      case 'birthYear':
        return { ...state, birthYear: inputBirthYear };
      case 'reset':
        return { ...state, name: " " , lastName: " ", birthYear: " "};
      default:
        throw new Error("Якась незрозуміла помилка");
    }
  }
     
  const [state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <div>
      <h6>UseReduser section</h6>
      <ButtonComponent
        type="button"
        className="btn"
        text="Імя"
        onClick={ () => dispatch({ type: 'name' }) }
      />
      <input
        type='text'
        placeholder='name'
        value={ inputName }
        onChange={ (e) => setInputName(e.target.value) } />
      <br />
      <ButtonComponent
        type="button"
        className="btn"
        text="Прізвище"
        onClick={ () => dispatch({ type: 'lastName' }) }
      />
      <input
        type='text'
        placeholder='Last name'
        value={ inputLastName }
        onChange={ (e) => setInputLastName(e.target.value) } />
      <br />
      <ButtonComponent
        type="button"
        className="btn"
        text="Рік народження"
        onClick={ () => dispatch({ type: 'birthYear' }) }
      />
      <input
        type='text'
        placeholder='birth day'
        value={ inputBirthYear }
        onChange={ (e) => setInputBirthYear(e.target.value) } />
      <br />
      {state !== initialState &&
        <ButtonComponent
        type="button"
        className="btn"
        text="Clear"
        onClick={ () => {dispatch({ type: 'reset' })} }
      />}
     { state.name !== " " && <p> name: {state.name}</p> } 
     { state.lastName !== " " && <p> lastname: {state.lastName}</p> }
     { state.birthYear !== " " && <p> birthYear: {state.birthYear}</p> }
    </div> 
  )
}

export default UseReducerComponent;
