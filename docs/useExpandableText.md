## `useExpandableText`

Хук для управления отображением длинного текста с возможностью "развернуть/свернуть".  
Полезен для карточек, описаний, отзывов и других UI, где нужно сократить объём текста.

### Пример использования

```tsx
import { useExpandableText } from '@techlab/useful-hooks';
import { useState } from 'react';

export const DescriptionBlock = () => {
  const { displayText, isExpanded, toggleExpanded } = useExpandableText({
    text: 'Это очень длинное описание, которое не помещается в отведённое пространство. Пользователь может нажать на кнопку, чтобы увидеть текст полностью или свернуть обратно.',
    maxLength: 80,
  });

  return (
    <div>
      <p>{displayText}</p>
      <button onClick={toggleExpanded}>
        {isExpanded ? 'Свернуть' : 'Развернуть'}
      </button>
    </div>
  );
};
```