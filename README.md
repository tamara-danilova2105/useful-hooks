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

### `useModal`

Хук для управления открытием/закрытием модальных окон. Возвращает:
1. Функцию `toggleModal` для открытия/закрытия;
2. Функцию `renderModal(children)` — обёртку для отрисовки;
3. Состояние `isOpen`.

```tsx
import { useModal } from '@techlab/useful-hooks'
import { Modal } from './Modal'

const [toggleModal, renderModal, isOpen] = useModal()

return (
  <>
    <button onClick={() => toggleModal('example')}>Открыть</button>

    {renderModal(
      <Modal onClose={() => toggleModal()}>
        <div>Контент модалки</div>
      </Modal>,
      'example'
    )}
  </>
)
```
Поддерживает множественные модалки с разными modalType.

### `useLocalStorage`

Хук для работы с localStorage с синхронизацией и типизацией.

```tsx
const [value, setValue] = useLocalStorage<string>('key', 'default')
```
### `useOverflowHidden`

Хук для управления прокруткой страницы при открытии модалок, меню и других оверлеев.

```tsx
useOverflowHidden(isOpen: boolean): void
```
### `useWindowWidth`

Хук возвращает текущую ширину окна браузера и обновляется при изменении размера.

```tsx
const width: number = useWindowWidth()
```

### `useExpandableText`

Хук для отображения обрезанного текста с возможностью разворачивания.

```ts
const { isExpanded, displayText, toggleExpanded } = useExpandableText({ text, maxLength })
```
пример:

```tsx
const { isExpanded, displayText, toggleExpanded } = useExpandableText({
  text: "Очень длинный текст, который нужно сократить...",
  maxLength: 100
})

return (
  <>
    <p>{displayText}</p>
    <button onClick={toggleExpanded}>
      {isExpanded ? "Скрыть" : "Читать далее"}
    </button>
  </>
)
```

Удобен для описаний, новостей, отзывов и др.