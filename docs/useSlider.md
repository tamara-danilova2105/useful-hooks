## `useSlider`

Хук для управления текущим активным индексом в слайдере, галерее или любом компоненте с циклической навигацией.

### Аргументы

- `maxLength: number` — общее количество элементов (слайдов, изображений и т.д.)

### Возвращает

- `activeIndex: number` — текущий активный индекс
- `nextImage: () => void` — перейти к следующему элементу (по кругу)
- `prevImage: () => void` — перейти к предыдущему элементу (по кругу)
- `setActiveIndex: (index: number) => void` — вручную установить активный индекс

### Пример использования

```tsx
const { activeIndex, nextImage, prevImage } = useSlide(images.length);

return (
  <div>
    <img src={images[activeIndex]} alt="slide" />
    <button onClick={prevImage}>←</button>
    <button onClick={nextImage}>→</button>
  </div>
);
```