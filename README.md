# @techlab/useful-hooks

Коллекция полезных React-хуков, созданная командой TechLab.

Библиотека предназначена для повторного использования логики состояния, задержек, подписок и других типичных шаблонов в React-приложениях. Вместо копирования кода — просто подключай нужный хук.

---

## 📦 Установка

Через npm:

```bash
npm install @techlab/useful-hooks
```

Через yarn:
```bash
yarn add @techlab/useful-hooks
```

### `useDebounce`
Хук, который возвращает значение с задержкой.

```tsx
import { useDebounce } from '@techlab/useful-hooks'

const debounced = useDebounce(inputValue, 300)
```

Полезно для: задержки при вводе, фильтрации, отправке запросов и т.д.

### `useOnClickOutside`

Хук для обработки клика вне переданного DOM-элемента (например, чтобы закрыть модалку или меню).

```tsx
import { useRef } from 'react'
import { useOnClickOutside } from '@techlab/useful-hooks'

function Modal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => {
    onClose()
  })

  return <div ref={ref}>...</div>
}
```

Удобен для модальных окон, меню и всплывающих панелей.