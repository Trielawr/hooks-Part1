import React, { useState, useMemo } from 'react'
import ButtonComponent from './ButtonComponent';

const UseMemoComponent = () => {
    // useMemo:
    // Створіть компонент, який містить список чисел. Використовуючи хук useMemo, обчисліть суму всіх чисел у списку та відображайте її
    // на сторінці. Переконайтеся, що обчислення суми відбувається тільки при зміні списку чисел.
    const initialList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [input, setInput] = useState("");
    const [list, setList] = useState(initialList);
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);
    

    const listSum = useMemo(() => {
        setRenderCount(renderCount + 1);
        return list.reduce((sum, currentValue) => sum + currentValue, 0);
    }, [list]);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const onAdd = () => {
        console.log(isNaN(Number(input)));
        if (!isNaN(Number(input)))
            setList([...list, Number(input)]);
        else throw new Error("Введіть цифру а не якусь біліберду");
    }
     
    return (
        <div>
            <h6 className='section-header'>UseMemo section</h6>
            <p>Список чисел, що необхідно обчислити</p>
            <p>{ list }</p>
            <p> Сума чисел - { listSum }</p>
            <p>Кнопка для перерендерингу</p>
            <ButtonComponent
                type="button"
                text="+1"
                className="btn"
                onClick={ increaseCount }
            />
            { count }
            <p>Кількість рендерів суми чисел  - { renderCount }</p>
             <p>Додавання числа до списку чисел</p>
            <input
                type='text'
                placeholder='new number'
                value={ input }
                onChange={ (e) => setInput(e.target.value) }
            />
            <ButtonComponent
                type="button"
                text="Add"
                className="btn"
                onClick={ onAdd }
            />
        </div>
  )
}

export default UseMemoComponent;