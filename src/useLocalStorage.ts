import { useEffect, useState } from "react";

/**
 * useLocalStorage синхронизирует значение с localStorage.
 * @param key Ключ в localStorage
 * @param initialValue Значение по умолчанию
 * @returns [value, setValue]
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storageValue, setStorageValue] = useState<T>(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storageValue));
    }, [key, storageValue]);

    return [storageValue, setStorageValue] as const;
};