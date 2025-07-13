## `useQueryParam`

Хук для работы с query-параметрами URL. Позволяет легко читать и обновлять параметры строки запроса.

### Пример использования

```tsx
const [tab, setTab] = useQueryParam('tab', 'overview');

// tab → "overview" (или значение из URL)
setTab('reviews'); // Обновит параметр ?tab=reviews в адресной строке
```