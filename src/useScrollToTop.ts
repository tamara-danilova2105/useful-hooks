import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollToTop прокручивает страницу вверх при изменении маршрута.
 *
 * Использует `useLocation` из react-router-dom для отслеживания path.
 *
 * @example
 * // Просто вызови хук внутри компонента-обёртки:
 * useScrollToTop();
 */
export const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};
