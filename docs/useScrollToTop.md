## `useScrollToTop`

Прокручивает страницу наверх при изменении маршрута (`pathname`), например, при переходе между страницами.

### Пример использования

```tsx
function AppLayout() {
  useScrollToTop();

  return <Outlet />;
}
```