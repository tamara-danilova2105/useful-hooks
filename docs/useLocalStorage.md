### `useLocalStorage`

Хук для работы с localStorage с синхронизацией и типизацией.

### Пример использования

```tsx
import { useLocalStorage } from '@techlab/useful-hooks';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Тема: {theme === 'light' ? 'Светлая' : 'Тёмная'}
    </button>
  );
};
```