## `useWindowWidth`

Хук возвращает текущую ширину окна браузера и обновляется при изменении размера.

### Пример использования

```tsx
import { useWindowWidth } from '@techlab/useful-hooks';

const ResponsiveComponent = () => {
  const width = useWindowWidth();

  return (
    <div>
      {width < 768 ? 'Мобильная версия' : 'Десктопная версия'}
    </div>
  );
};
```