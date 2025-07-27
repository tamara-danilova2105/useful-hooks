# @techlab/useful-hooks

## 1.1.4

### Patch Changes

- 8e101d1: добавлен хук useResize для отслеживания ширины экрана браузера

## 1.1.3

### Patch Changes

- Добавлена поддержка react-router-dom 7.0.0

## 1.1.2

### Patch Changes

- отредактировано README.md

## 1.1.1

### Patch Changes

- Переход на организацию techlabteam

## 1.1.0

### Minor Changes

- Добавлены кастомные хуки:

  - `useDebounce` — возвращает значение с задержкой
  - `useLocalStorage` — синхронизирует данные с localStorage
  - `useModal` — управление модальными окнами
  - `useOnClickOutside` — обработка клика вне элемента
  - `useHover` — определяет, наведен ли курсор
  - `useOverflowHidden` — блокирует прокрутку при открытии модалок
  - `useWindowWidth` — следит за шириной окна
  - `useExpandableText` — отображает сокращённый текст с возможностью развёрнуть
  - `useAutoPagination` — рассчитывает число строк на экране
  - `useQueryParam` — работа с query-параметрами в URL
  - `useScrollToTop` — прокручивает страницу наверх
  - `useScrollToTopButton` — отображает кнопку прокрутки наверх
  - `useSlider` — управление слайдером
  - `useDisableImageContextMenu` — отключает контекстное меню на изображениях

  Это первая партия хуков в библиотеке `@techlabteam/useful-hooks`.
