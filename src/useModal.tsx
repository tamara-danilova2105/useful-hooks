import { useState, ReactNode } from 'react';
import type { JSX } from 'react'
import { useOverflowHidden } from './useOverflowHidden';

type UseModalReturn = [
    (modalType?: string | React.MouseEvent<HTMLElement>) => void,
    (children: ReactNode, modalType?: string) => JSX.Element | null,
    boolean
];

/**
 * useModal — управляет отображением модального окна с поддержкой блокировки скролла.
 *
 * @returns [
 *   toggleModal — функция открытия/закрытия модалки (можно передать modalType),
 *   renderModal — функция-рендер модалки, если она активна,
 *   isOpen — булево состояние модалки
 * ]
 */

export const useModal = (): UseModalReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState<string | null>(null);
    useOverflowHidden(isOpen);

    const toggleModal = (
        modalType?: string | React.MouseEvent<HTMLElement>
    ) => {
        if (typeof modalType === 'string') {
            setCurrentModal(modalType);
        } else {
            setCurrentModal(null);
        }
        setIsOpen((prev) => !prev);
    };

    const renderModal = (
        children: ReactNode,
        modalType?: string
    ): JSX.Element | null => {
        const shouldRender = isOpen && (!modalType || currentModal === modalType);
        return shouldRender ? <>{children}</> : null;
    };

    return [toggleModal, renderModal, isOpen];
};
