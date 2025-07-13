## `useDebounce`

Хук, который возвращает значение с задержкой.

### Пример использования

```tsx
import { useDebounce } from '@techlab/useful-hooks'
import { useState, useEffect } from 'react'

const [inputValue, setInputValue] = useState('')
const debouncedValue = useDebounce(inputValue, 300)

useEffect(() => {
  // Например, можно отправить запрос на сервер
  if (debouncedValue) {
    console.log('Поиск по:', debouncedValue)
  }
}, [debouncedValue])
```