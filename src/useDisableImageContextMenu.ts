import { useEffect } from 'react';

/**
 * useDisableImageContextMenu отключает контекстное меню (ПКМ) на изображениях.
 *
 * Добавляет глобальный слушатель на `contextmenu`, который вызывает `preventDefault`
 * для всех элементов <img>, предотвращая скачивание или просмотр изображения.
 *
 * @example
 * useDisableImageContextMenu();
 */
export const useDisableImageContextMenu = (): void => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent): void => {
            const target = e.target as HTMLElement;

            if (target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);
};