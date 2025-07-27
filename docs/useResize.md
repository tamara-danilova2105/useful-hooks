## `useResize`

Хук возвращает текущую ширину окна браузера и обновляет значение при ресайзе.

### Возвращает

- `width: number` — текущее значение `window.innerWidth`.

### Пример использования

```tsx
import { useResize } from '@techlab/useful-hooks';

const width = useResize();

return <p>Ширина окна: {width}px</p>;
```