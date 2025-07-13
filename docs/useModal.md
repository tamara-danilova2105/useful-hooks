## `useModal`

Хук для управления открытием/закрытием модальных окон. Возвращает:
1. Функцию `toggleModal` для открытия/закрытия;
2. Функцию `renderModal(children)` — обёртку для отрисовки;
3. Состояние `isOpen`.

### Пример использования

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