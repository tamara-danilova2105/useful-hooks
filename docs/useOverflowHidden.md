## `useOverflowHidden`

Хук для управления прокруткой страницы при открытии модалок, меню и других оверлеев.

### Пример использования

```tsx
import { useState } from 'react';
import { useOverflowHidden } from '@techlab/useful-hooks';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  useOverflowHidden(isOpen);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Открыть модалку</button>

      {isOpen && (
        <div className="modal">
          <p>Модалка</p>
          <button onClick={() => setIsOpen(false)}>Закрыть</button>
        </div>
      )}
    </>
  );
};
```