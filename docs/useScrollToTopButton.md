## `useScrollToTopButton`

Хук отображает элемент (например, кнопку «наверх»), если пользователь прокрутил страницу ниже заданного порога.

### Аргументы

- `threshold?: number` — расстояние в пикселях, после которого элемент становится видимым (по умолчанию `100`).

### Пример использования

```tsx
import { useScrollToTopButton } from '@techlab/useful-hooks';

const { isShow, handleScrollUp } = useScrollToTopButton({ threshold: 150 });

return (
  <>
    {isShow && (
      <button onClick={handleScrollUp} className="to-top">
        ⬆️ Наверх
      </button>
    )}
  </>
);
```