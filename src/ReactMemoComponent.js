import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent';
import NotRenderComponent from './NotRenderComponent';

const ReactMemoComponent = () => {
//   React.memo()::
// Створіть компонент, який містить список елементів. Кожен елемент має кнопку "Видалити", яка видаляє елемент зі списку. Поруч
  // створіть ще один компонент, і зробіть так, щоб при видаленні елементу не було ререндеру компоненту який це не потребує.
  const InitialList = [
    { id: 0, title: "Елемент списку  1" },
    { id: 1, title: "Елемент списку  2" },
    { id: 2, title: "Елемент списку  3" },
    { id: 3, title: "Елемент списку  4" },
    { id: 4, title: "Елемент списку  5" },
  ];
  
  const [list, setList] = useState(InitialList);
  const [input, setInput] = useState('');
  const [memoInput, setMemoInput] = useState(["Список 1","Список 2"]);
   
  const onDelete = (id) => {
    const filterList = list.filter(item => item.id !== id);
    setList(filterList);
  };

  const onAdd = () => {
    if (input !== "") {
      let uuid = crypto.randomUUID();
    setList([...list, { id: uuid, title: input }])
    }  
  }

  return (
      <div>
      <h6 className='section-header'>ReactMemo section</h6>
      { list.map((item) =>
        <p key={ item.id }>{ item.title }
        <ButtonComponent
          text="Delete"
          type="button"
          className="btn"
          onClick={ () => onDelete(item.id) }
        />  
        </p>) }
      <input
          type='text'
          placeholder='new text'
          value={ input }
          onChange={ (e) => setInput(e.target.value) }
      /> 
      {input !== "" &&
        <ButtonComponent
        text="Add"
        type="button"
        className="btn"
        onClick={ onAdd }
        />
      }
      { console.log("Елементи списку - Render") }
    <p>Компонент який не має рендеритися при зміні списку </p>
      <NotRenderComponent memoInput = { memoInput } />
      </div>
  )
}

export default ReactMemoComponent;