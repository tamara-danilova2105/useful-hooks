### `useDisableImageContextMenu`

Отключает стандартное контекстное меню (правый клик) на всех изображениях (`<img>`), чтобы предотвратить их скачивание или копирование через меню браузера.

#### Пример использования

```tsx
function App() {
  useDisableImageContextMenu();

  return (
    <div>
      <img src="/image.jpg" alt="Example" />
    </div>
  );
}
```