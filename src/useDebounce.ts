import { useEffect, useState } from 'react';

/**
 * useDebounce задерживает обновление значения на указанный интервал.
 * @param value Значение, которое нужно "задебаунсить"
 * @param delay Задержка в миллисекундах
 * @returns Задержанное значение
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
}
