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

Хук для управления отображением длинного текста с возможностью "развернуть/свернуть".  
Полезен для карточек, описаний, отзывов и других UI, где нужно сократить объём текста.

```ts
import { useExpandableText } from '@techlab/useful-hooks'

const { displayText, isExpanded, toggleExpanded } = useExpandableText({
  text: 'Очень длинный текст, который не помещается в блок',
  maxLength: 30
})
```

Удобен для описаний, новостей, отзывов и др.

### `useAutoPagination`

Реагирует на изменение высоты окна и вычисляет, **сколько строк может поместиться в доступную часть экрана**.

```ts
const rowsPerPage = useAutoPagination({
  offsetHeight: 420,
  rowHeight: 28,
})
```

## useQueryParam

Хук для работы с query-параметрами URL. Позволяет легко читать и обновлять параметры строки запроса.

### Пример использования

```tsx
const [tab, setTab] = useQueryParam('tab', 'overview');

// tab → "overview" (или значение из URL)
setTab('reviews'); // Обновит параметр ?tab=reviews в адресной строке
```