import { useEffect, useState } from "react";

/**
 * Хук, возвращающий текущую ширину окна браузера.
 * 
 * @returns {number} Текущее значение ширины `window.innerWidth`.
 * 
 * @example
 * const width = useResize();
 * console.log(`Текущая ширина экрана: ${width}px`);
 */
export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (e: UIEvent) => {
            setWidth((e.target as Window).innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width
}