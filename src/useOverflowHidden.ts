import { useEffect } from 'react';

/**
 * useOverflowHidden блокирует прокрутку body при открытии модалки или другого элемента.
 *
 * @param isOpen Если true устанавливает overflow: hidden, иначе убирает
 */
export const useOverflowHidden = (isOpen: boolean) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
};