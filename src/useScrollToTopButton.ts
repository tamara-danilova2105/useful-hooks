import { useEffect, useState } from "react";

/**
 * useShownOnScroll показывает элемент (например, кнопку «наверх»), если пользователь прокрутил страницу.
 *
 * @returns Объект:
 *  - isShow: boolean - флаг, нужно ли показывать элемент
 *  - handleScrollUp: () => void - функция плавной прокрутки страницы наверх
 *
 * @example
 * const { isShow, handleScrollUp } = useShownOnScroll();
 * {isShow && <button onClick={handleScrollUp}>⬆️</button>}
 */
export const useScrollToTopButton = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsShow(window.scrollY > 100 ? true : false);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    

    return { isShow, handleScrollUp };
}