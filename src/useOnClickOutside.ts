import { useEffect, RefObject } from 'react';

/**
 * useOnClickOutside вызывает callback при клике вне указанного элемента.
 *
 * @param ref Ссылка на элемент, за пределами которого должен сработать клик
 * @param callback Функция, вызываемая при клике вне элемента
 */
export function useOnClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};
