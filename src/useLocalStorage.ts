import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.warn(`useLocalStorage error on init:`, error)
            return initialValue
        }
    })

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.warn(`useLocalStorage error on set:`, error)
        }
    }

    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key === key && event.newValue !== null) {
                setStoredValue(JSON.parse(event.newValue))
            }
        }
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [key])

    return [storedValue, setValue] as const
}
