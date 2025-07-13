import { useEffect, useState } from "react";

/**
 * useSlide хук для управления индексом текущего элемента в слайдере/галерее.
 *
 * @param maxLength Общее количество элементов в слайдере
 * @returns Объект с активным индексом, функциями перехода вперёд/назад и ручной установки
 *
 * @example
 * const { activeIndex, nextImage, prevImage } = useSlide(images.length);
 */
export const useSlide = (maxLength: number) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [maxLength]);

    const prevImage = () => {
        setActiveIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            if (newIndex < 0) {
                newIndex = maxLength - 1;
            }
            return newIndex;
        });
    };

    const nextImage = () => {
        setActiveIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex >= maxLength) {
                newIndex = 0;
            }
            return newIndex;
        });
    };

    return { nextImage, prevImage, activeIndex, setActiveIndex };
};