import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

/**
 * useHover хук для отслеживания наведения курсора на элемент.
 *
 * @returns Кортеж:
 *  - isHover: boolean — находится ли курсор над элементом
 *  - bind: { onMouseEnter, onMouseLeave } — обработчики, которые нужно повесить на DOM-элемент
 *
 * @example
 * const [isHover, hoverBind] = useHover();
 * <div {...hoverBind}>{isHover ? 'Hovered' : 'Not hovered'}</div>
 */
export const useHover = (): UseHoverResult  => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => [
        isHover,
        {
            onMouseEnter,
            onMouseLeave,
        },
    ], [isHover, onMouseEnter, onMouseLeave]);
};