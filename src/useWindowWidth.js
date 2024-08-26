import { useState, useEffect } from 'react';

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function widthResize() {
            setWidth(window.innerWidth)
        };
        
        window.addEventListener('resize', widthResize);
        // return () => {
        //     window.removeEventListener('resize', widthResize);
        // };
    });
    return width;
};

export default useWindowWidth;