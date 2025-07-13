import { useState, ReactNode } from 'react';
import type { JSX } from 'react'
import { useOverflowHidden } from './useOverflowHidden';

type UseModalReturn = [
    (modalType?: string | React.MouseEvent<HTMLElement>) => void,
    (children: ReactNode, modalType?: string) => JSX.Element | null,
    boolean
];

export const useModal = (isMobile?: boolean): UseModalReturn => {
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
