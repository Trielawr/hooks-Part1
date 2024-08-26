import React from 'react'
import useWindowWidth from './useWindowWidth'

const CustomHookComponent = () =>  {
//     Кастомні хуки:
// Створіть свій власний кастомний хук. Наприклад, створіть хук useWindowWidth, який буде повертати поточну ширину вікна
// браузера. Використайте хук useEffect для прослуховування події зміни розміру вікна та оновлення ширини. Використайте цей
    // кастомний хук у своєму компоненті та виведіть ширину на сторінку.

 const windowWidth = useWindowWidth();
  return (
    <div>
      <h6 className='section-header'>CustomHook section</h6>
      <p>The current window width is {windowWidth}</p>
    </div>
    )
}

export default CustomHookComponent;