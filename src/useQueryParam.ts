import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * useQueryParam — хук для чтения и обновления query-параметров в URL.
 *
 * @template T Тип значения параметра (по умолчанию string)
 * @param key Название параметра в строке запроса
 * @param defaultValue Значение по умолчанию, если параметр отсутствует
 * @returns Кортеж: [значение параметра, функция для его обновления]
 *
 * @example
 * const [tab, setTab] = useQueryParam('tab', 'overview');
 * // tab: "overview" или значение из URL
 * // setTab('reviews') → обновит URL-параметр
 */
export function useQueryParam<T = string>(
    key: string,
    defaultValue?: T
): [T, (value: T) => void] {
    const [params, setParams] = useSearchParams();

    const value = useMemo(() => {
        const param = params.get(key)
        return (param ?? defaultValue) as T
    }, [params, key, defaultValue]);

    const setValue = (newValue: T) => {
        const updated = new URLSearchParams(params.toString())
        updated.set(key, String(newValue))
        setParams(updated, { replace: true });
    }

    return [value, setValue];
};
