## `useOnClickOutside`

Хук для обработки клика вне переданного DOM-элемента (например, чтобы закрыть модалку или меню).

### Пример использования

```tsx
import { useRef } from 'react'
import { useOnClickOutside } from '@techlab/useful-hooks'

function Modal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => {
    onClose()
  })

  return <div ref={ref}>...</div>
}
```