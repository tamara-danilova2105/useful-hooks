import { useEffect, useState } from "react";

/**
 * useWindowWidth — отслеживает ширину окна и обновляет значение при ресайзе.
 *
 * @returns Текущее значение window.innerWidth
 */
export const useWindowWidth = () => {
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

    return width;
};