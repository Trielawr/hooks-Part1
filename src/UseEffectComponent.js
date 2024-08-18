import React, { useEffect, useState } from 'react'
import './Components.css';
import ButtonComponent from './ButtonComponent';

const UseEffectComponent = () => {
    // useEffect:
    // Створіть компонент, який використовує хук useEffect. При кожному оновленні компонента хук useEffect
    // має викликатися і виводити повідомлення в консоль. Перевірте, що повідомлення виводяться під час
    // рендерингу компонента та після його оновлення. (Оновлювати компонент маєте будь як)
    const [value, setValue] = useState(0);
    
    useEffect(() => {
        console.log(`Компонент value був створений value = ${value}`);
    }, []);

    useEffect(() => {
        console.log(`Відбулося оноловлення компонента value = ${value}`);
        }, [value]);

    const changeValueOnClick = () => {
        setValue(prevState => prevState + 1);
    }
    
    return (
        <div>
            <h6>UseEffect section</h6>
            <p>{ value }</p>
            <ButtonComponent
                className="btn"
                text="Click"
                type="button"
                onClick={ changeValueOnClick } />
            <br />
            {
                value > 0 &&
                <p>Перевірте консоль</p>
            }
            {
                value > 0 &&
                <ButtonComponent
                className="btn"
                text="Clear"
                type="button"
                onClick={ () => setValue(0) }/>
            }
    </div>
  )
}

export default UseEffectComponent;