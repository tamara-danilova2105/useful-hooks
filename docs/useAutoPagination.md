## `useAutoPagination`

Реагирует на изменение высоты окна и вычисляет, **сколько строк может поместиться в доступную часть экрана**.

### Пример использования

```tsx
import { useAutoPagination } from '@techlab/useful-hooks';

const TableComponent = () => {
  const rowsPerPage = useAutoPagination({
    offsetHeight: 420, // Высота всего layout-а, включая paddings и прочее
    rowHeight: 28,     // Средняя высота строки
  });

  return (
    <div>
      <p>Отображается {rowsPerPage} строк на странице</p>
      <table>
        {/* Здесь можно отобразить rowsPerPage строк данных */}
      </table>
    </div>
  );
};