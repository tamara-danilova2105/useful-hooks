## `useHover`

Хук для отслеживания наведения мыши на элемент. Возвращает булево значение `isHover` и объект `bind`, содержащий `onMouseEnter` / `onMouseLeave`.

### Возвращает

- `isHover: boolean` — флаг наведения
- `bind: { onMouseEnter, onMouseLeave }` — обработчики, которые нужно повесить на элемент

## Пример использования

```tsx
const [isHover, hoverBind] = useHover();

return (
  <div {...hoverBind}>
    {isHover ? '🟢 Наведено' : '⚪️ Не наведено'}
  </div>
);
```