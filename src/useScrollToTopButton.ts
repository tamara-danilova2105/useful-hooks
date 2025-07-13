import { useEffect, useState } from "react";

interface UseScrollToTopButtonOptions {
    threshold?: number; // Порог прокрутки, после которого показывается кнопка
}

/**
 * useScrollToTopButton — показывает элемент (например, кнопку «наверх»), если пользователь прокрутил страницу.
 *
 * @param options.threshold Порог прокрутки (в px), после которого показывать кнопку. По умолчанию 100.
 * @returns Объект:
 *  - isShow: boolean — флаг, нужно ли показывать элемент
 *  - handleScrollUp: () => void — функция плавной прокрутки страницы наверх
 *
 * @example
 * const { isShow, handleScrollUp } = useScrollToTopButton({ threshold: 200 });
 * {isShow && <button onClick={handleScrollUp}>⬆️</button>}
 */
export const useScrollToTopButton = ({ threshold = 100 }: UseScrollToTopButtonOptions = {}) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsShow(window.scrollY > threshold);
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [threshold]);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return { isShow, handleScrollUp };
};
